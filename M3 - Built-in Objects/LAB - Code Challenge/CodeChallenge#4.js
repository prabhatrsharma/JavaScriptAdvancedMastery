/*Code Challenge #4
Scenario
Define three classes: Point, Line, and Figure:

The Point class should have only three properties: x and y coordinates and type (always set to 'point'). The constructor takes the x and y coordinates.
The Line class should have the type property equal to 'line' and the points property, which is an array of Point class objects (points that form a line). The constructor of the constructor takes an array of point coordinates in the format [[x1, y1], [x2, y2], ...] (e.g. [[0, 0], [10, 20], [20, 20]]).
The Figure class is to allow you to create an object that is a collection of points and lines (stored in separate properties). Define the following methods:
constructor - takes an array of elements as an argument (lines and points)
addPoint - takes the x and y coordinates of the new point to add to the collection;
addLine - takes an array of line points in the format [[x1, y1], [x2, y2], ...] and adds it to the collection;
toJSON - returns the saved collection (points and lines) in JSON format;
fromJSON - takes JSON data, parses it, and adds to the collection. As an additional argument, provide a flag that specifies whether the data should be added to an existing collection or replace it;
deleteAll - deletes all data from the collection.*/

class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) {
        this.type = 'line';
        this.points = points.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = []) {
        this.elements = {
            points: [],
            lines: []
        };
        this.addElements(elements);
    }

    addElements(elements = []) {
        elements.forEach(element => {
            if (element instanceof Point) {
                this.elements.points.push(element);
            } else if (element instanceof Line) {
                this.elements.lines.push(element);
            }
        });
    }

    addPoint(x, y) {
        this.elements.points.push(new Point(x, y));
    }

    addLine(points = []) {
        this.elements.lines.push(new Line(points));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(data = "{}", add = false) {
        let obj = JSON.parse(data);
        if (add) {
            this.addElements(obj.points || []);
            this.addElements(obj.lines || []);
        } else {
            this.elements = obj;
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

// Create some points
let point1 = new Point(0, 0);
let point2 = new Point(10, 20);
let point3 = new Point(20, 20);

// Create a line
let line = new Line([[0, 0], [10, 20], [20, 20]]);

// Create a figure and add points and lines
let figure = new Figure();
figure.addPoint(5, 5);
figure.addPoint(15, 25);
figure.addLine([[5, 5], [15, 25]]);

// Convert the figure to JSON
let json = figure.toJSON();
console.log(json);

// Create a new figure from JSON data
let newFigure = new Figure();
newFigure.fromJSON(json);
console.log(newFigure.toJSON());

// Delete all elements from the figure
newFigure.deleteAll();
console.log(newFigure.toJSON());