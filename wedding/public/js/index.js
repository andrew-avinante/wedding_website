let getDaysLeft = function() {
    let vm = this;
    var date = moment(new Date());
    return vm.weddingDate.diff(date, 'days') + 1;
}

let vm = new Vue({
    el: '#app',
    data: {
        pageTitle: 'Kimberly & Andrew',
        weddingDate: moment(new Date('06/12/2021 00:00:00')), // get from db
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
                venueName: 'The Commerce Club',
                address: {
                    addressLine1: '55 Beattie Place',
                    addressLine2: 'Suite 1700',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                mapLink: 'https://goo.gl/maps/gcmQYP8KnKkjj9oC7'
            }
        ]
    },
    computed: {
        getDaysLeft: getDaysLeft
    }
});