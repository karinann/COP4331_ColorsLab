import { buildColorPayload } from "../js/code.js";

test("payload contains the correct color", () => {
  const result = JSON.parse(buildColorPayload("red", 1));
  expect(result.color).toBe("red");
});

test("payload contains the correct userId", () => {
  const result = JSON.parse(buildColorPayload("red", 1));
  expect(result.userId).toBe(1);
});

test("rejects empty color", () => {
  const result = JSON.parse(buildColorPayload("", 1));
  expect(result.color).toBe("");
});