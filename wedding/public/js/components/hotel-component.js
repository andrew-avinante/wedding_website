Vue.component('hotel', {
    props: {
        hotelName: String,
        phoneNumber: String,
        address: Object,
        rate: String,
        distances: Array,
        mapLink: String,
        bookingLink: String,
        imgSrc: String
    },
    template: `
        <div class='hotel-card container'>
            <img :src='imgSrc'/>
            <div class='hotel-info'>
                <h2>{{ hotelName }}</h2>
                <div class='hotel-details'>
                    <ul>
                        <li>Rate: {{ rate }} per night</li>
                        <li v-for='dist in distances'>
                            {{ dist.locationName }}: {{ dist.distance }}
                        </li>
                        <li>Address: <a :href='mapLink'>{{ address.addressLine1 }}, {{ address.city }}, {{ address.state }} {{ address.zip }}</a></li>
                        <li>Phone: <a :href='"tel:" + phoneNumber'>864-235-1234</a></li>
                    </ul>
                    <button class='btn btn-light'>Book Now</button>
                </div>
            </div>
        </div>
    `
});