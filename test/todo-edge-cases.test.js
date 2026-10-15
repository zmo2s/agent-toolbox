import test from "node:test";
import assert from "node:assert/strict";
import { addTodo } from "../src/todo.js";

test("rejects a missing title", () => {
  assert.throws(() => addTodo(), /Todo title is required/);
});

test("rejects tabs and newlines as an empty title", () => {
  assert.throws(() => addTodo("\t\n  "), /Todo title is required/);
});

test("preserves inner spaces while trimming outer whitespace", () => {
  assert.deepEqual(addTodo("  Buy  milk  "), {
    title: "Buy  milk",
    completed: false,
  });
});
