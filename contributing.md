## How to Contribute

If you'd like to contribute, a good place to start is by searching through the [issues](https://github.com/benreckas/iris-app/issues) and [pull requests](https://github.com/benreckas/iris-app/pulls) to see if someone else had a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of the project, you should:

* **Minor Contribution _(e.g., typo fix)_:** Open a pull request
* **Major Contribution _(e.g., new feature)_:** Start by opening an issue first. That way, other people can weigh in on the discussion and planning before you do any work.

To start making a contribution:

1. `fork` the project repository by clicking the **fork** button on GitHub.

1. `clone` your forked repository:

   ```shell
   $ git clone https://github.com/<YOUR-USERNAME>/iris-app
   ```

1. Add a new remote that points to the original project so you can sync project changes with your local copy:

   ```shell
   $ git remote add upstream https://github.com/benreckas/iris-app
   ```

1. Pull upstream changes into your local repositories `development` branch:

   ```shell
   $ git checkout development
   $ git pull upstream development && git push origin development
   ```

1. Create a new branch from the `development` branch:

   **IMPORTANT:** Make sure you are on the `development` branch first.

   ```shell
   $ git checkout -b <YOUR-NEW-BRANCH>
   ```

1. Make your contribution to the project code.

1. Write or adapt tests as needed.

1. Add or change documentation as needed.

1. After commiting changes, push your branch to your fork on Github, the remote `origin`:

   **IMPORTANT:** Your commit message should be in present tense and should describe what the commit, when applied, does to the code - not what you did to the code.

   ```shell
   $ git push -u origin <YOUR-NEW-BRANCH>
   ```

1. From your forked GitHub repository, open a pull request in the branch containing your contributions. Target the project's `development` branch for the pull request.

1. At this point, your contribution has been submitted for review. Please be patient while your contribution is being reviewed as this can take some time. Meanwhile, if there are questions or comments on your contribution, please respond and/or update with future commits.

1. Once the pull request is approved and merged, you can pull the changes from `upstream` to your local repository and delete your extra branch(es).

Happy contributing!
