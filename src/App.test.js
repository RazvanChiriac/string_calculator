import { Add } from "./App";

describe("Add", () => {
  it("should return an integer", () => {
    expect(Add("2")).toBe(2);
    expect(Add("40")).toBe(40);
  });
});
