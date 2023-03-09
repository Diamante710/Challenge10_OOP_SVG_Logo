const Circle = require("./shapes");


describe("Circle", () => {
    test("Should render logo.svg file for a black circle with blue text element", () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"/><circle cx="25" cy="75" r="20" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">test</text></svg>`
        const circle = new Circle("circle", "black", "test", "blue");
        const actualSvg = circle.render(); 
        expect(actualSvg).toEqual(expectedSvg);
    })
})