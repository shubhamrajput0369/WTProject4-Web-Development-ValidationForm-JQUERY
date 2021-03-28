  
// Author: Shubham Bhagwansing Rajput
// JS

$(document).ready(function () {

    jQuery.validator.addMethod("custom", function (value, element) {
        return /^[a-zA-Z]+$/.test(value);
    }, "* Please enter something");

