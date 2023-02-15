var flipAndInvertImage = function (image) {
    return image.map(item => item.reverse()).map(i => i.map(val => val ^ 1))
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));