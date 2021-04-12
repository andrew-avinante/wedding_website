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

    let attendance = [];

    for (let i = 0; i < vm.events.length; i++) {
        attendance.push({
            eventName: vm.events[i].name,
            isGoing: true,
            dish: null,
            eventID: vm.events[i].eventID
        });
    }

    if (vm.validateGuests()) {
        vm.guests.push({
            firstName: "",
            lastName: "",
            showFirstNameError: false,
            showLastNameError: false,
            attendance: attendance,
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

let submit = function() {
    let vm = this;
    vm.nextPage();

    $.ajax({
        url: "/rsvp/submit",
        method: 'POST',
        data: {
            guests: vm.guests
        },
        success: function(data) {
            console.log(data);
        },
        error: function(error, data) {
            console.log(error, data);
        }
    });
}

let getEventMenuByGuestAttendance = function(guest) {
    let vm = this;
    let menus = [];

    for (let i = 0; i < guest.attendance.length; i++) {
        if (guest.attendance[i].isGoing === 'true' && vm.events[i].menu.length > 0) {
            menus.push({
                eventName: guest.attendance[i].eventName,
                menu: vm.events[i].menu,
                index: i
            });
        }
    }

    return menus;
}

let _init = function(model) {
    let attendance = [];

    for (let i = 0; i < model.events.length; i++) {
        attendance.push({
            eventName: model.events[i].name,
            isGoing: false,
            dish: null,
            eventID: model.events[i].eventID
        });
    }

    vm = new Vue({
        el: '#app',
        data: {
            events: model.events,
            guests: [{
                firstName: "",
                lastName: "",
                showFirstNameError: false,
                showLastNameError: false,
                attendance: attendance,
                eventFood: []
            }],
            pageNumber: 1,
            email: ""
        },
        methods: {
            addGuest: addGuest,
            getEventMenuByGuestAttendance: getEventMenuByGuestAttendance,
            deleteGuest: deleteGuest,
            validateGuests: validateGuests,
            previousPage: previousPage,
            nextPage: nextPage,
            submit: submit
        }
    });
}