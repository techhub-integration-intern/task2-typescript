function getMax(arr, biggerThan) {
    return arr.reduce(function (max, current) {
        return biggerThan(current, max) ? current : max;
    }, arr[0]);
    ;
}
console.log(getMax([1, 4, 555, 6, 100, 302], function (a, b) {
    return a > b;
}));
console.log(getMax(["lol", "lololol", "lololololololoy", "lolita", "lolitalol", "lonita"], function (a, b) {
    return a.length > b.length;
}));
