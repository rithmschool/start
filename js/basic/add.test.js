import { describe, test, it, expect } from "vitest";
import { add } from "./add.js";

test("add works", function () {
  expect(add(2, 3)).toEqual(5);
});
