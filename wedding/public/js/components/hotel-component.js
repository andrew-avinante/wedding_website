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
        <div class='row justify-content-center'>
            <div class="col-md-6">
                    <img :src='imgSrc'/>
                </div>
                <div class="col-md-6">
                    <div class='hotel-info'>
                        <h2>{{ hotelName }}</h2>
                        <div class='hotel-details'>
                            <ul>
                                <li>Rate: {{ rate }} per night</li>
                                <li v-for='dist in distances'>
                                    {{ dist.locationName }}: {{ dist.distance }}
                                </li>
                                <li>Address: <a :href='mapLink'>{{ address.addressLine1 }}{{ address.addressLine2 ? \` \${address.addressLine2},\` : "," }} {{ address.city }}, {{ address.state }} {{ address.zip }}</a></li>
                                <li>Phone: <a :href='"tel:" + phoneNumber'>{{ phoneNumber }}</a></li>
                            </ul>
                            <a class='btn btn-light' :href="bookingLink" role="button" target="_blank">Book Now</a>
                        </div>
                    </div>
                </div>    
            </div>              
        </div>
    `
});