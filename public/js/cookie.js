// COOKIE

document.ready = function () {
    var bannerMessageCustomerValue = localStorage.getItem('cookies-message');
    var connectMessage = localStorage.getItem('connect-message');

    if ($('.cookies-message').length) {
        if (!bannerMessageCustomerValue) {
            $('.cookies-message').show();
            $('.cookies-message button').click(function () {
                localStorage.setItem('cookies-message', true);
                $('.cookies-message').remove()
            });
        }
    }

    if ($('.right').length) {
        if (!connectMessage) {
            $('.right').show();
            $('.btn-RS div').click(function () {
                localStorage.setItem('connect-message', true);
                $('.right').remove()
                $('.thank').show(15000)
            });
        }
        if (connectMessage) {
            $('.thank').show()
        }
    }
};