$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $('#person').val();
    var beverage = $('#beverage').val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#birthday").val();
    var color = $('#color').val();
    $(".name").text(name);
    $(".drink").text(beverage);
    $(".icecream").text(flavor);
    $(".dob").text(dob);
    $(".color").text(color);
    $(".story").show();
    event.preventDefault();
  });
});
