(function () {

    // Defer image loading till last.
    function init() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('datasrc')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('datasrc'));
            }
        }
    }

    window.onload = init;

})();
