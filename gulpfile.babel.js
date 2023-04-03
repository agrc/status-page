import BrowserSync from "browser-sync";
import cp from "child_process";
import del from "del";
import fs from "fs";
import gulp from "gulp";
import inquirer from "inquirer";
import kebabCase from "lodash.kebabcase";
import path from "path";
import toml from "tomljs";
import tomlify from "tomlify-j0.4";

const browserSync = BrowserSync.create();
const hugoBin = `hugo`;
const defaultArgs = ["-s", "site", "-v", "-d", "../public"];


const generateFrontMatter = (frontMatter, answers) => `+++
${tomlify.toToml(frontMatter, null, 2)}
+++
${answers.description}`;


const hugo = (done, options) => {
  cp.spawn(hugoBin, ["version"], {
    stdio: "inherit"
  });

  let args = options ? defaultArgs.concat(options) : defaultArgs;

  // cp needs to be in site directory
  cp.spawn(hugoBin, args, {
    stdio: "inherit"
  }).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      done();
    } else {
      browserSync.notify("Hugo build failed :(");
      done("Hugo build failed");
    }
  });

  return done;
};

export const server = gulp.series(hugo, () => {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("./site/**/*", hugo);
});

export const newIncident = (done) => {
  const file = fs.readFileSync("site/config.toml").toString();
  const config = toml(file);

  const questions = [{
    type: "input",
    name: "name",
    message: "What is the cause of the incident?",
    validate: (value) => {
      if (value.length > 0) {
        return true;
      }

      return "You must have a cause title!";
    }
  }, {
    type: "list",
    name: "severity",
    message: "What is the severity of the incident?",
    choices: ["under-maintenance", "degraded-performance", "partial-outage", "major-outage"]
  }, {
    type: "checkbox",
    name: "affected",
    message: "What are the affected systems?",
    choices: config.params.systems,
    validate: (value) => {
      if (value.length > 0) {
        return true;
      }

      return "You must have an affected system?!";
    }
  }, {
    type: "input",
    name: "description",
    message: "Add a terse description of the incident"
  }, {
    type: "confirm",
    name: "open",
    message: "Open the incident for editing?",
    default: false
  }];

  inquirer.prompt(questions).then((answers) => {
    let args = ["new", `incidents${path.sep}${kebabCase(answers.name)}.md`];
    args = args.concat(defaultArgs);

    const hugo = cp.spawn(hugoBin, args, {
      stdio: "pipe"
    });
    hugo.stdout.on("data", (data) => {
      const message = data.toString();

      if (message.indexOf(" created") === -1) {
        return;
      }

      const path = message.split(" ")[0];

      const incident = fs.readFileSync(path).toString();
      const frontMatter = toml(incident);

      frontMatter.severity = answers.severity;
      frontMatter.affectedsystems = answers.affected;
      frontMatter.title = answers.name.replace(/-/g, " ");

      const content = generateFrontMatter(frontMatter, answers);

      fs.writeFileSync(path, content);

      if (!answers.open) {
        return null;
      }

      let cmd = "xdg-open";
      switch (platform) {
        case "darwin": {
          cmd = "open";
          break;
        }
        case "windows": {
          cmd = "start";
          break;
        }
        default: {
          cmd = "xdg-open";
          break;
        }
      }

      cp.exec(`${cmd} ${path}`);
    });

    hugo.on("close", (code) => {
      if (code === 0) {
        done();
      } else {
        done("new incident creation failed");
      }
    });
  });
};

export const clean = (done) => del(["public"], done);
export const hugoPreview = (done) => hugo(done, ["--watch", "--buildDrafts", "--buildFuture"]);
export const build = gulp.series(clean, hugo);
export const buildPreview = gulp.series(clean, hugoPreview);
export default hugo;
