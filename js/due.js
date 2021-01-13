var ShiTang;

function _due(temp_Str)
{
	ShiTang=eval ("(" + temp_Str + ")");
	for(var i=0;i<10;i++)
		show_Progress(i);
}

function show_Progress(index)
{
	document.getElementById("jd_Name"+String(index+1)).innerHTML=ShiTang.data[index].CTMC+ShiTang.data[index].LCMC;

	var getProgress=document.getElementById("jd"+String(index+1))
	var getProtion = getProgress.firstElementChild;
	var getPiovt = getProtion.firstElementChild;

	var pre=ShiTang.data[index].ZB; //获取拥挤度百分比
	pre=pre.replace("%","");
	pre=Number(pre)/100;

	getProtion.style.width = String(pre*getProgress.clientWidth)+"px";
	getPiovt.style.left = String(pre*getProgress.clientWidth-5)+"px";
	getPiovt.innerHTML=ShiTang.data[index].ZB;
}

var Second=20;
function ShuaXin_Auto()
{

	console.log(Second);
	if (Second==0)
	{
		loadXMLDoc();
		Second=20;
	}
	else
	{
		Second-=1;
		document.getElementById("ShuaXin_Num").value=Second;
	}
    setTimeout("ShuaXin_Auto()",1000);
}

function ShuaXin()
{
	loadXMLDoc();
	Second=20;
}