# Northside shop — WORKFLOW

Invoke `bakers:bb-workflow` and follow it for the ticket's current state.

## bb-phase-provision

No work needs a running environment. Install dependencies with `npm ci` before a check.

## bb-phase-work

| When | Skill |
|---|---|

## bb-phase-validate

| When | Command |
|---|---|
| Any change | `npm test && npm run build` |

## bb-phase-deliver

Work lands through a squash-merged merge request into `main`.

## bb-phase-outtake

No login needed: the site is public. Preview with `npm run dev`.

## bb-phase-transition

| State | Origin label |
|---|---|
| qualification | doing |
| plan | doing |
| working | doing |
| review | doing |
| done | review |
