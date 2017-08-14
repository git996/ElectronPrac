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
        .attr("id", "sleep").html("Tweets Tracked").style("background", "pink")
        .on("click", sleepFunc);
    or = btns.append("div").attr("class", "").html(":");

    wake = btns.append("button").attr("class", "ui button")
        .attr("id", "wake").html("0").style("background", "aquamarine").on("click", wakeFunc);


    infoBox = maincontent.append("div").attr("class", "ui card").attr("id", "info");
    infoList = maincontent.append("ul").attr("id","list");

    function sleepFunc() {




    }


    function wakeFunc() {


    }






    footer = d3.select("#ft1").html("Sushant G.|").append("a").attr("href", "https://github.com/git996").html(" GitHub").append("i").attr("class", " large github icon");
})(window, document);
