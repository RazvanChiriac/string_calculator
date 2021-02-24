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
  });

  it("should handle an unknown amount of numbers", () => {
    expect(Add("1,2,3")).toBe(6);
    expect(Add("1,2,3,4")).toBe(10);
    expect(Add("10,20,30,40,50,60,70")).toBe(280);
    expect(Add("10,20,30,40,50,60,70,80")).toBe(360);
  });
});
