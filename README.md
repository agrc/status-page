# UGRC System Status Page

## ✨ New Incidents

To create a new incident, use the `New incident` [issue template](https://github.com/agrc/status-page/issues/new/choose). If you have permissions to run the action, a draft pull request will be opened for you based on the information provided in the issue template.

The incident's reported date is generated automatically when you submit the form and stored as a UTC timestamp. The page displays it in each visitor's local timezone, so you do not need to enter or convert a date.

When adding an update directly to an incident file, use an ISO 8601 timestamp with a timezone. Prefer UTC with a trailing `Z`, for example: `<Update date="2026-10-30T13:00:00.000Z">Update text</Update>`. The update will also display in each visitor's local timezone.

## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── content/
│       └── incidents
└── package.json
```

This is where the current and previous incident posts are. If you need to edit one, you can find it in there.

## Hosting and Deployment

This app is hosted on Netlify. New deploys are triggered on every push to `main`.

## Attribution

This project was developed with the assistance of [GitHub Copilot](https://github.com/features/copilot).
