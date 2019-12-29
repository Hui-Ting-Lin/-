var message = "";

        function showMain(){
            message = "";
            var page = document.getElementById("page");
            page.setAttribute("class", "main");
            message += "<input type='image' id='start_game' src='start.png' class = 'start'></input>";
            page.innerHTML = message;
            document.getElementById("start_game").addEventListener("click", choose_pet_cover, false);
        }
        function showIntroduce(){
            message = "";
            var page = document.getElementById("page");
            page.setAttribute("class", "introduce");
            message += "<br><p><img src='in1.jpg' class='inin'><br>按下<img src='start.png' class='inli'>開始遊戲</p><br>"
                + "<p><img src='in2.jpg' class='inin'><br>點擊寵物圖片可看寵物簡介,可以根據自己的喜好與遊戲難度選擇想要的角色。<br>"
                + "按下<img src='enterGame.png' class='inli'>進入遊戲</p><br>"
                + "<p><img src='in3.jpg' class='inin'><br>遊戲主畫面，下方的互動行為會因為寵物習性而影響左上角的寵物狀態。</p><br>"
                + "<p><img src='in4.jpg' class='ini'><img src='in5.jpg' class='ini'><img src='in6.jpg' class='ini'><br>"
                + "遊戲會因為飼養方式而產生三種結局。</p><br>";
            page.innerHTML = message;

        }
        function showDesign(){
            message = "";
            var page = document.getElementById("page");
            page.setAttribute("class", "design");
            message += "<br><p>(1)使用老舊的遊戲模式(電子寵物機)，讓玩家重回快樂的童年時光。</p>"
                + "<p>(2)加入創新的設計理念，更加地貼近生活。</p>"
                + "<p>Ex.同樣的選擇會因不同的寵物特性而有不同的反應。</p>"
                + "<p>(3)具有多樣化的寵物(Ex.拖把、石頭)，滿足各方面的需求。</p>"
                + "<p>(4)每個寵物有不同的個性喜好，因而產生不同的遊戲難度。</p><br>";
            page.innerHTML = message;
        }
        function showTeam(){
            message = "";
            var page = document.getElementById("page");
            page.setAttribute("class", "team");
            message += "<br><div class='st' style='background:#fee58b'>姓名:張書瑜<br>學號:00757122<br>班級:資工2B<br>e-mail:sweety890210@gmail.com</div>"
                + "<div class='st' style='background:#f4b9bb'>姓名:林惠婷<br>學號:00757147<br>班級:資工2B<br>e-mail:tina410510zz@gmail.com</div><br>";
            page.innerHTML = message;
        }
        function showInform(){
            message = "";
            var page = document.getElementById("page");
            page.setAttribute("class", "inform");
            message+="<a href='馬麻我可以養拖把嗎-00757122+00757147.pptx'>說明投影面</a>"
            page.innerHTML = message;
        }
    function start(){
        showMain();
        var mainPage = document.getElementById("mainPage");
        mainPage.addEventListener("click",showMain,false);
        var introducePage = document.getElementById("introducePage");
        introducePage.addEventListener("click",showIntroduce,false);
        var introducePage = document.getElementById("disignPage");
        introducePage.addEventListener("click",showDesign,false);
        var introducePage = document.getElementById("team");
        introducePage.addEventListener("click",showTeam,false);
        var introducePage = document.getElementById("information");
        introducePage.addEventListener("click", showInform, false);
        document.getElementById("start_game").addEventListener("click", choose_pet_cover, false);
    }
window.addEventListener("load", start, false);
