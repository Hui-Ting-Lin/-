var shower_list = ["2000", "1500", "1000", "1500", "2000", "2500"];
var shower;
var func;
var pet;
var mask = 0;
var mas = 0;
var eat_number = [20,30,15,15,20,15];
var drink_number = [20,30,15,20,25,10];
var wash_number = [20,30,10,15,30,30];
var func_apple=["啊~是蘋果欸~<br>飽足+20", "謝謝(>\\\\<)<br>飽足+30", "這不是減肥在吃的嗎?想拿這個敷衍我?<br>飽足+15","這顆蘋果蠻新鮮的啊<br>飽足+15","這是給我的嗎?吃起來好甜啊<br>飽足+20","蘋果?勉強還算能吃<br>飽足+15"];
var func_drink=["啊~是珍珠奶茶欸~<br>飽足+20", "謝謝，這個很好喝(>\\\\<)<br>飽足+30", "甜成這樣你也喝下去??<br>飽足+15","珍奶跟我是絕配啊!<br>飽足+20","這個甜度我喜歡ヽ（´∀｀）ノ<br>飽足+25","你是想要肥死我嗎?<br>飽足+10"];
var func_soap=["洗澡就是舒服~<br>清潔+20", "其實我可以自己洗的(>\\\\<)<br>清潔+30", "你膽敢嫌我髒?<br>清潔+10","妳差點就把泡泡弄進袋子裡了= 3 =<br>清潔+15","一起肥皂撿起來~~~(x<br>清潔+30","噢噢噢噢，幸福就是如此容易<br>清潔+30 心情+20"];
function momo(p) {
    pet = p;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function sh(e) {
    mas = 1;
    use = document.getElementById("useful");
    use.setAttribute("class", "def");
    var mes = "";
    use.innerHTML = mes;
    shower = shower_list[pet];
}
function sho(e) {
    document.addEventListener("dragenter", function (event) {
        event.preventDefault();
        if (event.target.id == "want_pet" && e.target.id == "soap_func_4") {
            if (shower > 0) { shower -= 1; }
            else {
                if (mas > 0) {
                    add_clean(wash_number[pet]);
                    if(pet==5) add_mood(20);
                    use = document.getElementById("useful");
                    use.setAttribute("class", "letter");
                    var mes = "<span class='use_word'>"+func_soap[pet]+"</span>";//"+func_soap[pet]+"
                    mes += "<input type='image' id='x' src='x.png'></input>";
                    use.innerHTML = mes;
                    document.getElementById("x").addEventListener("click", function () {
                        use.setAttribute("class", "def");
                        var mes = "";
                        use.innerHTML = mes;
                    }, false);
                    shower = 99999999999;
                    mas=0;
                } 
            }
        }
    }, false);
}

function drag(e) {
    use = document.getElementById("useful");
    use.setAttribute("class", "def");
    var mes = "";
    use.innerHTML = mes;
    e.dataTransfer.setData("text", e.target.id);
    func = (e.target.id).split("_");
    if (func[2] == 2 || func[2] == 3) {
        mask = 1;
    }
}

function drop(e) {
    e.preventDefault();
    if (func[2] == "2" && mask > 0) {
        mask--;
        add_hungry(eat_number[pet]);
        use = document.getElementById("useful");
        use.setAttribute("class", "letter");
        var mes = "<span class='use_word'>"+func_apple[pet]+"</span>";
        mes += "<input type='image' id='x' src='x.png'></input>";
        use.innerHTML = mes;
        document.getElementById("x").addEventListener("click", function () {
            use.setAttribute("class", "def");
            var mes = "";
            use.innerHTML = mes;
        }, false);
    }
    if (func[2] == "3" && mask > 0) {
        mask--;
        add_hungry(drink_number[pet]);
        use = document.getElementById("useful");
        use.setAttribute("class", "def");
        var mes = "";
        use.innerHTML = mes;
        use.setAttribute("class", "letter");
        mes = "<span class='use_word'>"+func_drink[pet]+"</span>";
        mes += "<input type='image' id='x' src='x.png'></input>";
        use.innerHTML = mes;
        document.getElementById("x").addEventListener("click", function () {
            use.setAttribute("class", "def");
            mes = "";
            use.innerHTML = mes;
        }, false);
    }
}
