$(document).ready(function () {
    var cities = [];
    var apiKey = "c21f5ae9d50e10de15cb11fed6650aca";
    $("#searchBtn").click(function () {
        if (localStorage.getItem("cities") !== null) {
            test = JSON.parse(localStorage.getItem("cities[]"));
        }
        var city = document.getElementById("cityName").value;
        cities.push(city);
        console.log(test);
        var city = document.getElementById("cityName").value;
        console.log(city);
        var url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
        var url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=imperial`;
        $.ajax({
            url: url1,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            var lat = response.coord.lat;
            console.log(lat);
            var lon = response.coord.lon;
            var urlUV = `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${apiKey}&lat=${lat}&lon=${lon}`;
            $.ajax({
                url: urlUV,
                method: "GET",
            }).done(function (response) {
                console.log(response);
                $(".UV").text(response[0].value);
            });
            if (response.weather[0].main === "Clouds") {
                $("#todayWeather").addClass("fas fa-cloud");
            } else if (response.weather[0].main === "Clear") {
                $("#todayWeather").addClass("fas fa-sun");
            } else if (response.weather[0].main === "Rain") {
                $("#todayWeather").addClass("fas fa-cloud-rain");
            } else if (response.weather[0].main === "Snow") {
                $("#todayWeather").addClass("fas fa-snowflake");
            }
            $(".city").text(city);
            $(".wind").text(response.wind.speed);
            $(".humidity").text(response.main.humidity);
            $(".temp").text(response.main.temp);

            localStorage.setItem('cities', cities);
            console.log(cities);
            for (var i = 0; i < cities.length; i++) {
                var ctyBtn = document.createElement("BUTTON");
                ctyBtn.prop('value', 'cities[i]');
                $("#cities").prepend(ctyBtn);
                

            }
            // console.log(response);
        });
        $.ajax({
            url: url5,
            method: "GET"
        }).done(function (response) {
            // console.log(response);
            $("#day1").text(response.list[4].dt_txt);
            if (response.list[4].weather[0].main === "Clouds") {
                $("#day1Weather").addClass("fas fa-cloud");
            } else if (response.list[4].weather[0].main === "Clear") {
                $("#day1Weather").addClass("fas fa-sun");
            } else if (response.list[4].weather[0].main === "Rain") {
                $("#day1Weather").addClass("fas fa-cloud-rain");
            } else if (response.list[4].weather[0].main === "Snow") {
                $("#day1Weather").addClass("fas fa-snowflake");
            }
            $("#day1Temp").text(response.list[4].main.temp);
            $("#day1Hum").text(response.list[4].main.humidity);

            $("#day2").text(response.list[12].dt_txt);
            if (response.list[12].weather[0].main === "Clouds") {
                $("#day2Weather").addClass("fas fa-cloud");
            } else if (response.list[12].weather[0].main === "Clear") {
                $("#day2Weather").addClass("fas fa-sun");
            } else if (response.list[12].weather[0].main === "Rain") {
                $("#day2Weather").addClass("fas fa-cloud-rain");
            } else if (response.list[12].weather[0].main === "Snow") {
                $("#day2Weather").addClass("fas fa-snowflake");
            }
            $("#day2Temp").text(response.list[12].main.temp);
            $("#day2Hum").text(response.list[12].main.humidity);

            $("#day3").text(response.list[20].dt_txt);
            if (response.list[20].weather[0].main === "Clouds") {
                $("#day3Weather").addClass("fas fa-cloud");
            } else if (response.list[20].weather[0].main === "Clear") {
                $("#day3Weather").addClass("fas fa-sun");
            } else if (response.list[20].weather[0].main === "Rain") {
                $("#day3Weather").addClass("fas fa-cloud-rain");
            } else if (response.list[20].weather[0].main === "Snow") {
                $("#day3Weather").addClass("fas fa-snowflake");
            }
            $("#day3Temp").text(response.list[20].main.temp);
            $("#day3Hum").text(response.list[20].main.humidity);

            $("#day4").text(response.list[28].dt_txt);
            if (response.list[28].weather[0].main === "Clouds") {
                $("#day4Weather").addClass("fas fa-cloud");
            } else if (response.list[28].weather[0].main === "Clear") {
                $("#day4Weather").addClass("fas fa-sun");
            } else if (response.list[28].weather[0].main === "Rain") {
                $("#day4Weather").addClass("fas fa-cloud-rain");
            } else if (response.list[28].weather[0].main === "Snow") {
                $("#day4Weather").addClass("fas fa-snowflake");
            }
            $("#day4Temp").text(response.list[28].main.temp);
            $("#day4Hum").text(response.list[28].main.humidity);

            $("#day5").text(response.list[36].dt_txt);
            if (response.list[36].weather[0].main === "Clouds") {
                $("#day5Weather").addClass("fas fa-cloud");
            } else if (response.list[36].weather[0].main === "Clear") {
                $("#day5Weather").addClass("fas fa-sun");
            } else if (response.list[36].weather[0].main === "Rain") {
                $("#day5Weather").addClass("fas fa-cloud-rain");
            } else if (response.list[36].weather[0].main === "Snow") {
                $("#day5Weather").addClass("fas fa-snowflake");
            }
            $("#day5Temp").text(response.list[36].main.temp);
            $("#day5Hum").text(response.list[36].main.humidity);
        });


    });









});