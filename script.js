/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/* var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var engines= this.responseText;
      alert(engines)
    }
  };
  xhttp.open("GET", "style.css", true);
  xhttp.send();
*/

function op(value) {
  open(value + document.getElementById("search").value, "", "_self");
}
$(document).ready(function() {
  $.getJSON("/engines.json", function(result) {
    $.each(result.categories, function(i, field) {
      var text =
        '<h4 class="lead"> ' +
        i +
        '</h4> <ul class="list-group list-group-flush"> ';

      $.each(field, function(i2, field2) {
        text +=
          '<li class="list-group-item d-flex justify-content-between align-items-center">' +
          field2.name +
          '<span onclick="op(\''+field2.url+'\')" class="badge badge-primary badge-pill"><i class="fas fa-search"></i></span></li>';
        //alert(i2);
      });
      $("#out").append(text + "</ul> <br/>");
      //alert(i)
    });
    $("#loading").remove();
  });
});

$("button").tooltip();
//<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
// Tooltip on right <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</button>
//</button>
