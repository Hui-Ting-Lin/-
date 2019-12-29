var pet_pic = ["mopp.png", "ston.png", "book.png", "chic.png", "face.png", "code.png"];
var pet_inf = ["<p>品種名:<br>拖把</p>" + "<p>難易度:<br>普通</p>" + "<p>介紹:<br>拖把是個人見人愛的好孩子，鄰居叔叔阿姨都很喜歡他。</p>",
              "<p>品種名:<br>石頭</p>" + "<p>難易度:<br>易</p>" + "<p>介紹:<br>因為卡通節目，一度成為明星寵物。樂觀害羞好養活，適合新手。</p>",
              "<p>品種名:<br>計組課本(又名:祭祖課本)</p>" + "<p>難易度:<br>極難</p>" + "<p>介紹:<br>養起來就跟讀計组一樣有趣呢!</p>",
              "<p>品種名:<br>烤雞</p>" + "<p>難易度:<br>普通</p>" + "<p>介紹:<br>因為特殊體香，曾瘋迷全台。在感恩節將近時，領養率會暴增。</p>",
              "<p>品種名:<br>臉盆</p>" + "<p>難易度:<br>易</p>" + "<p>介紹:<br>很有長輩緣，尤其是阿公阿嬤那一輩，幾乎每個人都有養過兩三隻。</p>",
              "<p>品種名:<br>vscode</p>" + "<p>難易度:<br>難</p>" + "<p>介紹:<br>對美學很有要求的寵物，十分嬌氣，吃顏值長大，如果你長得比較無拘無束，建議領養其他寵物。</p>"];

var pet=0;
var want;

function choose_pet_cover() {
    var mes = '';
    mes += '<div id="game_cover" style="background:url(bed.jpg)no-repeat;"><span id="useful" class="def"></span>'
        + '<img id="want_pet" src="mopp.png" class="petpet" ondrop="drop(event,pet)" ondragover="allowDrop(event)">'
        + '<span id="pet_information">' + pet_inf[0] + '<input type="image" id="enter" src="enterGame.png"></input></span></div><br>'
        + '<div id="choose_cover"><table id="table"><caption>請選一個你想養的寵物</caption><tr>'
        + '<td class="td_choice"><img class="choice" id="pet_mopp_0" src="mopp.png"></td>'
        + '<td class="td_choice"><img class="choice" id="pet_ston_1" src="ston.png"></td>'
        + '<td class="td_choice"><img class="choice" id="pet_book_2" src="book.png"></td>'
        + '<td class="td_choice"><img class="choice" id="pet_chic_3" src="chic.png"></td>'
        + '<td class="td_choice"><img class="choice" id="pet_face_4" src="face.png"></td>'
        + '<td class="td_choice"><img class="choice" id="pet_code_5" src="code.png"></td></tr></table></div>';
    document.getElementById("cover").innerHTML = mes;
    document.getElementById("table").addEventListener("click", wanted, false);
    document.getElementById("enter").addEventListener("click", enterGame,false);
}
function wanted(e) {
    if (e.target.tagName.toLowerCase() == "img") {
        pet = (e.target.id).substr(9);
        document.getElementById("want_pet").setAttribute("src", pet_pic[pet]);
        var mes = pet_inf[pet] + '<input type="image" id="enter" src="enterGame.png"></input>';
        document.getElementById("pet_information").innerHTML = mes;
        stst(pet);
        momo(pet);
        otot(pet);
        enen(pet);
        OOX(pet);
        document.getElementById("enter").addEventListener("click", enterGame, false);
    }
    //document.getElementById("enter").addEventListener("click", enterGame, false);
}
//document.getElementById("start_game").addEventListener("click", choose_pet_cover, false);
//style = 'background-image: url("+"'bed.jpg'"+");'
//getElementsByClassName