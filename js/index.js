window.onload=function(){
	clock();
	setInterval(function(){
		clock();
	},1000);
	function clock(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var dt = d.getDate();
		var day = d.getDay();
		var hour = d.getHours()<10?'0'+d.getHours():d.getHours();
		var minute = d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes();
		var hours = hour+':'+minute;
		var timer = document.getElementsByClassName('time-l')[0].innerHTML=hours;
		var days = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六'); 
		var times = year+'年'+month+'月'+dt+'日';
		var week = document.getElementsByClassName('time-top')[0].innerHTML=days[day];
		var under = document.getElementsByClassName('time-under')[0].innerHTML=times;
	};

	var li = document.querySelectorAll('.list li');
	for(var i=0;i<li.length;i++){
		li[i].index=i;
		li[i].onclick=function(){
			for(var j=0;j<li.length;j++){
				li[j].style.background='';
				li[j].style.opacity='';
			}
			this.style.background="#000";
			this.style.opacity=0.5;
		}
	}

	var zy = document.getElementsByClassName('zy');
	var cli = document.querySelectorAll('.jz');
	var four = document.querySelectorAll('.zy .four');
	var bai = document.getElementsByClassName('white');
	for(var i=0;i<cli.length;i++){
		cli[i].index=i;
		cli[i].onclick=function(){
			zy[0].style.display='block';
			zy[1].style.display='block';
			bai[0].style.display='block';
		}
	}

	// var ff = document.getElementsByClassName('fc');
	// var fv = document.querySelectorAll('.five div');
	// var fb = document.getElementsByClassName('fc-bai');
	// var ffs = document.getElementsByClassName('fcc');
	// for(var i=0;i<fv.length;i++){
	// 	fv[i].index=i;
	// 	fv[i].onclick=function(){
	// 		ff[0].style.display='block';
	// 		fb[0].style.display='block';
	// 		ffs[0].style.display='block';
	// 	}
	// }

	var cen = document.getElementsByClassName('center');
	var uu = document.getElementsByClassName('tuu');
	for(var k=0;k<cen.length;k++){
		cen[k].index=k;
		cen[k].onclick=function(){
			for(var j=0;j<uu.length;j++){
				uu[j].style.display = 'none';
			}
			uu[this.index].style.display = 'block';
		}
	}

	var jzh = document.getElementsByClassName('jzhi');
	var zii = document.getElementsByClassName('zhii');
	for(var i=0;i<jzh.length;i++){
		jzh[i].index=i;
		jzh[i].onclick=function(){
			for(var j=0;j<zii.length;j++){
				zii[j].style.display = 'none';
			}
			zii[this.index].style.display = 'block';
		}
	}

	var lin = document.getElementsByClassName('yilin');
	var yinn = document.getElementsByClassName('yinn');
	for(var i=0;i<lin.length;i++){
		lin[i].index=i;
		lin[i].onclick=function(){
			for(var j=0;j<yinn.length;j++){
				yinn[j].style.display = 'none';
			}
			yinn[this.index].style.display = 'block';
		}
	}

	var ang = document.getElementsByClassName('chuang');
	var cch = document.getElementsByClassName('cch');
	for(var i=0;i<ang.length;i++){
		ang[i].index=i;
		ang[i].onclick=function(){
			for(var j=0;j<cch.length;j++){
				cch[j].style.display = 'none';
			}
			cch[this.index].style.display = 'block';
		}
	}

}