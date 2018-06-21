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
                $('.thank, #myModal').show(15000)
            });
        }
        if (connectMessage) {
            $('.thank').show()
        }
    }
};

// Get the modal email
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <img> element that closes the modal
var img = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <img> (x), close the modal
img.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}