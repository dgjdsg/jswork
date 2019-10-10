var r = prompt('请输入圆的半径')
r = parseFloat(r)&&Number(r)
if (!isNaN(r)){
    var C = 2 * Math.PI * r
    var S = Math.PI * r * r
    document.getElementById('r').value = r
    document.getElementById('C').value = C.toFixed(2)
    document.getElementById('S').value = S.toFixed(2)
}else{
    alert('请输入正常数值')
}