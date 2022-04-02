// Open Close Principle

class Shape {
    area() {
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
        // this.type = 'square';
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        // this.type = 'circle';
    }

    area() {
        return (this.radius ** 2) * 2;
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        // this.type = 'rect';
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) * 2;
    }
}

class AreaCalculator {
    constructor(shapes = [], ) {
        this.sahpes = shapes;
    }

    sum() {
        return this.sahpes.reduce((acc, shape) => {
            // if (shape.type === 'circle') {
            //     acc += (shape.radius ** 2) * Math.PI;
            // } else if (shape.type === 'square') {
            //     acc += shape.size ** 2;
            // } else if (shape.type === 'rect') {
            //     /** Bad because after add new Figure we need add new code here */
            //    acc += shape.width * shape.height;
            // }


            return acc += shape.area();
        }, 0)
    }
}

const calc = new AreaCalculator([new Circle(1), new Square(10), new Circle(5), new Rect(10, 20), new Triangle(10, 15)])
console.log(calc.sum());