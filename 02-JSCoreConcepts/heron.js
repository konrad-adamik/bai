// boki trójkąta
const a = 3;
const b = 4;
const c = 5;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let area = (a, b, c) => {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p-c));
};

console.log( area(a, b, c) );