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