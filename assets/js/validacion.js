$(document).ready(function () {
  $("#buscarBtn").click(function () {
    let numeroInput = $("#numero").val();
    if (!validarNumero(numeroInput)) {
      return;
    }
    $(".errorNumero").text("");
    $("#numero").removeClass("error");
    consultarSuperHeroAPI(numeroInput);
  });
});

function validarNumero(numero) {
  var regex = /^[0-9]+$/;
  if (!regex.test(numero) || numero < 1 || numero > 731) {
    $(".errorNumero").text("Por favor, ingresa un número del 1 al 731.");
    $("#numero").addClass("error");
    return false;
  }
  $(".errorNumero").text("");
  $("#numero").removeClass("error");
  return true;
}
