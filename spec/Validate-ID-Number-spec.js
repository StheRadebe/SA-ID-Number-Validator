const { isIdNumberValid } = require("../src/Validate-ID-Number");

describe("The isIdNumberValid function", () => {
  it("should check ID number validity according to all rules", () => {
    expect(isIdNumberValid("2001014800086")).toEqual(true);
  });
  it("should use lengthCheck(idNumberArray) to check that the input string's length is not longer or shorter than 13 digits", () => {
    expect(isIdNumberValid("20010148000865")).toEqual(false);
    expect(isIdNumberValid("200101480008")).toEqual(false);
  });
  it("should use characterCheck(idNumberArray) to check that all the input string's characters are numbers", () => {
    expect(isIdNumberValid("20010A4800086")).toEqual(false);
  });
  it("should use dateCheck(idNumberArray) to check the validity of the 2 digits denoting the month, and the 2 digits denoting the day", () => {
    expect(isIdNumberValid("2001014800086")).toEqual(true);
    expect(isIdNumberValid("2000014800086")).toEqual(false);
    expect(isIdNumberValid("2001014800086")).toEqual(true);
    expect(isIdNumberValid("2001004800086")).toEqual(false);
  });
  it("should use citizenshipChecker(idNumberArray) to check the validity of the citizenship digit", () => {
    expect(isIdNumberValid("2001014800086")).toEqual(true);
    expect(isIdNumberValid("2001014800286")).toEqual(false);
  });
  it("should use luhnCheck(idNumberArray) to check the validity of the checksum digit", () => {
    expect(isIdNumberValid("2001014800086")).toEqual(true);
    expect(isIdNumberValid("2001014800087")).toEqual(false);
  });
});
