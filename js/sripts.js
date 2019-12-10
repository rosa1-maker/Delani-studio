$(document).ready(function() {
  $(".design-row p").hide();
  $(".design-row").click(function() {
    $(".design-row p").toggle();
    $(".design-row img").toggle();
  });
});
$(document).ready(function() {
  $(".card-dev p").hide();
  $(".card-dev").click(function() {
    $(".card-dev p").toggle();
    $(".card-dev img").toggle();
  });
});
$(document).ready(function() {
  $(".bottom p").hide();
  $(".bottom").click(function() {
    $(".bottom p").toggle();
    $(".bottom img").toggle();
  });
  $(".col").hover(function() {
    $(".text", this).toggle("slow");
  });
  $(".submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name !== "" && email !== "" && message !== "") {
      alert("Thank you." + "Your form has been submitted successfully", +name);
    } else {
      alert("please fill in the forms");
    }
  });
});
