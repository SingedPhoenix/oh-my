$(document).ready(function() {
  $("form#animals").submit(function() {
    event.preventDefault();
    var choice = $("input:radio[name=animal]:checked").val();

    if (choice === "lion") {
    $('#lions').show();
      $('#tigers').hide();
      $('#bears').hide();
      $('#sulu').hide();
  } else if (choice === "tiger") {
    $('#tigers').show();
    $('#lions').hide();
    $('#bears').hide();
    $('#sulu').hide();
  } else if (choice === "bear") {
    $('#bears').show();
    $('#tigers').hide();
    $('#lions').hide();
    $('#sulu').hide();
  } else {
    $('#sulu').show();
    $('#tigers').hide();
    $('#bears').hide();
    $('#lions').hide();
  }
  });
});
