function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			_due(xmlhttp.responseText);
			console.log("ok");
		}
	}
	xmlhttp.open("GET","http://canteen.chd.edu.cn/restaurantbackstage/restaurant/visitorsFloweate/selectRestaurantIndex",true);
	xmlhttp.send(xmlhttp.responseText);
}

