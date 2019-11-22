

var config = {
    apiKey: "AIzaSyBSOUBCNLrJULyPy9e-TQsOw0XkfxSfWAA",
    authDomain: "polar-storm-240813.firebaseapp.com",
    databaseURL: "https://polar-storm-240813.firebaseio.com",
    storageBucket: "polar-storm-240813.appspot.com",
};
firebase.initializeApp(config);

var storage = firebase.storage();
var storageRef = storage.ref();

function getimage(x){
    var starsRef = storageRef.child(x.toString()+'.jpg');
    starsRef.getDownloadURL().then(function(url) {
        document.getElementById("pic").src = url.toString();
        console.log(url)
    }).catch(function(error) {
        console.error(error)
    });
}

function before(){
    $("#div1").fadeOut("slow");
    document.getElementById('yes').src='like.png'
    setTimeout(function(){}, 2000);
}


$(document).ready(function(){
    $(document.getElementById("yes")).click(function(){
        $("#div1").fadeOut("slow");
        document.getElementById('yes').src='like.png'
        swithingy()
    });
});

var myObj=null
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://raw.githubusercontent.com/SinChee/smart-bin/master/data.json", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = myObj[0].name;
    document.getElementById("course").innerHTML = definecourse(myObj[0].course);
    getimage(0)
    }
};

var course = [
    "Electrical Engineering",
    "Mechanical Engineering",
    "Chemical Engineering"
]

function definecourse(k){
    console.log(course)
    return course[k-1]
}

function swithingy(){
    k = Math.floor(Math.random()*3)
    console.log(k)
    document.getElementById("name").innerHTML = myObj[k].name;
    document.getElementById("course").innerHTML = definecourse(myObj[k].course);
    getimage(k)
    document.getElementById('yes').src='like_grey.png'
    $("#div1").fadeIn("slow");
}

function swithingn(){
    k = Math.floor(Math.random()*3)
    document.getElementById("name").innerHTML = myObj[0].name;
    document.getElementById("course").innerHTML = definecourse(myObj[0].course);
}




