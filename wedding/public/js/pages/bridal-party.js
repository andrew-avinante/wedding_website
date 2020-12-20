vm = new Vue({
    el: '#app',
    data: {
        bridalParty: {
            bridesmaids: [{
                    name: "Bethany Leone",
                    role: "Maid of Honor",
                    picture: 'img/photos/bridal1.jfif'
                },
                {
                    name: "Melanie Avinante",
                    role: "Bridesmaid",
                    picture: 'img/photos/bridal2.jfif'
                },
                {
                    name: "Anna Richards",
                    role: "Bridesmaid",
                    picture: 'img/photos/bridal3.jfif'
                },
                {
                    name: "Anna Tuck",
                    role: "Bridesmaid",
                    picture: 'img/photos/bridal4.jfif'
                },
                {
                    name: "Kaytie Williamson",
                    role: "Bridesmaid",
                    picture: 'img/photos/bridal5.jpg'
                }
            ],
            groomsmen: [{
                    name: "Matthew Avinante",
                    role: "Best Man",
                    picture: 'img/photos/bridal6.jfif'
                },
                {
                    name: "Joseph Koons",
                    role: "Groomsman",
                    style: "width: 150px !important; margin-left: -20px;",
                    picture: 'img/photos/bridal8.jfif'
                },
                {
                    name: "Erden Ucok",
                    role: "Groomsman",
                    style: "margin-top: -20px;",
                    picture: 'img/photos/bridal7.jfif'
                },
                {
                    name: "Carter Richards",
                    role: "Groomsman",
                    picture: 'img/photos/bridal9.jpg'
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