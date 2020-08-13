Vue.component('hotel', {
    props: {
        title: String,
        imgSrc: String,
        address: String,
        phone: String,
        rate: Number,
        recepDist: Number,
        ceremDist: Number
    },
    template: `
        <div class='hotel-card container'>
            <img src='/img/hotel/hotel1.webp'/>
            <div class='hotel-info'>
                <h2>Hyatt Regency Greenville</h2>
            </div>
        </div>
    `
});