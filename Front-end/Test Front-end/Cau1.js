const objects = [
    {
        number: 45,},{
        number: 4,
    },
    {
        number: 9,
    },
    {
        number: 16,
    },
    {
        number: 25,
    },
    {
        number: 16,
    },
    {
        number: 24,
    }
];
var newarr = objects.map(function (x) {
    return x.number;
    })
var newarr2 = newarr.filter(function (x) {
    return x < 20;
})
console.log(newarr2);
var newarr3 = objects.map(function (x) {
    return x.number;
}
).reduce(function (x, y) {
    return x + y;
})
console.log(newarr3);
// JavaScript source code

