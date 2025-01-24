// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

describe("helloWorld Function ", () => {
  it("should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "The return value should be a string");
  });

  it('should return "Hello World"', () => {
    const result = helloWorld();
    assert.equal(
      result,
      "Hello World",
      'The return value should be "Hello World"'
    );
  });
});

describe("addition Function", () => {
  it('5 + 10 should equal "15"', () => {
    const result = addition(5, 10);
    assert.equal(result, "15");
  });
});

describe("subtraction Function", () => {
  it('10 - 5 should equal "5"', () => {
    const result = subtraction(10, 5);
    assert.equal(result, "5");
  });
});

describe("multiplication Function", () => {
  it('13 * 13 should equal "169"', () => {
    const result = multiplication(13, 13);
    assert.equal(result, "169");
  });
});

describe("division Function", () => {
  it('72 / 9 should equal "8"', () => {
    const result = division(72, 9);
    assert.equal(result, "8");
  });
});

describe("remainder Function", () => {
  it('5 % 100 should equal "5"', () => {
    const result = remainder(5, 100);
    assert.equal(result, "5");
  });
});

describe("exponentiation Function", () => {
  it('2 ** 2 should be equal "4"', () => {
    const result = exponentiation(2, 2);
    assert.equal(result, "4");
  });
});
