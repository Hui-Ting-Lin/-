var pet_pic = ["mopp.png", "ston.png", "book.png", "chic.png", "face.png", "code.png"];
var pet_die = ["die_mopp.png", "die_ston.png", "die_book.png", "die_chic.png", "die_face.png", "die_code.png"];
var pet_name = ["拖把", "石頭", "計組課本", "烤雞", "臉盆", "vscode"];
var pet;
function enen(p) {
    pet = p;
}

function up_to_the_sky() { 
    clearInterval(hungryInterval);
    clearInterval(cleanInterval);
    clearInterval(moodInterval);
    var cover = document.getElementById("cover");
    cover.setAttribute("class", "sky");
    var mes = '<img class="end_pet" src="' + pet_pic[pet] + '"><img class="light" src="light1.png">';
    mes += "<p class=sky_word>恭喜<br>你養的<span class='fc'>" + pet_name[pet] + "</span><br>   成功<span class='fc'>升仙啦~~~</span></p>";
    cover.innerHTML = mes;
}

function end_die() {
    clearInterval(hungryInterval);
    clearInterval(cleanInterval);
    clearInterval(moodInterval);
    var cover = document.getElementById("cover");
    cover.setAttribute("class", "end_die");
    var mes = '<img class="die_pet" src="' + pet_die[pet] + '"><img class="rip" src="rip.png">';
    mes += "<p class='die_word'>OAO<br>你養的" + pet_name[pet] + "<br>死掉啦!!!</p>";
    cover.innerHTML = mes;
}

function end_runaway() {
    clearInterval(hungryInterval);
    clearInterval(cleanInterval);
    clearInterval(moodInterval);
    var cover = document.getElementById("cover");
    cover.setAttribute("class", "runaway");
    var mes = "<p class='runaway_word'>OAO<br>你養的" + pet_name[pet] + "<br>離家出走啦!!!</p>";
    cover.innerHTML = mes;
}