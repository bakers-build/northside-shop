# Northside shop

A small demo website for the fictional Northside Bakery, built with React and Vite. It is the
example project of the bakers.build introduction video. Everything in it is demo data.

## Run

```sh
npm install
npm run dev     # the site, on the port Vite prints
npm test        # the tests
npm run build   # the production build in dist/
```

The shop's data is `src/shop.json`. It has no opening hours: adding them is the demo task.

## Set up for a recording

1. Create a GitLab project and push this repository to `main`. Tag the start:
   `git tag demo-start && git push origin demo-start`.
2. In the GitLab project, create the labels `doing` and `review`.
3. Connect the repository as a bakers.build project. Keep this `WORKFLOW.md`.
4. Create the issue **Show opening hours on the contact page**: "Customers call to ask when we
   are open. Show the opening hours on the contact page."

## Reset after a run

1. Close the merge request and delete its branch.
2. If the change was merged: `git checkout main && git reset --hard demo-start && git push --force origin main`.
3. Close the old issue and create it again, without labels.
