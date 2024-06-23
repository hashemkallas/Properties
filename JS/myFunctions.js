$(document).ready(function () {
    generateCaptcha();

    $("#rentalForm").submit(function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function toggleDetails(button) {
    $(button).closest('tr').next('.details').toggle();
}

function showForm() {
    $("#formContainer").show();
}

function validateForm() {
    var captchaInput = $("#captchaInput").val();
    var captcha = $("#captcha").text();
    var inputRadio = $("#inputRadio").val();

    if (captcha !== captchaInput) {
        alert("رمز التحقق غير صحيح");
        generateCaptcha();
        return false;
    }


    alert(inputRadio);

}

function generateCaptcha() {
    var captcha = Math.random().toString(36).substring(2, 8);
    $("#captcha").text(captcha);
}