// JavaScript Document

var currentImage;
var currentIndex = -1;
var interval;
function showImage(index) {
    if (index < $('#banner-big img').length) {
        var indexImage = $('#banner-big img')[index]
        if (currentImage) {
            if (currentImage != indexImage) {
                $(currentImage).css('z-index', 2);
                clearTimeout(myTimer);
                $(currentImage).fadeOut(250, function () {
                    myTimer = setTimeout("showNext()", 2000);
                    $(this).css({ 'display': 'none', 'z-index': 1 })
                });
            }
        }
        $(indexImage).css({ 'display': 'block', 'opacity': 1 });
        currentImage = indexImage;
        currentIndex = index;
        $('#banner-small li').removeClass('active');
        $($('#banner-small li')[index]).addClass('active');
    }
}

function showNext() {
    var len = $('#banner-big img').length;
    var next = currentIndex < (len - 1) ? currentIndex + 1 : 0;
    showImage(next);
}

var myTimer;

$(document).ready(function () {
    myTimer = setTimeout("showNext()", 2000);
    showNext(); //loads first image
    $('#banner-small li').bind('click', function (e) {
        var count = $(this).attr('rel');
        showImage(parseInt(count) - 1);
    });
});

var currentPage = 1 ;
		var maxNumber = 10;
		
		$(function(){
			var total = $('#divPage a').length;
			var max = currentPage + maxNumber - 1;
			$('#divPage a').each(function(){
				var current = $(this).text();
				if(current < currentPage || current > max){
					$(this).hide();
				}else if(current == currentPage){
					$(this).removeClass('pager').addClass('pager-active');
				}
			});
	        $('#spPrev a').attr('href', currentPage == 1 ? 'javascript: void(0)' : 'index' + (currentPage - 1) + '.html' );
	        $('#spNext a').attr('href', currentPage == total ? 'javascript: void(0)' : 'index' + (currentPage + 1) + '.html' );
		});
		
  function fnTaoComboBox(id, ten, min, max) {
            var form = document.getElementById("comboZone");
            var tieude = document.createElement("label");
            tieude.innerHTML = ten;
            tieude.style.width = "50px";
            tieude.style.textAlign = "right";
            form.appendChild(tieude);
            //document.writeln("ten");
            var select = document.createElement("select");
            select.id = id;
            form.appendChild(select);
            var def = document.createElement("option");
            def.setAttribute("checked", "true");
            select.appendChild(def);
            for (var i = min; i <= max; i++) {
                var opt = document.createElement("option");
                opt.value = i;
                opt.innerHTML = i;
                select.appendChild(opt);
            }
        }

        function fnValidate() {
            if (document.getElementById("txtHo").value.length == 0)
                document.getElementById("errHo").innerHTML = "Vui lòng nhập họ";
            else document.getElementById("errHo").innerHTML = "";

            if (document.getElementById("txtTen").value.length == 0)
                document.getElementById("errTen").innerHTML = "Vui lòng nhập tên";
            else document.getElementById("errTen").innerHTML = "";
			
 			if (document.getElementById("user").value.length == 0)
                document.getElementById("erruser").innerHTML = "Vui lòng nhập tên đăng nhập";
            else document.getElementById("erruser").innerHTML = "";
			
			if (document.getElementById("pass1").value.length == 0)
                document.getElementById("errpass1").innerHTML = "Vui lòng nhập mật khẩu";
            else document.getElementById("errpass1").innerHTML = "";
			
			if (document.getElementById("pass2").value.length == 0)
                document.getElementById("errpass2").innerHTML = "Vui lòng nhập lại mật khẩu";
			else document.getElementById("errpass2").innerHTML = "";

			if (document.getElementById("datepicker").value.length == 0)
			    document.getElementById("errdatepicker").innerHTML = "Vui lòng nhập ngày sinh";
			else document.getElementById("errdatepicker").innerHTML = "";
		
			
            var phone = document.getElementById("txtDienThoai");
            if (phone.value.length == 0) document.getElementById("errDienThoai").innerHTML = "Vui lòng nhập số điện thoại";
            else if (isNaN(phone.value)) document.getElementById("errDienThoai").innerHTML = "Vui lòng nhập số";
            else document.getElementById("errDienThoai").innerHTML = "";

            return false;
        }
		
        $(function () {
            $("#datepicker").datepicker({

            });
        });