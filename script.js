$(document).ready(function () {
var apiKey = "c21f5ae9d50e10de15cb11fed6650aca";
$("#searchBtn").click(function(){
    var city = document.getElementById("cityName").value;
    var url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
    var url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=imperial`;
    $.ajax({
        url: url1,
        method: "GET"
      }).done(function (response) {
        $(".city").text(city);
        $(".wind").text(response.wind.speed);
        $(".humidity").text(response.main.humidity);
        $(".temp").text(response.main.temp);
        // $(".UV").text(response.main.UV)
        console.log(response);
      });
      $.ajax({
          url: url5,
          method: "GET"
      }).done(function (response){
        console.log(response);
      });
});







});