
var pet;
var use;
var music;
var MAC_number = [20, 30, 10, 10, 15, 25];
var sea_number = [15, 25, 3, 15, 20, 10];
var bath_number = [20, 30, 10, 15, 25, 30];
var at_MAC = ["100,150", "200,50", "300,100", "400,150", "50,10"];

var func_bath = ["泡澡就是舒服~<br>清潔+20","你剛剛應該沒有偷看吧....?<br>清潔+30", "你不知道書不能碰水嗎!!!!<br>清潔+10 心情-10"
    , "水漏進來啦啊啊!!!我會變難吃啊啊!!!<br>清潔+10 心情-10","我下次可不可以再來泡澡~<br>清潔+25","你不覺得~我很香嗎(笑<br>清潔+30 心情+20"];
var func_trip_MAC = ["這裡的地板需要我!<br>心情+20 乾淨-3", "躲在Mac教室大家就看不到我了呢<br>心情+30 乾淨-3", "這裡不能讓我打lol啊=3=<br>心情+10 乾淨-3", "我是食物我不能進去啊ˋˊ<br>心情+10 乾淨-3", "臉盆也是懂得使用Mac的!<br>心情+15 乾淨-3", "啊~是熟悉的地方呢<br>心情+25 乾淨-3"];
var func_trip_sea = ["這裡的地板不好拖地<br>心情+15 乾淨-5", "我以前也是住在海邊呢<br>心情+25 乾淨-5", "海水都潑到我了啦<br>心情+3 乾淨-5", "這是我第一次看到真的大海耶!<br>心情+15 乾淨-5", "我可以下去裝海水嗎<br>心情+20 乾淨-5", "我想吃海鮮大餐了<br>心情+10 乾淨-5"];
var at_sea = ["120,130", "180,50", "40,170", "400,100", "300,150"];
function otot(p) {
    pet = p;
}
var petnow = ["mopp.png", "ston.png", "book.png", "chic.png", "face.png", "code.png"];
function changePosition(where){
    console.log("change!!!!!");
    var position = Math.floor(Math.random() * 5);
    if(where == 0){
        var here = at_MAC[position].split(",");
        document.getElementById("pet_in_MAC"+petnow[pet]).style.left = here[0]+ "px";
        document.getElementById("pet_in_MAC"+petnow[pet]).style.top = here[1]+ "px";

    }
    else{
        var here = at_MAC[position].split(",");
        document.getElementById("pet_in_sea"+petnow[pet]).style.left = here[0]+ "px";
        document.getElementById("pet_in_sea"+petnow[pet]).style.top = here[1]+ "px";

    }

}
function trip() {
    var mask = 1;
    use = document.getElementById("useful");
    use.setAttribute("class", "def");
    var mes = "";
    use.innerHTML = mes;
    var t = Math.floor(Math.random() * 2);
    var position = Math.floor(Math.random() * 5);
    music = document.getElementById("mis");
    music.play();
    if(t==0){
        use.setAttribute("class", "trip_MAC");
        mes = "<img class = 'in_MAC' id = 'pet_in_MAC"+ petnow[pet] + "' src ='"  + petnow[pet] + "' onclick = 'changePosition(0)'>";
        use.innerHTML = mes;
        var here = at_MAC[position].split(",");
        document.getElementById("pet_in_MAC"+petnow[pet]).style.left = here[0]+ "px";
        document.getElementById("pet_in_MAC"+petnow[pet]).style.top = here[1]+ "px";
        add_mood(MAC_number[pet]);
        add_clean(-3);
    }
    else{
        use.setAttribute("class", "trip_sea");
        mes = "<img class = 'in_sea' id = 'pet_in_sea"+petnow[pet] + "' src =' " + petnow[pet] + "' onclick = 'changePosition(1)'>";
        use.innerHTML = mes;
        var here = at_sea[position].split(",");
        document.getElementById("pet_in_sea"+petnow[pet]).style.left = here[0]+ "px";
        document.getElementById("pet_in_sea"+petnow[pet]).style.top = here[1]+ "px";

        add_mood(sea_number[pet]);
        add_clean(-5);
    }
    music.addEventListener("ended", function () {
        if (mask > 0) {
            if(t==0){
                add_mood(MAC_number[pet]);
                add_clean(-3);
            }
            else{
                add_mood(sea_number[pet]);
                add_clean(-5);
            }
            use.setAttribute("class", "letter");
            if(t==0){
                mes = "<span class='use_word'>"+func_trip_MAC[pet]+"</span>";
            }
            else{
                mes = "<span class='use_word'>"+func_trip_sea[pet]+"</span>";
            }
            mes += "<input type='image' id='x' src='x.png'></input>";
            use.innerHTML = mes;
            document.getElementById("x").addEventListener("click", function () {
                use.setAttribute("class", "def");
                mes = "";
                use.innerHTML = mes;
            }, false);
            mask--;
        }
    }, false);

}

