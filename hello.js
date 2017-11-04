$(document).ready(function () {
  chrome.tabs.getSelected(null, function(tab) {
    var link = document.createElement('a');
    link.href = tab.url;
    var url = link;
    document.getElementById("urls").value = url;
  })
});

document.getElementById("btn-sbt").onclick = function() {

var xhr = new XMLHttpRequest();
var summaryurl = document.getElementById("urls").value
var url = "http://127.0.0.1:8000/summarizer/";
xhr.open("POST",url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = xhr.responseText;
        document.getElementsByTagName("p")[0].innerHTML=json;
    }
};
var data = JSON.stringify({"url":summaryurl});
xhr.send(data);

  //   $.ajax({
  //     headers:{
  //   "Accept":"application/json",//depends on your api
  //   "Content-type":"application/json"//depends on your api
  // },   url:"http://127.0.0.1:8000/summarizer/",
  //      type:"POST",
  //     success:function(response){
  //       var r=JSON.parse(response);
  //       $("#main").html(r.base);
  //       }
  // });
}
