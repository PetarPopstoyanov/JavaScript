function treeHouseCompare(a, b) { 
    var housearea = a * a + (a * 2 / 3 * a) / 2;
    var treearea = b * (b / 3) + Math.PI * (4 / 3 * b);
    if (housearea > treearea) {
        return "house" + "/" + housearea.toFixed(2);
    }
    else {
        return "tree" + "/" + treearea.toFixed(2);
    }
}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));