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
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("demo_ajax_json.js", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
});

