var addLeft = document.getElementById("addLeft");
var addRight = document.getElementById("addRight");
var deleteLeft = document.getElementById("deleteLeft");
var deleteRight = document.getElementById("deleteRight");
var input = document.getElementById("input");
var paixu = document.getElementById("paixu");
var ul = document.createElement("ul");
document.body.appendChild(ul);
var abc;
function check(){
	var input2 = input.value;
	var number = /^[0-9]+$/;
	if (!number.test(input2) || input2 > 100 || input2 < 10) {
		alert("请输入10 - 100的数字！");
		return abc;
	}
	else return input2;
}



function rightIn(){
	var input3 = check();
	if (input3 === abc) {return};
	var length = ul.getElementsByTagName("li").length;
	if(length > 60){alert("最多只能添加60个数字！")}
	var li = document.createElement("li");
	li.addEventListener("click",deleteself);
	var text = document.createTextNode(input3);
	li.appendChild(text);
	li.style.height = input3 + "px";
	ul.appendChild(li);
}

function leftIn(){
	var input3 = check();
	if (input3 === abc) {return};
	var length = ul.getElementsByTagName("li").length;
	if(length > 60){alert("最多只能添加60个数字！")}
	var li = document.createElement("li");
	li.addEventListener("click",deleteself);
	var text = document.createTextNode(input3);
	li.appendChild(text);
	li.style.height = input3 + "px";
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
var i = 0;
function sort(){
	var li = ul.getElementsByTagName("li");
	for (var j = i+1 ; j < li.length; j++) {
		var number1 = li[i].innerHTML;
		var number2 = li[j].innerHTML;
			if(number1 > number2){
				li[i].innerHTML = number2;
				li[j].innerHTML = number1;
				li[i].style.height = number2 + "px";
				li[j].style.height = number1 + "px";
			}
		}
		i++;
	setTimeout(sort,500);
}
paixu.addEventListener("click",sort);
deleteRight.addEventListener("click",rightOut);
deleteLeft.addEventListener("click",leftOut);
addRight.addEventListener("click",rightIn);
addLeft.addEventListener("click",leftIn);




