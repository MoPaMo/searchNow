/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function op(value) {
  open(value + document.getElementById("search").value, "", "_self");
}
$(document).ready(function() {
  $.getJSON("/engines.json", function(result) {
    $.each(result.categories, function(i, field) {
      var text =
        '<h4 class="lead" id="'+i+'"> ' +
        result.specify[i].icon +
        " " +
        i +
        '</h4> <ul class="list-group list-group-flush"> ';

      $.each(field.data, function(i2, field2) {
        text +=
          '<li class="list-group-item d-flex justify-content-between align-items-center">' +
          field2.name +
          '<span class="text-muted small">' +
          field2.plus +
          "</span><span onclick=\"op('" +
          field2.url +
          '\')" class="badge badge-primary badge-pill"><i class="fas fa-search"></i></span></li>';
        //alert(i2);
      });
      $("#out").append(text + "</ul> <br/>");
      $("#__insert").append()
      //alert(i)
    });
    $("#loading").remove();
  });
  $("#out").append("hi");
});
$("#out").append("hi");
$("button").tooltip();
//<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
// Tooltip on right <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</button>
//</button>
