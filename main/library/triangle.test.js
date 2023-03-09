const {Triangle} = require("./shapes");


describe("Triangle", () => {
    test("Should render logo.svg file for a black Triangle element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="black"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="white">test</text></svg>`
        const triangle = new Triangle("triangle", "black", "test", "white");
        const actualSvg = triangle.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
});

describe("Triangle", () => {
    test("Should render logo.svg file for a blue Triangle element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="white">test</text></svg>`
        const triangle = new Triangle("triangle", "blue", "test", "white");
        const actualSvg = triangle.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
});