var shower_list = ["30", "20", "1", "20", "30", "40"];
function drag(e) {
    //window.alert("ttttt");
    //let x =e.pageY;
    //let y =e.pageX;
    //window.alert(e.target.id);
    //var fun = document.getElementById(e.target.id);
    var func = (e.target.id).split("_");
    
    if (func[1] == "func") {
        //
        console.log(e);
        var MouseX=event.clientX;
	    var MouseY=event.clientY;
        if (func[2] == "2") { //apple
            var mask = 1;
            document.addEventListener("drop", function (event) {
                event.preventDefault();
                window.alert("jjjj");
                if (event.target.className == "petpet") {
                    var fun = document.getElementById(event.target.id);
                    window.alert("jjjj");
                    fun.setAttribute("src", "soap.png");
                    return mask=0;
                }
            }, false);
            if (mask == 0) { return;}
        }
        else if (func[2] == "3") { //drink
            document.addEventListener("drop", function (event) {
                event.preventDefault();
                if (event.target.className == "petpet") {
                    window.alert(event.target.id);
                    var fun = document.getElementById(event.target.id);
                    fun.setAttribute("src", "soap.png");
                    
                }
            },false);
        }
        /*else if (func[2] == "4") { //soap
            var shower = shower_list[pet];
            document.addEventListener("dragover", function (event) {
                event.preventDefault();
                if (event.target.className == "droptarget") {
                    if (shower > 0) { shower -= 1; }
                    else{}
                }
            },false);
        }*/
        //else if (func[2] == "5") { }
        
    }
   
}

function shower() {
    //window.alert("pp");
    var cover_id = document.getElementById("cover");
    cover_id.setAttribute("style", "cursor:url(soap.cur);");//wait
    var showerboold = shower_list[pet];
    var petshower = document.getElementsByClassName("petpet");
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
        if (event.target.className == "petpet") {
            if (showerboold > 0) { showerboold -= 1; }
            else{petshower.setAttribute("src", "soap.png");}
        }
    },false);
}

/*function do_something(dodo) {
    if (dodo == 2) {
        
    }
    if (dodo == 3) {
        
    }
}*/

/*function drop(event) {
    window.alert("uuuuu");
    event.preventDefault();
    window.alert(event.target.id);
        if (event.target.className == "petpet") {
            window.alert(event.target.id);
                var fun = document.getElementById(event.target.id);
                fun.setAttribute("src", "soap.png");
            }
        }
}*/