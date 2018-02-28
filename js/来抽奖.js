onload=function(){
	$(".btn1").on("click",function(){
		$("header").css("display","none");
		$(".kuang2").css("display","block");
	});

	function jgg(n){
	var i = 0;//索引
	var j = 32;//基础步数	
	var z = j+n;//总步数；
	var speed = 100;
	start();
	function start(){
		jgg.timer = setInterval(function(){
			i++;
			z--;
			if(i==8){
				speed*=1.2;
				clearInterval(jgg.timer);
				i=0;
				start();
			}
			if(z==3){
				speed = 600;
				clearInterval(jgg.timer);
				start();
			}
			$(".k2d2 li ").eq(i).css("border","solid 0.2em blue");
			$(".k2d2 li ").eq(i).siblings("li").css("border","solid 0.2em wheat");
			if(z==0){
				clearInterval(jgg.timer);
				$(".zhe").hide();
				switch (n){
					case 0:
						$("#zhong").show();
						$(".image").src="img/sudoku_01.jpg";
						$(".p2").html("黄封存人参酒");
						$(".p3").html("120元");
						break;
						case 1:
						$("#zhong").show();
						$(".image").src="img/sudoku_02.jpg";
						$(".p2").html("莱沃口腔储值卡");
						$(".p3").html("200元");
						break;
						case 2:
						$("#zhong").show();
						$(".image").src="img/sudoku_03.jpg";
						$(".p2").html("中国联通流量卡");
						$(".p3").html("50元");
						break;
						case 3:
						$("#zhong").show();
						$(".image").src="img/sudoku_04.jpg";
						$(".p2").html("s5健身俱乐部贵宾卡");
						$(".p3").html("100元");
						break;
						case 4:
						$("#zhong").show();
						$(".image").src="img/sudoku_06.jpg";
						$(".p2").html("圣亚瑜伽SPA会所储值卡");
						$(".p3").html("2000元");
						break;
						case 5:
						$("#zhong").show();
						$(".image").src="img/sudoku_07.jpg";
						$(".p2").html("淘金二胡工作室");
						$(".p3").html("300元");
						break;
						case 6:
						$("#zhong").show();
						$(".image").src="img/sudoku_08.jpg";
						$(".p2").html("蛋壳科技VR体验卡");
						$(".p3").html("120元");
						break;
						case 7:
						$("#zhong").hide();
						break;
						
				}
			}
		},speed)
	}
}
	$("#s7").on("click",function(){
		$("#zhong").hide();
	})
	
	var arr = [0,7,7,1,7,7,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];
	var i=3;
	$(".btn2").on("click",function(){
//		console.log(arr.length);
		$(".zhe").show();
		var a = parseInt(Math.random()*27);
		jgg(arr[a]);
		i--;
		if (i<1) {
			alert("机会只有一次");
			$(".btn2").off();
		}
		$("#s6").html(i);
	});
	$(".btn4").on("click",function(){
		console.log("1")
		$("#guize").css("display","block");
	});
	
	$(".btn5").on("click",function(){
		$("#guize").css("display","none");
	});
	$(".btn3").on("click",function(){
		$("#jiangpin").css("display","block");
	})
	$("#inp1").on("blur",function(){
		if ($("#inp1").val().length==0) {
		$("#s1").html("姓名不能为空");
	}else{
		$("#s1").html("");
	}
	});
	$("#inp2").on("blur",function(){
		if ($("#inp2").val().length==0) {
		$("#s2").html("手机号不能为空");
	}else if ($("#inp2").val().length==11) {
		$("#s2").html("");
	}else{
		$("#s2").html("手机号格式不对");
	}
	});
	$("#s3").on("click",function(){
		if ($("#s1").html("")&&$("#s2").html("")&&$("#inp2").val().length!=0&&$("#inp2").val().length==11){
			$(".kuang2").css("display","none");
			$("#jiangpin").css("display","none");
			$(".kuang3").css("display","block");
		}
	});
	$("#s4").on("click",function(){
		$("#jiangpin").css("display","none");
		$(".kuang2").css("display","block");
	});
	$("#s5").on("click",function(){
		$(".kuang3").css("display","none");
		$(".kuang2").css("display","block")
	})
//	var m=$(".p1").length;
//	$(".p1").eq(m).on("click",function(){
//		$(".dui").show();
//		$("#s8").on("click",function(){
//			if ($(".p4").val()=="1234"){
//				console.log("2")
//			$(".p1").eq(j).html("已兑奖");
//			alert("兑奖失败没货了")
//		}else{
//			$(".p4").html("密码不正确");
//		}
//		})
//	})
		$("#p1").on("click",function(){
		$(".dui").show();
		$("#s8").on("click",function(){
			console.log("1")
			if ($("#inp3").val()==1234){
				console.log("2")
			$(".p4").html("");
			$(".dui").hide();
			$("#p1").html("已兑奖");
			alert("兑奖失败没货了")
		}else{
			$(".p4").html("密码不正确");
			$("#inp3").val("")
		}
		})
		$("#s9").on("click",function(){
			$("#inp3").val("")
			$(".dui").hide();
		})
	})
		$("#p2").on("click",function(){
		$(".dui").show();
		$("#s8").on("click",function(){
			console.log("1")
			if ($("#inp3").val()==1234){
				console.log("2")
			$(".p4").html("");
			$(".dui").hide();
			$("#p2").html("已兑奖");
			alert("兑奖失败没货了")
		}else{
			$(".p4").html("密码不正确");
			$("#inp3").val("")
		}
		})
		$("#s9").on("click",function(){
			$("#inp3").val("")
			$(".dui").hide();
		})
	})
		$("#p3").on("click",function(){
		$(".dui").show();
		$("#s8").on("click",function(){
			console.log("1")
			if ($("#inp3").val()==1234){
				console.log("2")
			$(".p4").html("");
			$(".dui").hide();
			$("#p3").html("已兑奖");
			alert("兑奖失败没货了")
		}else{
			$(".p4").html("密码不正确");
			$("#inp3").val("")
		}
		})
		$("#s9").on("click",function(){
			$("#inp3").val("")
			$(".dui").hide();
			
		})
	})
	
}
