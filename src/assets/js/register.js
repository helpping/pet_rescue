$(function(){
    var obj = {
        bSubmit : true
    };
    //验证用户名
    $('[name="username"]').on('blur', function(e){
        if($(this).val() == ''){
            $('.username').html('用户名不能为空');
            obj.bSubmit = false;
        }else{
            $.get('http://127.0.0.1/pet_rescue_ci/welcome/check_reg', {
                username : $(this).val()
            }, function(data){
                if(data == 'yes'){
                    $('.username').html('用户名已存在');
                    obj.bSubmit = false;
                }else{
                    $('.username').html('');
                    obj.bSubmit = true;
                }
            }, 'text');
        }
    });
    //验证密码
    $('[name="pass1"]').on('keyup', function(e,param){
        if($(this).val().length < 4 ){
            $('.pass1').html('输入密码不得少于四位');
            param && (param.bSubmit = false);
        }else{
            $('.pass1').html('');
        }
    });

    $('[name="pass2"]').on('blur', function(e,param){
        if($(this).val().length != $('[name="pass1"]').val().length){
            $('.pass2').html('两次输入密码不一致');
            param && (param.bSubmit = false);
        }else{
            $('.pass2').html('');
        }
    });
    //邮箱验证
    $('[name="email"]').on('blur', function(e,param){
        if($(this).val().indexOf('@') == -1){
            $('.email').html('请输入正确邮箱');
            param && (param.bSubmit = false);
        }else{
            $('.email').html('');
        }
    });

    //提交验证
    $('#do-reg').on('submit', function(){
        $('[name="username"]').trigger('blur');
        $('[name="pass1"]').trigger('keyup', obj);
        $('[name="pass2"]').trigger('blur', obj);
        $('[name="email"]').trigger('blur', obj);

        $.post('http://127.0.0.1/pet_rescue_ci/welcome/do_reg', {
            username : $('[name="username"]').val(),
            password : $('[name="pass1"]').val(),
            email : $('[name="email"]').val()
        }, function(data){
            if(data == "success"){
                console.log('success');
            }
        }, 'text');






        console.log(obj.bSubmit);
        return true;
    });
























});
