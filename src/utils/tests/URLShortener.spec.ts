import { expect } from "chai";
import { isValidURL, shortenURL } from "../URLShortener";

describe("URLShortener", () => {
  it("shortenURL return a short version of a given URL", () => {
    expect(shortenURL("http://www.google.com")).to.equal("aV5U9k");
  });

  it("shortenURL return a short version of a given URL, with a given salt parameter", () => {
    expect(shortenURL("http://www.google.com", "my-salt-param")).to.equal(
      "SydICh"
    );
  });

  it("isValidURL should return true when a valid URL is provided", () => {
    expect(isValidURL("http://www.google.com")).to.be.true;
  });

  it("isValidURL should return false when an invalid URL is provided", () => {
    expect(isValidURL("wwwgoogle")).to.be.false;
  });

  it("isValidURL should return false when empty URL parameter is provided", () => {
    expect(isValidURL("")).to.be.false;
  });
});
