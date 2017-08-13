//WorldIndex Script
require('dotenv').config();// require env variable


; var mainP = (function (window, document, undefined) {

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    maincontent = d3.select("#main-content");
    btns = maincontent.append("div").attr("class", "ui buttons").attr("id", "btns");

    sleepbtn = btns.append("button").attr("class", "ui button")
        .attr("id", "sleep").html("Start Sleep").style("background", "pink")
        .on("click", sleepFunc);
    or = btns.append("div").attr("class", "or");

    wake = btns.append("button").attr("class", "ui button")
        .attr("id", "wake").html("I'm Awake!").style("background", "aquamarine").on("click", wakeFunc);

    info = maincontent.append("div").attr("class", "").attr("id", "info");

    function sleepFunc() {

  

        sleeptime = new Date();

        d3.select("#sleep").style("background","red");
        d3.select("#wake").style("background", "aquamarine");

        info.html("<b> Sleep: " + sleeptime.getDate() + "th  of " + month[sleeptime.getMonth()] + " at <em>" + sleeptime.getHours() + ":" + sleeptime.getMinutes() + ":" + sleeptime.getSeconds());
        $("#info");

        $.get("sleep.php", function (data) {
            data;
        });
    }


    function wakeFunc() {

        sleeptime = new Date()
        d3.select("#wake").style("background", "red");
        d3.select("#sleep").style("background", "pink");
        info.html("<b> Wake: " + sleeptime.getDate() + "th  of " + month[sleeptime.getMonth()] + " at <em>" + sleeptime.getHours() + ":" + sleeptime.getMinutes() + ":" + sleeptime.getSeconds());

        $.get("wake.php", function (data) {

            data;
        });
    }






    footer = d3.select("#ft1").html("Sushant G.|").append("a").attr("href", "https://github.com/git996").html(" GitHub").append("i").attr("class", " large github icon");
})(window, document);
