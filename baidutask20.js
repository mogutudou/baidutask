var content1 = document.getElementById('textarea');
var add = document.getElementById('add');
var searchContent = document.getElementById('input');
var search = document.getElementById('search');
add.addEventListener("click",addContent);
search.addEventListener("click",searchKey);
var ul = document.createElement("ul");
document.body.appendChild(ul);
function addContent(){
	var content2 = content1.value.trim().split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
	var content3 = "";
	for (var i = 0; i < content2.length; i++) {
		content3 += "<li>" + content2[i] + "</li>";
	}
	ul.innerHTML = content3;
}

function searchKey(){
	var key = searchContent.value.trim();
	var li2 = ul.getElementsByTagName("li");
	for (var i = 0; i < li2.length; i++) {
		if(li2[i].innerHTML.indexOf(key) !== -1){
			li2[i].style.background = "#eee";
		}
	}
}