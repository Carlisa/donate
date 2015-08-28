(function() {
    document.querySelector("input[type=checkbox]").click();
    var interval = setInterval(function() {
        if (document.querySelector(".wpcf7-mail-sent-ok")) {
            console.log(1)
            clearInterval(interval);
        }
    }, 100);
})();
