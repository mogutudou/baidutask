/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var city = document.getElementById('aqi-city-input');
var weatherQuality = document.getElementById('aqi-value-input');
var addbutton = document.getElementById('add-btn');
var table = document.getElementById('aqi-table');


var city3 = /^[\u4e00-\u9fa5a-zA-Z\/\(\)]+$/;
var weather3 = /^[0-9]+$/;

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city2 = city.value.trim();
	var weatherQuality2 = weatherQuality.value.trim();
	if (!city3.test(city2)) {
		alert("输入的城市名必须为中英文字符！");
	}else if (!weather3.test(weatherQuality2)) {
		alert("空气质量指数必须为整数！")
	}else{
		aqiData[city2] = weatherQuality2;
	}
	// console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var tablelist = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(a in aqiData){
		tablelist += "<tr><td>" + a + "</td><td>" + aqiData[a] + "</td><td><button onclick = delBtnHandle(\"" + a + "\") >删除</button></td></tr>";
		// tablelist = tablelist.replace("liurui",a)
	}
	table.innerHTML = tablelist;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(b) {
  // do sth.
  delete aqiData[b];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	addbutton.addEventListener('click',addBtnHandle);

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();