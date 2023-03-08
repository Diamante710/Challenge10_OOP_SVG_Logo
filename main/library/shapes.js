
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
        super(shape, color, text, textColor);
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} cx="25" cy="75" r="20" fill="${this.color}"/>
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Triangle extends Shapes {
    constructor(shape, color, text, textColor) {
        super(shape, color, text, textColor);
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} points="150, 18 244, 182 56, 182" fill="${this.color}" /></svg>
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shapes {
    constructor(shape, color, text, textColor) {
        super(shape, color, text, textColor)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} x="10" y="10" width="30" height="30" fill="${this.color}"/></svg>
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Shapes, Circle, Triangle, Square };