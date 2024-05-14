import { describe, test, it, expect } from "vitest";
import request from "supertest";

import app from "./app.js";

test("/", async function() {
  const resp = await request(app).get("/");
  expect(resp.text).toEqual("2 + 3 = 5");
})
