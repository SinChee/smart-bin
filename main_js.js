
var config = {
    apiKey: "AIzaSyCXM3eVPdinynCUbU1RkGVq2V5LNzv6DpY",
    authDomain: "mainserver-c1560.firebaseapp.com",
    databaseURL: "https://mainserver-c1560.firebaseio.com",
    projectId: "mainserver-c1560",
    storageBucket: "mainserver-c1560.appspot.com",
    messagingSenderId: "107380399049",
    appId: "1:107380399049:web:0e2f8086f44986b940a618",
    measurementId: "G-SRTPSCM310"
};

firebase.initializeApp(config);
var db = firebase.database();
console.log("Ready")

function interviewer(){
    var com_name = document.getElementById("company_name").value.toUpperCase();
    var pass_code = document.getElementById("passcode").value;
    if (pass_code == "1234"){
        if (com_name != ""){
            var check = db.ref('MESA');
            check.on("value",function(snapshot){
                var company_present = snapshot.child(com_name).exists();
                if (!company_present){
                    db.ref('MESA/' + com_name).set({
                        password: pass_code,
                        name: com_name,
                        student: 0,
                        count: 0,
                        call: 0,
                        calling_now: 0
                    });
                    alert(com_name+" registered")
                    window.location.href = "interviewer.html" +"?para1="+ com_name;
                }
                else{
                    window.location.href = "interviewer.html" +"?para1="+ com_name;
                }
            })
        }
        else{
            alert("Please Enter Company Name")
        }
    }
    else{
        alert("Wrong Password")
    }
    
}

function interviewee(){
    var com_name = document.getElementById("company_name").value.toUpperCase();
    if (com_name != ""){
        window.location.href = "interviewee.html" +"?para1="+ com_name;
    }
    else{
        alert("Please Enter Company Name")
    }
}


