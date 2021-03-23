let getDaysLeft = function() {
    let vm = this;
    var date = moment(new Date());
    return vm.weddingCounter.diff(date, 'days') + 1;
}

let vm = new Vue({
    el: '#app',
    data: {
        pageTitle: 'Kimberly & Andrew',
        weddingCounter: moment(new Date('06/12/2021 00:00:00')),
        weddingDate: moment(new Date('06/12/2021 13:30:00')), // get from db
        weddingLocation: {
            city: 'Greenville',
            state: 'SC'
        },
        venueInfo: [{
                eventName: 'Ceremony',
                venueName: 'The Cliffs',
                address: {
                    addressLine1: '98 The Cliffs Parkway',
                    city: 'Landrum',
                    state: 'SC',
                    zip: '29356'
                },
                mapLink: 'https://goo.gl/maps/vnnQa9fEyAwW9hkq9'
            },
            {
                eventName: 'Reception',
                venueName: 'Zen',
                address: {
                    addressLine1: '924 S Main St',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                mapLink: 'https://g.page/zengreenville?share'
            }
        ]
    },
    computed: {
        getDaysLeft: getDaysLeft
    }
});