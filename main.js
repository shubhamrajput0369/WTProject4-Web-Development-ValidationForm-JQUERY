// Author: Shubham Bhagwansing Rajput
// JS

$(document).ready(function () {

    jQuery.validator.addMethod("custom", function (value, element) {
        return /^[a-zA-Z]+$/.test(value);
    }, "* Please enter something");
    $('form[id="regs"]').validate({
        rules: {
            fname: {
                required: true,
                custom: true,
            },
            lname: {
                required: true,
                custom: true,
            },
            user_email: {
                required: true,
                email: true
            },
            pwd: {
                required: true,
                minlength: 8
            },
        },
   
     messages: {
            fname: {
                required: 'This field is required',
                custom: 'Only characters are allowed'
            },
            lname: {
                required: 'This field is required',
                custom: 'Only characters are allowed'
            },
            user_email: 'Enter a valid email',
            pwd: {
                minlength: 'Password must be of atleast 8 chars',
            },
            custom: "demo msg"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
