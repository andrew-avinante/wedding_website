let validateGuests = function() {
    let vm = this;

    if (vm.pageNumber === 1) {
        for (let i = 0; i < vm.guests.length; i++) {
            vm.guests[i].showFirstNameError = false;
            vm.guests[i].showLastNameError = false;
            if (vm.guests[i].firstName === "") {
                vm.guests[i].showFirstNameError = true;
                return false;
            } else if (vm.guests[i].lastName === "") {
                vm.guests[i].showLastNameError = true;
                return false;
            }
        }
    } else if (vm.pageNumber === 2) {
        for (let i = 0; i < vm.guests.length; i++) {
            if (vm.guests[i].attendance.includes(undefined)) {
                return false;
            }
        }
    }

    return true;
}

let addGuest = function() {
    let vm = this;

    if (vm.validateGuests()) {
        vm.guests.push({
            firstName: "",
            lastName: "",
            showFirstNameError: false,
            showLastNameError: false,
            attendance: new Array(vm.events.length),
            foodEventAttending: []
        });
    }
}

let deleteGuest = function(index) {
    let vm = this;
    vm.guests.splice(index, 1);
}

let previousPage = function() {
    let vm = this;
    vm.pageNumber--;
}

let nextPage = function() {
    let vm = this;

    if (vm.validateGuests()) {
        vm.pageNumber++;
    }
}

let attendingFoodEvent = function(guest, index, isGoing) {
    let vm = this;

    if (isGoing && !guest.foodEventAttending.includes(index) && vm.hasMenu[index]) {
        guest.foodEventAttending.push(vm.events[index]);
    } else if (!isGoing) {
        let remove = guest.foodEventAttending.indexOf(index);
        if (remove > -1) {
            guest.foodEventAttending.splice(remove, 1);
        }
    }
}

let guestsAttendingFood = function() {
    let vm = this;
    let guests = [];

    for (let i = 0; i < vm.guests.length; i++) {
        if (vm.guests[i].foodEventAttending.length > 0) {
            guests.push(vm.guests[i]);
        }
    }

    return guests;
}

vm = new Vue({
    el: '#app',
    data: {
        events: [{
                eventName: 'Ceremony'
            },
            {
                eventName: 'Reception',
                menu: [
                    'Steak',
                    'Mac and Cheese'
                ]
            }
        ],
        guests: [{
            foodEventAttending: [],
            firstName: "",
            lastName: "",
            showFirstNameError: false,
            showLastNameError: false,
            attendance: new Array(2)
        }],
        hasMenu: [false, true],
        pageNumber: 1,
        email: ""
    },
    computed: {
        guestsAttendingFood: guestsAttendingFood
    },
    methods: {
        addGuest: addGuest,
        deleteGuest: deleteGuest,
        validateGuests: validateGuests,
        previousPage: previousPage,
        nextPage: nextPage,
        attendingFoodEvent: attendingFoodEvent
    }
});