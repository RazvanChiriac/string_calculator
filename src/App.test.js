import { Add } from "./App";

describe("Add", () => {
  it("should return an integer", () => {
    expect(Add("2")).toBe(2);
    expect(Add("40")).toBe(40);
  });

  it("should handle up to two numbers,separated by commas, and return their sum", () => {
    expect(Add("1")).toBe(1);
    expect(Add("")).toBe(0);
    expect(Add("1,2")).toBe(3);
    expect(Add("1,2,3")).toBe(
      "Error: The function can handle only up to two numbers"
    );
  });
});
