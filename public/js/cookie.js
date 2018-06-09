// COOKIE

document.ready = function () {
    var bannerMessageCustomerValue = localStorage.getItem('cookies-message');

    if ($('.cookies-message').length) {
        if (!bannerMessageCustomerValue) {
            $('.cookies-message').remove();
            $('.cookies-message button').click(function () {
                localStorage.setItem('cookies-message', true);
                $('.cookies-message').remove()
            });
        }
        else {
            $('.cookies-message').remove()
        }
    }
};