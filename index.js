(function() {
    
    // Select newsletter by default
    document.querySelector("input[type=checkbox]").click();
    
    // Initialize donate
    Donate({
        container: ".donate"
      , prefix: "$"
      , classes: {
            active: "active"
        }
      , amounts: [
            50
          , 100
          , 250
          , 500
          , 1000
          , 2400
          , 5000
        ]
      , custom: true
      , format: function (val) {
          return val > 1000
               ? (val = val.toString()).substring(0, 1) + "," + val.substring(1)
               : val
               ;
        }
      , onChange: function (val, li, e) {
            document.querySelector("[name=amount]").value = val;
        }
    });
    
    // Checking for sent ok
    var interval = setInterval(function() {
        if (document.querySelector("#content .wpcf7-mail-sent-ok")) {
            document.querySelector("#paypal-form").submit();
            clearInterval(interval);
        }
    }, 100);
})();
