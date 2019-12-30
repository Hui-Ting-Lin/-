var count = 0;
var all = [];
var nine = [[0,0,0],[0,0,0],[0,0,0]];
var win = 0, wait = 0, canput = 1;
var petWin = 0;
var waitInterval;
var endGameNumber=["15,-15", "30,10", "15,-20", "20,-10", "25,-10", "20,-15"]
var func_game_win = ["Yeeeee~我贏了! 我很棒吧!<br>心情+15", "再跟我玩一場嘛~~<br>心情+30", "不小心就贏了<br>心情+15", "這只是一塊蛋糕!<br>心情+20", "我以前玩這個也都贏我阿嬤!<br>心情+25", "你是不是再讓我ˋˊ<br>心情+20"];
var func_game_lose = ["齁齁 我怎麼輸了QQQQ<br>心情-15", "最喜歡跟你玩遊戲了<3<br>心情+10", "你是不是作弊!!<br>心情-20", "哼哼 我讓你的<br>心情-10", "我以為你會讓我QQ<br>心情-10", "這只是巧合!<br>心情-15"];
function OOX(p) {
    pet = p;
}
function judge(id) {
    var length = localStorage.length;
    var token, exist = 0, place, now, row = 0, col = 0, diag = 0, diag1 = 0;
    for (var i = 0; i < length; ++i) {
        all[i] = localStorage.key(i);
        all.sort;
        if (all[i].split(",")[1] == id) now = localStorage.getItem(all[i]);
    }
    for (var i = 0; i < length; ++i) {
        var value = localStorage.getItem(all[i]);
        token = all[i].split(",");
        place = token[1].split("-");
        if (place[0] == id.split("-")[0] && value == now && token[1] != id) row++;//橫的
        else if (place[1] == id.split("-")[1] && value == now && token[1] != id) col++;//直的
        else if (id.split("-")[0] == id.split("-")[1] && place[0] == place[1] && value == now && token[1] != id) diag++//斜的\
        else if ((id.split("-")[0] == 1 && id.split("-")[1] == 3) || (id.split("-")[0] == 2 && id.split("-")[1]==2) || (id.split("-")[0] == 3 && id.split("-")[1]==1)){
            if((place[0] == 1 && place[1]==3)||(place[0]==2&&place[1]==2)||(place[0]==3&&place[1]==1)){
                if(value==now&&token[1]!=id) diag1++;
            }
        
        }//斜的/
    }
    
    window.setTimeout(function () {
        if (row == 2 || col == 2 || diag == 2 || diag1 == 2){
            /*window.alert(now + " wins!");*/
            if(now=="O"){
                add_mood(endGameNumber[pet].split(",")[0]);
                petWin = 1;
            }//電腦贏
            else{
                add_mood(endGameNumber[pet].split(",")[1]);
                petWin = 0;
            }//我贏
            closeGame();
        } 
        else if (length == 9) {
            petWin = -1;
            closeGame();
            /*window.alert("Tie!");*/
        }//平手
    }, 1000);
    if (row == 2 || col == 2 || diag == 2 || diag1 == 2 || length == 9) return 1;
    else return 0;
}
function putOO(count){
    var randomNumber=Math.floor(Math.random()*8)+0;
    var row = parseInt(randomNumber)/3+1;
    var col = parseInt(randomNumber)%3+1;
    while(nine[parseInt(row)-1][parseInt(col)-1] == 1){
        randomNumber = Math.floor(Math.random()*8)+0;
        row = parseInt(randomNumber)/3+1;
        col = parseInt(randomNumber)%3+1;
    }
    row = parseInt(randomNumber)/3+1;
    col = parseInt(randomNumber)%3+1;
    nine[parseInt(row)-1][parseInt(col)-1] = 1;
    document.getElementById(parseInt(row) + "-" + parseInt(col)).innerHTML="<img src = 'O.png' class = 'pic'>";
    localStorage.setItem(count + "," + parseInt(row) + "-" + parseInt(col) , "O");
    count++;       
    var Oid = parseInt(row) + "-" + parseInt(col);
    judge(Oid);
}
function showOOXX(id) {
    var table = document.getElementById(id);
    var length = localStorage.length;
    var all = [], token, exist = 0;
    if(win==0&&canput==1){
        for (var i = 0; i < length; ++i) {
            all[i] = localStorage.key(i);
            token = all[i].split(",");
            if (token[1] == id) {
                window.alert("Not allowed");
                exist = 1;
            }
        }
        if (exist == 0) {
            table.innerHTML = "<img src = 'XX.png' class = 'pic'>";
            localStorage.setItem(count + "," + id, "X");
            var row = id.split('-')[0];
            var col = id.split('-')[1];
            nine[row-1][col-1]=1;
            win = judge(id);
            count++;
            canput = 0;
            if(count<8 && win==0){
                var num = Math.floor(Math.random()*20)+0;
                var time = parseInt(num)*100;
                window.setTimeout(function(){putOO(count);
                canput = 1;}, parseInt(time));         
            }
        }
    }
    /*else if(wait<0){
        
    }*/
    else if(win==1){
        window.alert("結束了啦!!!");
    }
    else if(canput==0){
        window.alert("等一下啦我在思考!!!!");
    }//這裡也是哈哈
}
function waitPlus(){
    /*wait++;
    if(wait>26)  clearInterval(waitInterval);*/
}
function newGame(){
    clearInterval(waitInterval);
    canput=1;
    count=0;
    for(var i =0;i<3;i++){
        for(var j =0;j<3;j++){
            nine[i][j]=0;
        }
    }
    game();
}
function closeGame(){
    canput = 1;
    count = 0;
    for(var i =0;i<3;i++){
        for(var j =0;j<3;j++){
            nine[i][j]=0;
        }
    }
    var use = document.getElementById("useful");
    use.setAttribute("class", "letter");
        if(petWin==1){
            mes = "<span class='use_word'>"+func_game_win[pet]+"</span>";
        }
        else if(petWin==0){
            mes = "<span class='use_word'>"+func_game_lose[pet]+"</span>";

        }
        else mes = "<span class='use_word'>平手!</span>";
        mes += "<input type='image' id='x' src='x.png'></input>";
        use.innerHTML = mes;
        document.getElementById("x").addEventListener("click", function () {
            use.setAttribute("class", "def");
            mes = "";
            use.innerHTML = mes;
        }, false);
    win = 0;

}
