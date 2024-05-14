import express from "express";
import { NotFoundError } from "./expressError.js";
import { add } from "./add.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

/** Sample route */
app.get("/", function (req, res) {
  return res.send(`2 + 3 = ${add(2, 3)}`);
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  /* istanbul ignore next (ignore for coverage) */
  const status= err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

export default app;