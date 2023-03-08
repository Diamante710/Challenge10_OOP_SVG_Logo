const inquirer = require('inquirer');
const Shapes = require('./library/shapes');
const fs = require('fs');

function start() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text for the logo. (Must not be more than 3 characters.)',
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter a text color.',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape for the logo.',
                choices: ["Circle", "Square", "Triangle"],
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a shape color.',
            },
        ])

        .then(({ shape, color, text, textColor }) => {
            let newShape
            switch (shape) {
                case "Circle":
                    newShape = new Circle(shape, color, text, textColor)
                    break
                case "Triangle":
                    newShape = new Triangle(shape, color, text, textColor)
                    break
                case "Square":
                    newShape = new Square(shape, color, text, textColor)
            }
        },

fs.writeFile('logo.svg', newShape.render(), (err) =>
            err ? console.log(err) : console.log('Successfully created logo.svg file!')
        ))
}

start();