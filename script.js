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
$(document).ready(function() {
  $.getJSON("/engines.json", function(result) {
    $.each(result.categories, function(i, field) {
      $("#out").append(
        ' <h4 class="lead">' + i+ "</h4>"
      );
      $.each(field, function(i2, field2) {
        $("#out").append('<a href="' + field2.url + '">' + field2.name + " ");
      });
    });
    $("#loading").remove();
  });
});
