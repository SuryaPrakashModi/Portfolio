var width=100
var index=1;
var inner=document.getElementById('inner');
function switchImg(index) {
	inner.style.left=-width*index+'%';
}
window.onload=init;
function init() {
	var id=window.setInterval(change,3000);
}
function change() {
	if (index>=3) {index=0;}
	switchImg(index);
	index++;
}
//window.clearInterval(id);