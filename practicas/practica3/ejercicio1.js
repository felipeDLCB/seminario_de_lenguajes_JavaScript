const elements = [22, 44, 78, -43, 89];
const point1 = { x: 0.0, y: 0.0 };
const point2 = { x: 3.0, y: 0.0 };
const point3 = { x: 0.0, y: 3.0 };
let triangle = {
    corners: [point1, point2, point3]
};
console.log(typeof (JSON.stringify(elements)));
console.log(JSON.stringify(point1));
console.log(JSON.stringify(triangle));