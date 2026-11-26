# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/ikiroki15-web/entry-u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/ikiroki15-web/entry-u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

## What it does

`main.ts` writes a single painfully honest — yet still polite — out-of-office
email auto-reply to `/output/entry.txt`: one sentence, 148 characters, no
trailing extra lines.

> I'm out of office and will reply slowly, because I have 400 unread emails and no enthusiasm left to pretend otherwise — thank you for understanding.

## How to run

Requires Node 22:

```sh
node main.ts
```

The program validates its own output (one sentence, 1–200 characters) before
writing and fails loudly if the reply is too long.
