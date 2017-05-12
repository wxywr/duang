$(function(){
	$('.round li').eq(0).css('background','#3d3b37').siblings().css('background','#c9c9c9');
	$('.hots p').eq(0).css('color','#cc0100').siblings().css('color','#333');
	// $('.seven .lei').eq(0).css('color','#cc0100').siblings().css('color','#333');
	// $('.fc .fc-two').eq(0).css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'}).siblings().css({'color':'#333','fontWeight':'normal','border':'none'});
	$('.fcc div').eq(0).css('color','#cc0100').siblings().css('color','#333');
	$('.fc-three').eq(0).css('color','#cc0100').siblings().css('color','#333');
	$('.jzhi').eq(0).css('color','#cc0100').siblings().css('color','#333');
	$('.yilin').eq(0).css('color','#cc0100').siblings().css('color','#333');
	$('.chuang').eq(0).css('color','#cc0100').siblings().css('color','#333');
	// $('.djfc-list .lists').eq(0).css('color','#cc0100').siblings().css('color','#333');
	$('.mapp').eq(0).css('color','#cc0100').siblings().css('color','#333');
	var n=0;
	$('.fc-three').click(function(){
		var index = $(this).index();
		n=index;
		tab();
	})
	function tab(){
		$('.fc-three').eq(n).css('color','#cc0100').siblings().css('color','#333');
		$('.pic .picture').eq(n).css('display','block').siblings().css('display','none');
	}

	var m=0;
	$('.fc-two').click(function(){
		var index = $(this).index();
		m=index;
		tabs();
	})
	function tabs(){
		$('.fc-two').eq(m).css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'}).siblings().css({'color':'#333','fontWeight':'normal','border':'none'});
		$('.fc-bai .four').eq(m).css('display','block').siblings().css('display','none');
	}

	var s=0;
	$('.seven .lei').click(function(){
		var index = $(this).index();
		s=index;
		tabss();
	})
	function tabss(){
		$('.seven .lei').eq(s).css('color','#cc0100').siblings().css('color','#333');
		$('.read-s .container').eq(s).css('display','block').siblings().css('display','none');
	}

	var y=0;
	$('.jzhi').click(function(){
		var index = $(this).index();
		y=index;
		tabsss();
	})
	function tabsss(){
		$('.jzhi').eq(y).css('color','#cc0100').siblings().css('color','#333');
		$('.wu').eq(y).css('display','block').siblings().css('display','none');
	}

	var z=0;
	$('.yilin').click(function(){
		var index = $(this).index();
		z=index;
		tabssss();
	})
	function tabssss(){
		$('.yilin').eq(z).css('color','#cc0100').siblings().css('color','#333');
		$('.ling').eq(z).css('display','block').siblings().css('display','none');
	}

	var p=0;
	$('.chuang').click(function(){
		var index = $(this).index();
		p=index;
		tabssssa();
	})
	function tabssssa(){
		$('.chuang').eq(p).css('color','#cc0100').siblings().css('color','#333');
		$('.nine').eq(p).css('display','block').siblings().css('display','none');
	}

	$('.mapp').click(function(){
		var index = $(this).index();
		$('.mapp').eq(index).css('color','#cc0100').siblings().css('color','#333');
	})

	var w=0;
	$('.djfc-list .lists').click(function(){
		var index = $(this).index();
		w=index;
		tabssssaa();
	})
	function tabssssaa(){
		$('.djfc-list .lists').eq(w).css('color','#cc0100').siblings().css('color','#333');
		$('.keji .kejis').eq(w).css('display','block').siblings().css('display','none');
	}
	
	// -----------党建地图--------
	$(".map-list .list-a .lun li").eq(0).css('backgroundColor','#333');
	$(".map-list .list-b .lun li").eq(0).css('backgroundColor','#333');
	var r=0;
	$(".map-list .list-a .lun li").click(function(){
		var index=$(this).index();
		 	r=index;
			lunbo();
	})
	function lunbo(){
		$(".map-list .list-a .lun li").eq(r).css('backgroundColor','#333');
		$(".map-list .list-a .lun li").eq(r).siblings().css('backgroundColor','#ccc');
		$('.map-list .list-a .lun .img img').eq(r).show();
		$('.map-list .list-a .lun .img img').eq(r).siblings().hide();
	}

	$(".map-list .list-a .lun .left").click(function(){
		r--;
		lunbo();
		if(r<=0){
			r=2;
		}
	})
	$(".map-list .list-a .lun .right").click(function(){
		r++;
		lunbo();
		if(r>=1){
			r=-1;
		}
	})

	var rr=0;
	$(".map-list .list-b .lun li").click(function(){
		var index=$(this).index();
		 	rr=index;
			lunboo();
	})
	function lunboo(){
		$(".map-list .list-b .lun li").eq(rr).css('backgroundColor','#333');
		$(".map-list .list-b .lun li").eq(rr).siblings().css('backgroundColor','#ccc');
		$('.map-list .list-b .lun .img img').eq(rr).show();
		$('.map-list .list-b .lun .img img').eq(rr).siblings().hide();
	}

	$(".map-list .list-b .lun .left").click(function(){
		rr--;
		lunboo();
		if(rr<=0){
			rr=2;
		}
	})
	$(".map-list .list-b .lun .right").click(function(){
		rr++;
		lunboo();
		if(rr>=1){
			rr=-1;
		}
	})

	// 党建服务
	$('.feng .feng-a').click(function(){
		$('.keji').css('display','block');
		$('.djfc-list').css('display','block');
		$('.djfc-a').css({'color':'#cc0100'});
	})
	$('.feng .feng-b').click(function(){
		$('.keji').css('display','block');
		$('.djfc-list').css('display','block');
		$('.djfc-b').css({'color':'#cc0100'});
		$('.keji .b').css('display','block').siblings().css('display','none');
	})
	$('.feng .feng-c').click(function(){
		$('.keji').css('display','block');
		$('.djfc-list').css('display','block');
		$('.djfc-c').css({'color':'#cc0100'});
		$('.keji .c').css('display','block').siblings().css('display','none');
	})
	$('.feng .feng-d').click(function(){
		$('.keji').css('display','block');
		$('.djfc-list').css('display','block');
		$('.djfc-d').css({'color':'#cc0100'});
		$('.keji .d').css('display','block').siblings().css('display','none');
	})

	// 党建风采
	$('.five .five-a').click(function(){
		$('.fc').css('display','block');
		$('.fc-bai').css('display','block');
		$('.fc .ge').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
	})
	$('.five .five-b').click(function(){
		$('.fc').css('display','block');
		$('.fc .he').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
		$('.fc-bai').css('display','block');
		$('.fc-bai .fuse').css('display','block').siblings().css('display','none');
		
	})
	$('.five .five-c').click(function(){
		$('.fc').css('display','block');
		$('.fc .yy').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
		$('.fc-bai').css('display','block');
		$('.fc-bai .guide').css('display','block').siblings().css('display','none');
		
	})
	$('.five .five-d').click(function(){
		$('.fc').css('display','block');
		$('.fc .li').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
		$('.fc-bai').css('display','block');
		$('.fc-bai .vitality').css('display','block').siblings().css('display','none');
		
	})

	// 互联网党建地图点击放大
	$('.map-hot .a').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-a').css('display','block').siblings().css('display','none');
	})
	$('#map-al .cha').click(function(){
		$('#map-al').css('display','none');
	})

	$('.map-hot .b').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-b').css('display','block').siblings().css('display','none');
	})

	$('.map-hot .c').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-c').css('display','block').siblings().css('display','none');
	})

	$('.map-hot .d').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-d').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .e').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-e').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .f').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-f').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .g').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-g').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .h').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-h').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .i').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-i').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .j').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-j').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .k').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-k').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .l').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-l').css('display','block').siblings().css('display','none');
	})
	$('.map-hot .m').click(function(){
	 	$('#map-al').css('display','block');
	 	$('.map-jpg .big-m').css('display','block').siblings().css('display','none');
	})

	// 五角场党建地图点击放大
	$('.map-wu .a').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-a').css('display','block').siblings().css('display','none');
	})
	$('#map-all .cha').click(function(){
		$('#map-all').css('display','none');
	})
	$('.map-wu .b').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-b').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .c').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-c').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .d').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-d').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .e').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-e').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .f').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-f').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .g').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-g').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .h').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-h').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .i').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-i').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .j').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-j').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .k').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-k').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .l').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-l').css('display','block').siblings().css('display','none');
	})
	$('.map-wu .m').click(function(){
	 	$('#map-all').css('display','block');
	 	$('.map-jpgs .big-m').css('display','block').siblings().css('display','none');
	})

	$('.bg-img div').click(function(){
		$(this).css('border','3px solid red ').siblings().css('border','none');
	})

	$('.tan .close-img').click(function(){
		$('.tan').css('display','none');
	})

	// 小人
	// $('.view .one').click(function(){
	// 	$('.view .people').animate({left:'200px'},1500);
	// })
	// $('.view .two').click(function(){
	// 	$('.view .people').animate({left:'830px'},1500);
	// })
	// $('.view .three').click(function(){
	// 	$('.view .people').animate({left:'1450px'},1500);
	// })
	$('.view .yi').click(function(){
		$('.view .people').animate({left:'200px'},2000);
		$('.view .one').css({'color':'#0199FD'}).siblings().css('color','#333');
	})
	$('.view .tu').click(function(){
		$('.view .people').animate({left:'830px'},2000);
		$('.view .two').css({'color':'#0199FD'}).siblings().css('color','#333');
	})
	$('.view .sa').click(function(){
		$('.view .people').animate({left:'1450px'},2000);
		$('.view .three').css({'color':'#0199FD'}).siblings().css('color','#333');
	})
	
	//创智坊社区睦邻中心
	//----------1F
	$('.floor-aa').click(function(){
		$('.tan').css('display','block');
		$('.see-j').css('display','block').siblings().css('display','none');
	})
	$('.floor-ab').click(function(){
		$('.tan').css('display','block');
		$('.see-i').css('display','block').siblings().css('display','none');
	})
	$('.floor-ac').click(function(){
		$('.tan').css('display','block');
		$('.see-k').css('display','block').siblings().css('display','none');
	})
	$('.floor-ad').click(function(){
		$('.tan').css('display','block');
		$('.see-b').css('display','block').siblings().css('display','none');
	})
	$('.floor-ae').click(function(){
		$('.tan').css('display','block');
		$('.see-d').css('display','block').siblings().css('display','none');
	})
	//----------2F
	$('.floor-ba').click(function(){
		$('.tan').css('display','block');
		$('.see-c').css('display','block').siblings().css('display','none');
	})
	$('.floor-bb').click(function(){
		$('.tan').css('display','block');
		$('.see-e').css('display','block').siblings().css('display','none');
	})
	$('.floor-bc').click(function(){
		$('.tan').css('display','block');
		$('.see-p').css('display','block').siblings().css('display','none');
	})
	// $('.floor-bd').click(function(){
	// 	$('.tan').css('display','block');
	// 	$('.see-p').css('display','block').siblings().css('display','none');
	// })
	$('.floor-be').click(function(){
		$('.tan').css('display','block');
		$('.see-a').css('display','block').siblings().css('display','none');
	})
	// $('.floor-bf').click(function(){
	// 	$('.tan').css('display','block');
	// 	$('.see-f').css('display','block').siblings().css('display','none');
	// })
	$('.floor-bg').click(function(){
		$('.tan').css('display','block');
		$('.see-f').css('display','block').siblings().css('display','none');
	})
	//----------3F
	$('.floor-ca').click(function(){
		$('.tan').css('display','block');
		$('.see-n').css('display','block').siblings().css('display','none');
	})
	$('.floor-cb').click(function(){
		$('.tan').css('display','block');
		$('.see-o').css('display','block').siblings().css('display','none');
	})
	$('.floor-cc').click(function(){
		$('.tan').css('display','block');
		$('.see-g').css('display','block').siblings().css('display','none');
	})
	$('.floor-cd').click(function(){
		$('.tan').css('display','block');
		$('.see-h').css('display','block').siblings().css('display','none');
	})
	$('.floor-ce').click(function(){
		$('.tan').css('display','block');
		$('.see-m').css('display','block').siblings().css('display','none');
	})

	// 我爱阅读
	$('.read .slide-a').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-a').css('display','block').siblings().css('display','none');
		$('.seven .lei-a').css({'color':'#cc0100'});
	})
	$('.read .slide-b').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-b').css('display','block').siblings().css('display','none');
		$('.seven .lei-b').css({'color':'#cc0100'});
	})
	$('.read .slide-c').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-c').css('display','block').siblings().css('display','none');
		$('.seven .lei-c').css({'color':'#cc0100'});
	})
	$('.read .slide-d').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-d').css('display','block').siblings().css('display','none');
		$('.seven .lei-d').css({'color':'#cc0100'});
	})
	$('.read .slide-e').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-e').css('display','block').siblings().css('display','none');
		$('.seven .lei-e').css({'color':'#cc0100'});
	})
	$('.read .slide-f').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-f').css('display','block').siblings().css('display','none');
		$('.seven .lei-f').css({'color':'#cc0100'});
	})
	$('.read .slide-g').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-g').css('display','block').siblings().css('display','none');
		$('.seven .lei-g').css({'color':'#cc0100'});
	})
	$('.read .slide-h').click(function(){
		$('.read-s').css('display','block');
		$('.seven').css('display','block');
		$('.read-s .du-h').css('display','block').siblings().css('display','none');
		$('.seven .lei-h').css({'color':'#cc0100'});
	})
});

