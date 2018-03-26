/**
 * Created by yeejoy-tech on 18/3/26.
 */
window.onload=function() {//页面加载完毕之后再加载js
    var oImg = document.getElementsByTagName("img");//通过标签获取元素结点
    //旋转度数
    var Deg = 360 / oImg.length;

    //遍历 jquery forEach(数组方法)
    //把oimg借用成array方法
    Array.prototype.forEach.call(oImg, function (el, index) {
        //console.log(index);
        el.style.transform = "rotateY(" + Deg * index + "deg) translateZ(350px)";
        el.style.zIndex = -index;
        //动画 延时
        el.style.transition = "transform 1s " + index * 0.1 + "s";

    });
}