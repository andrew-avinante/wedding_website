let pictures = [
    'img/photos/img1.jfif',
    'img/photos/img2.jfif',
    'img/photos/img3.jfif',
    'img/photos/img4.jfif',
    'img/photos/img5.jfif',
    'img/photos/img6.jfif',
    'img/photos/img7.jfif',
    'img/photos/img8.jfif',
    'img/photos/img9.jfif',
    'img/photos/img10.jfif',
    'img/photos/img11.jfif',
    'img/photos/img12.jfif',
    'img/photos/img13.jfif',
    'img/photos/img14.jfif',
    'img/photos/img15.jfif',
    'img/photos/img16.jfif',
    'img/photos/img17.jfif',
    'img/photos/img18.jfif',
    'img/photos/img19.jfif',
    'img/photos/img20.jfif',
    'img/photos/img21.jfif',
    'img/photos/img22.jfif',
    'img/photos/img23.jfif',
    'img/photos/img24.jfif',
    'img/photos/img25.jfif',
    'img/photos/img26.jfif',
    'img/photos/img27.jfif',
    'img/photos/img28.jfif',
    'img/photos/img29.jfif',
    'img/photos/img30.jfif',
    'img/photos/img31.jfif',
    'img/photos/img32.jfif',
    'img/photos/img33.jfif',
    // 'img/photos/img34.jfif',
];

console.log(splitArrays(pictures, Math.floor(pictures.length / 3)));

vm = new Vue({
    el: '#app',
    data: {
        pictures: splitArrays(pictures, Math.floor(pictures.length / 3))
    }
});