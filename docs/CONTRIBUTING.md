# Contributing to Twitter Crypto Bot

Thank you for reading the contribution guidelines of this project. It will help you to make great contributions like reporting issues, creating feature requests, and submitting pull requests.

## Issues, Feature Request & Questions

Before submitting **bug reports**, **documentation improvements requests**, **feature requests**, or **questions**, please do a quick search in [Open Issues](https://github.com/totigm/twitter-crypto-bot/issues) to verify if it was already created. If there is an existing issue, add your comments to that one.

### Writing Great Issues & Feature Requests

- Provide reproducible steps, what the result of the steps was, and what you expected to happen.
- Avoid listing multiple bugs or requests in the same issue. Always write a single bug or feature request per issue.
- Avoid adding your issue as a comment to an existing one unless it's for the same exact input. Issues can look similar, but have different causes.
- Add screenshots or animated GIFs if needed.

### Submitting Issues

1. Go to the [repository](https://github.com/totigm/twitter-crypto-bot) page, go to the [Issues section](https://github.com/totigm/twitter-crypto-bot/issues), and then click on the [New issue button](https://github.com/totigm/twitter-crypto-bot/issues/new/choose).
2. Choose the **template** that fits to your case.
   1. Bug
   2. Documentation improvement request
   3. Feature request
   4. Question
3. Fill the issue template with the requested information.

## Development Guidelines

### Branching Model

- **Main**: Accepts merges from Features/Issues and Hotfixes
- **Features/Issues**: Always branch off from Main

  - Prefix: `${action}/*`. E.g.: `add/new-charts`, `fix/tweet-message`

  > Actions available: `add`, `update`, `fix`, and `remove`

- **Hotfix**: Always branch off from Main

  - Prefix: `hotfix/*` e.g.: `hotfix/remove-duplicate-tweet`

### Contributing

If you are going to contribute to this project, follow the next steps:

1. Clone the repo.

   ```
   git clone https://github.com/totigm/twitter-crypto-bot.git
   ```

2. Go to the **twitter-crypto-bot** directory and install the dependencies.

   ```
   cd twitter-crypto-bot
   npm install
   ```

3. Make your great contribution. Like enhancements, updates, hotfixes. Please, remember to follow the [branching model](#branching-model)

### Submit contribution

Pull Requests are a great way to keep track of tasks, enhancements, and bugs for the projects. When we are writing them, we must think about how the rest of the team is going to read it, and what kind of information we will place into it to make it easy to read and understand their changes. Follow these practices to help you to write great pull requests.

#### Writing great pull requests

In order to follow styling guides and keep the code well formatted, please run the [ESLint](https://eslint.org) and [Prettier](https://prettier.io) tools before submitting your pull request. You can use the `npm run lint` or `yarn lint` commands to verify warnings and errors. Then, use `npm run lint:fix` or `yarn lint:fix` to fix the auto-fixable errors.

- Choose a descriptive title and add the context of the changes using brakes.
  - ex: `[Feature] Add charts to tweets`, `[Documentation improvement] Add deployment guide`
- If the pull request fixes an issue:
  - Add the name of the issue as the title.
    - e.g.: ISSUE #008: `Fix tweet message` ---> PR Title: `[ISSUE#008] Fix tweet message`
- Provide all the information about the changes made in the pull request.
- Add screenshots or animated GIFs.
