let pictures = [
    'img/photos/img1.jfif', //highschool
    'img/photos/img2.jfif', //highschool
    'img/photos/img3.jfif', //highschool
    'img/photos/img4.jfif', //highschool
    'img/photos/img5.jfif', //highschool
    'img/photos/img6.jfif', //highschool
    'img/photos/img7.jfif', //highschool 
    'img/photos/img8.jfif', //highschool
    'img/photos/img9.jfif', //highschool
    'img/photos/img10.jfif', //highschool
    'img/photos/img11.jfif', //highschool
    'img/photos/img12.jfif', //highschool
    'img/photos/img13.jfif', //highschool
    'img/photos/img14.jfif', //highschool
    'img/photos/img15.jfif', //highschool
    'img/photos/img16.jfif', //highschool
    'img/photos/img17.jfif', //r
    'img/photos/img18.jfif', //r
    'img/photos/img19.jfif', //r
    'img/photos/img20.jfif', //r
    'img/photos/img21.jfif', //r
    'img/photos/img22.jfif', //r
    'img/photos/img23.jfif', //r
    'img/photos/img24.jfif', //r
    'img/photos/img25.jfif', //r
    'img/photos/img26.jfif', //r
    'img/photos/img27.jfif', //r
    'img/photos/img28.jfif', //r
    'img/photos/img29.jfif', //r
    'img/photos/img30.jfif', //r
    'img/photos/img31.jfif', //r
    'img/photos/img32.jfif', //r
    'img/photos/img33.jfif', //r
    'img/photos/img34.jfif', //why did you hide this?
    'img/photos/img35.JPG', //highschool
    'img/photos/img36.JPG', //highschool
    'img/photos/img37.JPG', //highschool
    'img/photos/img38.JPG', //highschool
    'img/photos/img39.JPEG', //r
    'img/photos/img40.JPG', //r
    'img/photos/img41.JPG', //r
    'img/photos/img42.jpg', //r
    'img/photos/img43.jpg', //r
    'img/photos/img44.jpg', //r
    'img/photos/img45.JPG', //r
];

console.log(splitArrays(pictures, Math.ceil(pictures.length / 3)));

vm = new Vue({
    el: '#app',
    data: {
        pictures: splitArrays(pictures, Math.ceil(pictures.length / 3))
    }
});