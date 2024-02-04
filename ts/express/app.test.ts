import { describe, test, it, expect } from "vitest";
// @ts-ignore  TODO: why can't it import supertest for types?
import request from "supertest";

import app from "./app";


test("/", async function() {
  const resp = await request(app).get("/");
  expect(resp.text).toEqual("2 + 3 = 5");
})
