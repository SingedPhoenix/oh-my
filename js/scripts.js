$(document).ready(function() {
  var animal = $("#wizard").val();

   if (animal === "lions") {
      $("#lions").show();
    }
    else if (animal === "tigers") {
        $("#tigers").show();
    }
  });
