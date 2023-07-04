import BrowserSync from 'browser-sync';
import gulp from 'gulp';
import inquirer from 'inquirer';
import kebabCase from 'lodash.kebabcase';
import { exec, spawn } from 'node:child_process';
import fs from 'node:fs';
import { sep } from 'node:path';
import tomlify from 'tomlify-j0.4';
import toml from 'tomljs';

const browserSync = BrowserSync.create();
const hugoBin = `hugo`;
const defaultArgs = ['--source', 'site', '--logLevel', 'warn', '--destination', '../public'];
const { series, watch } = gulp;

const getPlatform = (platform) => {
  switch (platform) {
    case 'win32':
    case 'win64': {
      return 'windows';
    }
    default: {
      return platform;
    }
  }
};

const generateFrontMatter = (frontMatter, answers) => `+++
${tomlify.toToml(frontMatter, null, 2)}
+++
${answers.description}`;

const hugo = (done, options) => {
  spawn(hugoBin, ['version'], {
    stdio: 'inherit',
  });

  let args = options ? defaultArgs.concat(options) : defaultArgs;

  // cp needs to be in site directory
  spawn(hugoBin, args, {
    stdio: 'inherit',
  }).on('close', (code) => {
    if (code === 0) {
      browserSync.reload();
      done();
    } else {
      browserSync.notify('Hugo build failed :(');
      done('Hugo build failed');
    }
  });

  return done;
};

const hugoPreview = (done) => hugo(done, ['--watch']);

export const server = series(hugo, () => {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
  watch('./site/**/*', hugoPreview);
});

export const newIncident = (done) => {
  const file = fs.readFileSync(`site${sep}hugo.toml`).toString();
  const config = toml(file);

  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the cause of the incident?',
      validate: (value) => {
        if (value.length > 0) {
          return true;
        }

        return 'You must have a cause title!';
      },
    },
    {
      type: 'list',
      name: 'severity',
      message: 'What is the severity of the incident?',
      choices: ['under-maintenance', 'degraded-performance', 'partial-outage', 'major-outage'],
    },
    {
      type: 'checkbox',
      name: 'affected',
      message: 'What are the affected systems?',
      choices: config.params.systems,
      validate: (value) => {
        if (value.length > 0) {
          return true;
        }

        return 'You must have an affected system?!';
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a terse description of the incident',
    },
    {
      type: 'confirm',
      name: 'open',
      message: 'Open the incident for editing?',
      default: false,
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    let args = ['new', `incidents${sep}${kebabCase(answers.name)}.md`];
    args = args.concat(defaultArgs);

    const hugo = spawn(hugoBin, args, {
      stdio: 'pipe',
    });

    hugo.stdout.on('data', (data) => {
      const message = data.toString();

      const match = message.match(/(Content) "(?<path>.*)" (?<status>created)/);
      try {
        if (match.length !== 4 && match.groups.status !== 'created') {
          return;
        }
      } catch (e) {
        throw new Error('Failed to create incident: ' + message);
      }

      const path = match.groups.path;
      const incident = fs.readFileSync(path).toString();
      const frontMatter = toml(incident);

      frontMatter.severity = answers.severity;
      frontMatter.affectedsystems = answers.affected;
      frontMatter.title = answers.name.replace(/-/g, ' ');

      const content = generateFrontMatter(frontMatter, answers);

      fs.writeFileSync(path, content);

      if (!answers.open) {
        return null;
      }

      let cmd = 'xdg-open';
      switch (getPlatform(process.platform)) {
        case 'darwin': {
          cmd = 'open';
          break;
        }
        case 'windows': {
          cmd = 'start';
          break;
        }
        default: {
          cmd = 'xdg-open';
          break;
        }
      }

      const command = `${cmd} ${path}`;
      console.log(`Opening ${path} with ${cmd}...`);

      exec(command);
    });
    hugo.on('close', (code) => {
      if (code === 0) {
        done();
      } else {
        done('new incident creation failed');
      }
    });
  });
};

export default hugo;
