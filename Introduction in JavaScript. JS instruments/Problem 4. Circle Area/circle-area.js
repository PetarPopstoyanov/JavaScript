function calcCircleArea(r) {
    var area = Math.PI * r * r;
    return area;
}
document.getElementById("firstarea").innerHTML = calcCircleArea(7);
document.getElementById("secondarea").innerHTML = calcCircleArea(1.5);
document.getElementById("thirdarea").innerHTML = calcCircleArea(20);