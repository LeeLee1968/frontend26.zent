$(document).ready(function() {
    $("#example-advanced-form").validate({
        rules: {
            userName: "required",
            password: {
                required: true,
                minlength: 5
            },
            confirm:{
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            name: "required",
            surname: "required",
            email: {
                required: true,
                email: true
            },
            address: "required",
            acceptTerms: "required",
        },
        messages: {
            userName: "Tên người dùng không được bỏ trống",
            password: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Nhập ít nhất 5 kí tự"
            },
            confirm:{
                required: "Vui lòng nhập mật khẩu",
                minlength: "Nhập ít nhất 5 kí tự",
                equalTo: "Mật khẩu không trùng"
            },
            name: "Vui lòng nhập họ",
            surname: "Vui lòng nhập tên",
            email: "Vui lòng nhập email",
            address: "Vui lòng nhập địa chỉ",
            acceptTerms: "Vui lòng đồng ý các điều khoản"
        }
    })
    var current,next,previous;
    var left,opacity,scale;
    var animating;

    $('.next').click(function(){
        if(animating) return false
            animating = true;
        current = $(this).parent();
        next = $(this).parent().next();

        $("#progressbar li").eq($("#example-advanced-form fieldset").index(next)).addClass("active");
        next.show();
        current.animate({opacity:0},{
            step:function(now,fx){
                scale = 1 - (1- now)*0.2;
                left = (now* 50)+ "%";
                opacity = 1 - now;
                current.css({'transform':'scale('+scale+')'});
                next.css({'left':left,'opacity':opacity});
            },
            duration:800,
            complete:function(){
                current.hide();
                animating = false;
            },
        });

    });

    $('.previous').click(function(){
        if(animating) return false
            animating = true; 
        current = $(this).parent();
        previous = $(this).parent().prev();

        $('#progressbar li').eq($("#example-advanced-form fieldset").index(current)).removeClass("active");
        previous.show();
        current.animate({opacity: 0}, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1-now) * 50)+"%";
                opacity = 1 - now;
                current.css({'left': left});
                previous.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current.hide();
                animating = false;
            },
        });
    });
    $('.submit').click(function(){
        alert('Successful!');
        show();
        return false;
    });
})

