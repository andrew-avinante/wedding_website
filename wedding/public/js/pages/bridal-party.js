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
        bridalParty: {
            bridesmaids: [{
                    name: "Bethany Leone",
                    role: "Maid of Honor",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Melanie Avinante",
                    role: "Bridesmaid",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Anna Richards",
                    role: "Bridesmaid",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Anna Tuch",
                    role: "Bridesmaid",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Kaytie Williamson",
                    role: "Bridesmaid",
                    picture: 'img/photos/img1.jpg'
                }
            ],
            groomsmen: [{
                    name: "Matthew Avinante",
                    role: "Best Man",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Joseph Koons",
                    role: "Groomsman",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Erden Ucok",
                    role: "Groomsman",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Carter Richards",
                    role: "Groomsman",
                    picture: 'img/photos/img1.jpg'
                },
                {
                    name: "Jake Koster",
                    role: "Groomsman",
                    picture: 'img/photos/img1.jpg'
                }
            ]
        }
    }
});