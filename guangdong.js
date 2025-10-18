// ...existing code...

function updateTime() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const h = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('nowTime').textContent = 
    `厦门北(09:53)——广州南(14:00) · ${m}-${d} ${h}:${min}:${s}`;
}
setInterval(updateTime, 1000);
updateTime();
// ...existing code...

// 烟花导航
let yanhua = document.getElementById("yanhua");
let yanhuazz = document.getElementById("yanhuazz");
let yanhua2 = document.getElementById("yanhua2");
let yanhua3 = document.getElementById("yanhua3");
function yanhuaf(){
    yanhuazz.style.display = "flex";

}
function yanhuan(e){
    if(e.target === yanhuazz){
    yanhuazz.style.display = "none";
    lailgif.style.display = "none";
    shoudgif.style.display = "none";
}
    
}
yanhua.onclick = yanhuaf;
yanhuazz.onclick = yanhuan;


// 项目地图
let nav1 = document.getElementById("nav1");
let dituzz = document.getElementById("dituzz");
nav1.onclick = function(){
    dituzz.style.display = "flex";
}
dituzz.onclick = function(e){
    if(e.target === dituzz){
        dituzz.style.display = "none";
    }

}

let lailgif = document.getElementById("lailgif");
yanhua3.onclick =  function(){
    lailgif.style.display = "flex";
    shoudgif.style.display = "none";
}

let shoudgif = document.querySelector(".shoudgif");
yanhua2.onclick = function(){
    shoudgif.style.display = "flex";
    lailgif.style.display = "none";
}

// 迎海酒店
let nav2 = document.getElementById("nav2");
let jiudianzz = document.getElementById("jiudianzz");
nav2.onclick = function(){
    jiudianzz.style.display = "flex";
}
jiudianzz.onclick = function(e){
    if(e.target === jiudianzz){
        jiudianzz.style.display = "none";
    }
}

// 有轨电车
const dianchex = new Swiper(".dianchex",{
    pagination: {
        el:".swiper-pagination",
    },
    // loop:true,
    zoom:true,

});
let dianchezz = document.getElementById("dianchezz");
let nav4 = document.getElementById("nav4");
let dianche1= document.getElementById("dianche1");
let dianche2= document.getElementById("dianche2");
nav4.onclick = function(){
    dianchezz.style.display = "flex";
dianchex.slideTo(0);
}
dianchezz.onclick = function(e){
    if(e.target === dianchezz){
    dianchezz.style.display = "none";

}}
// else if(e.target === dianche1){
//     dianche1.style.display = "none";
//     dianche2.style.display = "flex";
// }
// else if(e.target ===dianche2){
//     dianche2.style.display = "none";
//     dianche1.style.display = "flex";
// }}

