let splitArrays = function(array, amount) {
    let result = [];
    let curArray = [];

    for (let i = 0; i < array.length; i++) {
        curArray.push(array[i]);

        if (i % amount === amount - 1) {
            result.push(curArray);
            curArray = [];
        }
    }

    result.push(curArray);

    return result;
}

let test = [
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
    'img/photos/img1.jpg',
];

vm = new Vue({
    el: '#app',
    data: {
        pictures: splitArrays(test, 3)
    }
});