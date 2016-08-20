var addLeft = document.getElementById("addLeft");
var addRight = document.getElementById("addRight");
var deleteLeft = document.getElementById("deleteLeft");
var deleteRight = document.getElementById("deleteRight");
var input = document.getElementById("input");
var ul = document.createElement("ul");
document.body.appendChild(ul);
var abc;
function check(){
	var input2 = input.value;
	var number = /^[0-9]+$/;
	if (!number.test(input2)) {
		alert("请输入数字！");
		return abc;
	}
	else return input2;
}



function rightIn(){
	var input3 = check();
	if (input3 === abc) {return};
	var li = document.createElement("li");
	li.addEventListener("click",deleteself);
	var text = document.createTextNode(input3);
	li.appendChild(text);
	ul.appendChild(li);
}

function leftIn(){
	var input3 = check();
	if (input3 === abc) {return};
	var li = document.createElement("li");
	li.addEventListener("click",deleteself);
	var text = document.createTextNode(input3);
	li.appendChild(text);
	ul.insertBefore(li,ul.firstChild);
}

function leftOut(){
	alert("你将删除" + ul.firstChild.innerText);
	ul.removeChild(ul.firstChild);
}

function rightOut(){
	alert("你将删除" + ul.lastChild.innerText);
	ul.removeChild(ul.lastChild);
}

function deleteself(e){
	alert("你将删除" + e.target.innerText);
	ul.removeChild(e.target);
}

deleteRight.addEventListener("click",rightOut);
deleteLeft.addEventListener("click",leftOut);
addRight.addEventListener("click",rightIn);
addLeft.addEventListener("click",leftIn);




