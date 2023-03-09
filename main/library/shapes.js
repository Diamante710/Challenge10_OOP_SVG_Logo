
class Shapes {
    constructor(shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
}

class Circle extends Shapes {
    constructor(shape, color, text, textColor) {
        super(shape, color, text, textColor)
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shapes {
    constructor(shape, color, text, textColor) {
        super(shape, color, text, textColor)
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shapes {
    constructor(shape, color, text, textColor) {
        super(shape, color, text, textColor)
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="30" height="30" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Shapes, Circle, Triangle, Square };