const {Circle} = require("./shapes");


describe("Circle", () => {
    test("Should render logo.svg file for a black circle element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">test</text></svg>`
        const circle = new Circle("circle", "black", "test", "white");
        const actualSvg = circle.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
});

describe("Circle", () => {
    test("Should render logo.svg file for a blue circle element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">test</text></svg>`
        const circle = new Circle("circle", "blue", "test", "white");
        const actualSvg = circle.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
});