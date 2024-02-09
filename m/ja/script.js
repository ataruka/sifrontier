

window.addEventListener("load", () => {
    getDirection();
   });

window.addEventListener("resize", () => {
    // 処理呼び出し
    getDirection();
   });

function getDirection() {
    // 端末の傾きを取得する
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    var viewblock = document.getElementById("viewblock");
    var body = document.getElementById("body");
    var head = document.getElementById("head");
    if(directionX > directionY) {
        // 横向きの処理
        viewblock.style.display = "block";
        body.style.overflow = "hidden";
        head.style.overflow = "hidden";
    } 
    if(directionX < directionY) {
        // 縦向きの処理
        viewblock.style.display = "none";
        body.style.overflow = "scroll";
        head.style.overflow = "scroll";
    }
}


function createLines() {
    let line = document.createElement("div");
    line.setAttribute("class","line");
    document.body.appendChild(line);

    line.style.left = Math.random() * innerWidth + "px";
    line.style.animationDuration = 6 + Math.random() * 24 + "s";
    line.style.width = Math.random() * 12 + "px";
    line.style.height = Math.random() * 12 + "px";

    setTimeout(function () {
        document.body.removeChild(line);
    }, 24000)
}

setInterval(function(){
    createLines();

}, 100)