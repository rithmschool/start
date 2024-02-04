import { describe, test, it, expect } from "vitest";

import { check } from "./main";

test("check", function () {
  expect(check()).toEqual(42);
})