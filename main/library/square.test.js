const {Square} = require("./shapes");


describe("Square", () => {
    test("Should render logo.svg file for a black Square element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="150" fill="black"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="white">test</text></svg>`
        const square = new Square("square", "black", "test", "white");
        const actualSvg = square.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
});

describe("Square", () => {
    test("Should render logo.svg file for a blue Square element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="150" fill="blue"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="white">test</text></svg>`
        const square = new Square("square", "blue", "test", "white");
        const actualSvg = square.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
});