let setActivePage = function(page) {
    $(`[data-page=${page}]`).addClass('active');
    return;
}