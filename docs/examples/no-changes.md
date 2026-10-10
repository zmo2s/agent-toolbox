# No changes to commit

When the working tree is clean, Good Commit should report that there is
nothing to commit. It must not invent a message or imply that it staged
or committed files.

For example, the checks may look like this:

```text
$ git status --short

$ git diff --cached

No changes to commit.
Nothing was staged or committed.
```

The empty output from both Git commands is the evidence: there are no
staged or unstaged changes to describe. Good Commit should stop here and
wait for a later request if the user wants to make changes.
