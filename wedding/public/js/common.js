let setActivePage = function(page) {
    $(`[data-page=${page}]`).addClass('active');
    return;
}

let splitArrays = function(array, amount) {
    let result = [];
    let curArray = [];

    for (let i = 0; i < array.length; i++) {
        curArray.push(array[i]);

        if (i % amount === amount - 1) {
            result.push(curArray);
            curArray = [];
        }
    }

    result.push(curArray);

    return result;
}