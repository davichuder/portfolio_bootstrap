var confirmation_num1 = Math.floor(Math.random() * 90) + 10;
var confirmation_num2 = Math.floor(Math.random() * 9) + 1;
var confirmation_sum = confirmation_num1 + confirmation_num2;

$(function () {
    $(".confirmation").html("¿Cual es la suma entre " + confirmation_num1 + " y " + confirmation_num2 + "?");
});

$(function () {
    $('.contacto form button').on('submit', function () {
        input_confirmation = parseInt(document.getElementById("sum").value);
        if (input_confirmation === confirmation_sum) {
            return false;
        }
        $(".confirmation").html("¿Cual es la suma entre " + confirmation_num1 + " y " + confirmation_num2 + "? Responde correctamente");
        $(".confirmation").css({"color": "red"});
        $(".confirmation").transform({ "scale": "1.01" }, 100);
        // .delay(2000).transform({ "scale": "0.99" }, 100).delay(100);
        return false;
    });
});