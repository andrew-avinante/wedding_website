vm = new Vue({
    el: '#app',
    data: {
        hotels: [{
            hotelName: 'Hyatt Regency Greenville',
            phoneNumber: '864-235-1234',
            address: {
                addressLine1: '220 N Main Street',
                city: 'Greenville',
                state: 'SC',
                zip: '29601'
            },
            rate: '$150',
            distances: [{
                    locationName: 'Reception',
                    distance: '1 min'
                },
                {
                    locationName: 'Ceremony',
                    distance: '47 min'
                }
            ],
            mapLink: 'https://goo.gl/maps/TD7DpbZpanqaa91P7',
            bookingLink: 'https://www.hyatt.com/en-US/hotel/south-carolina/hyatt-regency-greenville/gsprg?src=corp_lclb_gmb_seo_nam_gsprg',
            imgSrc: '/img/hotel/hotel1.webp'
        }]
    }
});