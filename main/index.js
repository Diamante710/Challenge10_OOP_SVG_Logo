const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./library/shapes');
const fs = require('fs');


function start() {
    console.log("error")
     inquirer
        .prompt([
            {
                name: 'text',
                type: 'input',
                message: 'Enter text for the logo. (Must not be more than 3 characters.)',
                // validate: input => input.length > 3 ? "Please enter only up to three characters." : true
            },
            {
                name: 'color',
                type: 'input',
                message: 'Enter a shape color.',
            },
            {
                name: 'shape',
                type: 'list',
                message: 'Select a shape for the logo.',
                choices: ["Circle", "Triangle", "Square"],
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'Enter a text color.',
            },
        ])

        .then (({ shape, color, text, textColor }) => {
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
            
            fs.writeFile('logo.svg', newShape.render(), (err) =>
            err ? console.log(err) : console.log('Successfully created logo.svg file!')
            )
            .catch((error)=> console.log(error))
        },
            )};

start();