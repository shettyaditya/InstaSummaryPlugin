function apiCall(){
     var xhttp = new XMLHttpRequest();
     xhttp.open("POST", "http://127.0.0.1:8000/summarizer/", true);
     xhttp.setRequestHeader("Content-type", "application/json");
     xhttp.send();
     var response = JSON.parse(xhttp.responseText);
}

window.onload = function() {
  var currentlocation = getURL();
  document.getElementById('url').value = currentlocation;
};
