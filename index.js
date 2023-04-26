function show(){
    document.getElementById("btn").addEventListener("click", function(){
        var dd = document.getElementById("dd").value;
       
        if(dd == "IDOL"){
            document.getElementById("board").style.display = "block"
        }
        else if(dd == "geraldine"){
            alert("Eme lang hahaha");
            alert("dapat e type mo is: godwin");
         }
         else if(dd == "godwin"){
         alert("and now please type: IDOL");
         }
         else if(dd == "idol"){
            alert("use capital letters only")
         }
        else{
            alert("Invalid Input");
            alert("use small letters only");
        }
    });
}
function show2(){
    document.getElementById("bluem").style.display = "block"
    document.getElementById("bluex").style.display = "block"
}
function hide2(){
    document.getElementById("bluem").style.display = "none"
    document.getElementById("bluex").style.display = "none"
}
function show3(){
    document.getElementById("redm").style.display = "block"
    document.getElementById("redx").style.display = "block"
}
function hide3(){
    document.getElementById("redm").style.display = "none"
    document.getElementById("redx").style.display = "none"
}
function show4(){
    document.getElementById("greenm").style.display = "block"
    document.getElementById("greenx").style.display = "block"
}
function hide4(){
    document.getElementById("greenm").style.display = "none"
    document.getElementById("greenx").style.display = "none"
}
function show5(){
    document.getElementById("blackm").style.display = "block"
    document.getElementById("blackx").style.display = "block"
}
function hide5(){
    document.getElementById("blackm").style.display = "none"
    document.getElementById("blackx").style.display = "none"
}
function show6(){
    document.getElementById("yellowm").style.display = "block"
    document.getElementById("yellowx").style.display = "block"
}
function hide6(){
    document.getElementById("yellowm").style.display = "none"
    document.getElementById("yellowx").style.display = "none"
}