function bath() {
    var mask = 1;
    use = document.getElementById("useful");
    use.setAttribute("class", "def");
    var mes = "";
    use.innerHTML = mes;
    music = document.getElementById("mib");
    music.play();
    var petImage=document.getElementById("want_pet");
    petImage.setAttribute("class", "bathing");
    
    use.setAttribute("class", "bath_on");
    music.addEventListener("ended", function () {
        if (mask > 0) {
            add_clean(bath_number[pet]);
            if(pet==2||pet==3){
                add_mood(-10);
            }
            else if(pet==5) add_mood(20);
            use.setAttribute("class", "letter");
            mes = "<span class='use_word'>"+func_bath[pet]+"</span>";
            mes += "<input type='image' id='x' src='x.png'></input>";
            use.innerHTML = mes;
            document.getElementById("x").addEventListener("click", function () {
                use.setAttribute("class", "def");
                mes = "";
                use.innerHTML = mes;
            }, false);
            mask--;
            petImage.setAttribute("class", "petpet");
        }
    }, false);
   
    
}

function game(){
    localStorage.clear();
    win = 0;
    var use = document.getElementById("useful");
    use.setAttribute("class", "def");
    var mesg = "";
    use.innerHTML = mesg;
    use.setAttribute("class", "game");
    /*var OOXXdiv = document.getElementById("OOXX")*/
    mesg = "<table id='OOXXtable'><tbody class=OOXXtbody><tr class = 'OOXXtr'></div>"
            + "<td id='1-1' class='OOXXtd' onclick='showOOXX(id)'></div></td>"
            + "<td id='1-2' class='OOXXtd' onclick='showOOXX(id)'></div></td>"
            +"<td id='1-3' class='OOXXtd' onclick='showOOXX(id)'></div></td></tr>"
            +"<tr class = 'OOXXtr'>"
            +"<td id='2-1' class='OOXXtd' onclick='showOOXX(id)'></td>"
            +"<td id='2-2' class='OOXXtd' onclick='showOOXX(id)'></td>"
            +"<td id='2-3' class='OOXXtd' onclick='showOOXX(id)'></td>"
            +"</tr><tr class = 'OOXXtr'><td id='3-1' class='OOXXtd' onclick='showOOXX(id)'></td>"
            +"<td id='3-2' class='OOXXtd' onclick='showOOXX(id)'></td>"
            +"<td id='3-3' class='OOXXtd' onclick='showOOXX(id)'></td></tr></tbody>"
            +"<tfoot class='OOXXfoot'><tr class = 'OOXXtr'><td class = 'OOXXtd' colspan='3'>"
            /*+"<input id='closeGameButton' type='button' value='不玩了(#`Д´)ﾉ' onclick='closeGame()'>"*/
            +"<input id='new' type='button' value='不管啦重來(#`Д´)ﾉ' onclick='newGame()'></td></tr></tfoot></table>"
    /*OOXXdiv.innerHTML=mesg;*/
    use.innerHTML = mesg;
    var waitInterval = setInterval(waitPlus, 100);
}
