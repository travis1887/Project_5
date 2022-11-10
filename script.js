window.onload = date_time
        
function date_time () {
        var t_d = new Date();
        
        document.getElementById("timeinfo").innerHTML = t_d.toLocaleString();
       colorchange();
}

        
function colorchange () {
 setInterval("date_time_1()",1000)
 setInterval("header_1()",1000)
 setInterval("menu_1()",1000)
 setInterval("main_1()",1000)
 setInterval("right_1()",1000)
 setInterval("footer_1()",1000)
}
        
function header_1() {
const item12 = document.querySelectorAll('grid-container.item1');
const item11 = document.getElementById("item1");
    var f = Math.floor(Math.random() * 256);
    var s = Math.floor(Math.random() * 256);
    var l = Math.floor(Math.random() * 256);
    var bg_header = "rgb(" + f + "," + s + "," + l + ")";
    item11.style.backgroundColor = bg_header;
    }
function menu_1() {
const item13 = document.querySelectorAll('grid-container.item2');
const item22 = document.getElementById("item2");
    var f = Math.floor(Math.random() * 256);
    var s = Math.floor(Math.random() * 255);
    var l = Math.floor(Math.random() * 254);
    var bg_menu = "rgb(" + f + "," + s + "," + l + ")";
    item22.style.backgroundColor = bg_menu;
    }
function main_1() {
const item14 = document.querySelectorAll('grid-container.item3');
const item33 = document.getElementById("item3");
    var f = Math.floor(Math.random() * 256);
    var s = Math.floor(Math.random() * 256);
    var l = Math.floor(Math.random() * 256);
    var bg_main = "rgb(" + f + "," + s + "," + l + ")";
    item33.style.backgroundColor = bg_main;
    }
function right_1() {
const item15 = document.querySelectorAll('grid-container.item4');
const item44 = document.getElementById("item4");
    var f = Math.floor(Math.random() * 256);
    var s = Math.floor(Math.random() * 256);
    var l = Math.floor(Math.random() * 256);
    var bg_right = "rgb(" + f + "," + s + "," + l + ")";
    item44.style.backgroundColor = bg_right;
    }
function footer_1() {
const item16 = document.querySelectorAll('item5');
const item44 = document.getElementById("item5");  
    var f = Math.floor(Math.random() * 256);
    var s = Math.floor(Math.random() * 256);
    var l = Math.floor(Math.random() * 256);
    var bg_footer = "rgb(" + f + "," + s + "," + l + ")";
    item44.style.backgroundColor = bg_footer;
   
}
function date_time_1 () {
        var t_d = new Date();
        document.getElementById("timeinfo").innerHTML = t_d.toLocaleString();
}
