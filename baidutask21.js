var input = document.getElementById('input');
var textarea = document.getElementById('textarea');
var queren = document.getElementById('queren');
var ul2 = document.createElement('ul');
document.body.appendChild(ul2);
var ul = document.createElement("ul");
insetAfter(ul,input);

queren.addEventListener("click",AddInterest);

input.onkeyup = function(e){
	if (e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 32 ){
		var input1 = input.value.trim().replace(/[,， ]/, '');
		// input1.substring(0,input1.length - 1);
		var li = document.createElement("li");
		li.addEventListener("mouseout",hoverout);
		li.addEventListener("mouseover",hover);
		li.addEventListener("click",click);
		ul.appendChild(li);
		li.innerHTML = input1;
		var liLength = ul.getElementsByTagName("li");
		if(liLength.length > 10){
			for (var i = 0; i < liLength.length - 10; i++) {
				ul.removeChild(liLength[i]);
			}
		}
		for (var j = 0; j < liLength.length; j++) {
			if (liLength[j].innerHTML == "") {
				ul.removeChild(liLength[j]);
			}
			for (var k = j+1; k < liLength.length; k++) {
				if(liLength[j].innerHTML == liLength[k].innerHTML){
					ul.removeChild(liLength[k]);
				}
			}
		}
		input.value = "";
	}
}

function insetAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function deleteRepeat(array1) {
		var array = [];
		var b = 0;
		var array2 = array1.sort();
		for (var i = 0; i < array2.length; i++) {
			if (array2[i] === array2[i+1]) continue;
			else array[b] = array2[i];
			b++;
		}
		return array;
	}


function AddInterest() {
	var content1 = textarea.value.trim().split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);

	
	
	content2 = deleteRepeat(content1);

	var content3 = "";
	if (content1.length <= 10) {
		for (var i = 0; i < content2.length; i++) {
			content3 += "<li>" + content2[i] + "</li>";
		}
		ul2.innerHTML = content3;
	}else {
		for (var j = content2.length - 10; j < content2.length; j++) {
			content3 += "<li>" + content2[j] + "</li>";
		}
		ul2.innerHTML = content3;
	}
	textarea.value = "";

	var li = ul2.getElementsByTagName("li");
		for (var i = 0; i < li.length; i++) {
			li[i].addEventListener("mouseover",hover);
			li[i].addEventListener("mouseout",hoverout);
			li[i].addEventListener("click",click);
		}

}



function hoverout(e){
	var str = e.target.innerText;
	e.target.innerHTML = str.substring(4,str.length);
	e.target.style.background = "#eee";
	
}
function hover(e){
	e.target.innerHTML = "确认删除" + e.target.innerHTML;
	e.target.style.background = "#f00";
}
function click(e){
	if (e.target.parentNode == ul2) {
		ul2.removeChild(e.target);
	}else{
		ul.removeChild(e.target);
	}
}