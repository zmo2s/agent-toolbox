import test from "node:test";
import assert from "node:assert/strict";
import { addTodo } from "../src/todo.js";

test("creates a todo", () => {
  assert.deepEqual(addTodo("Buy milk"), {
    title: "Buy milk",
    completed: false,
  });
});

test("trims the title", () => {
  assert.equal(addTodo("  Buy milk  ").title, "Buy milk");
});

test("rejects an empty title", () => {
  assert.throws(() => addTodo("   "), /Todo title is required/);
});
