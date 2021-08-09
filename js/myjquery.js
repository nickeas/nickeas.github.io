
$(function () {
    //ロード時にフェードインh1
    $('h1').hide().fadeIn(3500);

    //ハンバーガーボタン用
    //ハンバーガーを開いてｘ以外を押しても閉じる。
    $('.humBtn, .navmenu, .backArea, .menu').on('click', function () {
        $('.navmenu').toggleClass('open');//navemenuクラスにopenクラスをつけ外し
        $('.humLine').toggleClass('open');//humLineクラスにopenクラスをつけ外し
        $('.backArea').toggleClass('open');//backAreaクラスにopenクラスをつけ外し
        
    });

    $('.scrolling').on('click', function () {
        //幅1024px以下のときはopenクラスのつけ外し
        var width = $(window).width();
        if (width <= 1024){
            $('.navmenu').toggleClass('open');//navemenuクラスにopenクラスをつけ外し
            $('.humLine').toggleClass('open');//humLineクラスにopenクラスをつけ外し
            $('.backArea').toggleClass('open');//backAreaクラスにopenクラスをつけ外し
        }   
    });


    //スムーススクロール用
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-80;
        var duration = 500;
        $("html, body").animate({
        scrollTop: position
        }, duration, "swing");
        return false;
    });

    //スクロールしたときの処理
    $(window).on('load scroll',function (){
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        
        //スクロールでnavの背景を白くする
        if (0 < scroll){
            $('.navset').addClass('change-color');
        } else {
            $('.navset').removeClass('change-color');
        }

        //フェードイン services works
        $('.fade').each(function(){
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //windowの下がちょうど対象の要素に差し掛かったときにfadeIn
            if (scroll > target - height){
                    $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });

        //topに戻るボタン表示
        $('.fadeBtn').each(function(){
            //ターゲットの位置を取得
            var posServ = $("#services").offset().top;
            //windowの下がちょうど対象の要素に差し掛かったときにfadeIn
            if (scroll > posServ - height){
                $(this).addClass('activeBtn');
            }else{
                $(this).removeClass('activeBtn');
            }
        });

        
    });


    //スクロールでnavの背景を白くする
    $(window).on('scroll', function () {
        if (0 < $(this).scrollTop()) {
            $('.navset').addClass('change-color');
        } else {
            $('.navset').removeClass('change-color');
        }
    });

});

