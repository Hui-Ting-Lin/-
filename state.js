var hungryWid =70;
var moodWid = 70;
var cleanWid = 70;
var hungryInterval;
var moodInterval;
var cleanInterval;
var pet;
//var position = ["230px,-15px"];
function stst(p) {
    pet = p;
}
function sub_hungry(){
    if(parseInt(hungryWid)>=1){
        hungryWid = parseInt(hungryWid)-1;
        document.getElementById("hungry").style.width = hungryWid+"px";
        change_color(hungryWid, "hungry");
    }
    else {
        clearInterval(hungryInterval);
        end_die();
    }
    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
}
function sub_mood(){
    if(parseInt(moodWid)>=1){
        moodWid=parseInt(moodWid)-1;
        document.getElementById("mood").style.width = moodWid+"px";
        change_color(moodWid, "mood");
    }
    else {
        clearInterval(moodInterval);
        end_runaway();
    }
    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
}
function sub_clean(){
    if(parseInt(cleanWid)>=1){
        cleanWid=parseInt(cleanWid)-1;
        document.getElementById("clean").style.width = cleanWid+"px";
        change_color(cleanWid, "clean");
    }
    else {
        clearInterval(cleanInterval);
        end_die();
    }
    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
}
function add_hungry(num){
    clearInterval(hungryInterval);
    if(parseInt(num)<0){
        if(parseInt(hungryWid)+parseInt(num) >=0) hungryWid=parseInt(num)+parseInt(hungryWid);
        else {hungryWid = 0;end_die();}
    }//變餓
    else{
        if(parseInt(hungryWid)+parseInt(num) <= 140) hungryWid=parseInt(num)+parseInt(hungryWid);
        else hungryWid = 140;
    }//變飽
    document.getElementById("hungry").style.width = hungryWid+"px";
    change_color(hungryWid, "hungry");
    hungryInterval = setInterval(sub_hungry, 1000);
    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
}
function add_mood(num){
    clearInterval(moodInterval);
    if(parseInt(num)<0){
        if(parseInt(moodWid)+parseInt(num) >=0) moodWid=parseInt(num)+parseInt(moodWid);
        else {moodWid = 0;end_runaway();}
    }//心情變不好
    else{
        if(parseInt(moodWid)+parseInt(num) <= 100) moodWid=parseInt(num)+parseInt(moodWid);
        else moodWid = 140;
    }//心情變好
    document.getElementById("mood").style.width = moodWid+"px";
    moodInterval = setInterval(sub_mood, 2000);
    change_color(moodWid, "mood");
    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
}
function add_clean(num){
    clearInterval(cleanInterval);
    if(parseInt(num)<0){
        if(parseInt(cleanWid)+parseInt(num) >=0) {
            cleanWid=parseInt(cleanWid)+parseInt(num);
        }
        else {cleanWid = 0;end_die();};
    }//變髒
    else{
        if(parseInt(cleanWid)+parseInt(num) <= 140) cleanWid=parseInt(cleanWid)+parseInt(num);
        else cleanWid = 140;
    }//變乾淨
    document.getElementById("clean").style.width = cleanWid+"px";
    cleanInterval = setInterval(sub_clean, 1000);
    change_color(cleanWid, "clean");
    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
}
function change_color(wid, id){
    if(parseInt(wid)>=100) document.getElementById(id).style.backgroundColor = "rgb(" + 96 + "," + 241 + "," + 152 + ")";
    else if(parseInt(wid)>=30) document.getElementById(id).style.backgroundColor = "rgb(" + 249 + "," + 252 + "," + 70 + ")";
    else document.getElementById(id).style.backgroundColor = "rgb(" + 252 + "," + 70 + "," + 79 + ")";
}
/*function goAway(){
    positions=position[0].split(',');
    document.getElementById("want_pet").style.left = positions[0];
    document.getElementById("want_pet").style.top = positions[1];

}*/
function enterGame() {
    var left = document.getElementById("pet_information");

    document.getElementById("game_cover").setAttribute("style", "background:url(room.jpg)no-repeat;");
    var message = '';
    message+='<table><tr class = "table_row"><td class = "title">心情</td><td><div class = "empty"><div id = "mood"></div></div></td></tr>'
           + '<table><tr class = "table_row"><td class = "title">飽足</td><td><div class = "empty"><div id = "hungry"></div></div></td></tr>'
           + '<table><tr class = "table_row"><td class = "title">乾淨</td><td><div class = "empty"><div id = "clean"></div></div></td></tr>';
    message += '<span id="know"><img class="know_pic" src="map.png">:點擊可增加心情值。<br>'
           + '<img class="know_pic" src="game2.png">:點擊可增加心情值。<br>'
           + '<img class="know_pic" src="apple2.png">:拖拉至寵物身上放開可增加飽足值。<br>'
           + '<img class="know_pic" src="drink.png">:拖拉至寵物身上放開可增加飽足值。<br>'
           + '<img class="know_pic" src="soap.png">:按住，拖拉在寵物身上滑動可增加乾淨值。<br>'
           + '<img class="know_pic" src="bath.png">:點擊可增加乾淨值。</span>';
   
    left.innerHTML = message;
    
    var mes = '';
    mes += '<table id="table"><caption>來與你的寵物互動吧</caption><tr>'
        + '<td class="td_choice"><input type="image" id="trip_func_0" src="map.png" class = "choice">'
        + '<audio id = "mis" preload = "auto" ><source src = "yoyo.mp3" type = "audio/mpeg"></audio></td>'
        + '<td class="td_choice"><img class="choice" id="game_func_1" src="game2.png"></td>'
        + '<td class="td_choice"><img class="choice" id="apple_func_2" src="apple2.png" draggable="true" ondragstart="drag(event)"></td>'
        + '<td class="td_choice"><img class="choice" id="drink_func_3" src="drink.png" draggable="true" ondragstart="drag(event)"></td>'
        + '<td class="td_choice"><img class="choice" id="soap_func_4" src="soap.png" draggable="true" ondragstart="sh(event)" ondrag="sho(event)"></td>'
        + '<td class="td_choice"><input type="image" id="bath_func_5" src="bath.png" class = "choice">'
        + '<audio id = "mib" preload = "auto" ><source src = "bath.mp3" type = "audio/mpeg"></audio></td></tr></table>';
    document.getElementById("choose_cover").innerHTML = mes;
    //<input type="image" id="trip_func_0" src="map.png" class = "choice"></input>
    document.getElementById("trip_func_0").addEventListener("click", trip, false);
    document.getElementById("bath_func_5").addEventListener("click", bath, false);
    document.getElementById("game_func_1").addEventListener("click", game, false);
    

    //document.getElementById("cleanbutton").addEventListener("click", function(){add_clean(140)}, false);//變乾淨
    //document.getElementById("uglybutton").addEventListener("click", function(){add_clean(-50)}, false);//變髒
    hungryInterval = setInterval(sub_hungry, 2000);
    moodInterval = setInterval(sub_mood, 2000);
    cleanInterval = setInterval(sub_clean, 2000);

    if (hungryWid + moodWid + cleanWid > 380) { up_to_the_sky();}
    if (hungryWid + moodWid + cleanWid < 20) { end_die();}
   
}

/*function start(){
    document.getElementById("enter").addEventListener("click", enterGame,false);
}
window.addEventListener("load", start, false)*/