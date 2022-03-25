$(function () {
    //////////////////////////////////////////////

    // $('csst선택자').on('이벤트',할일)
    //  $('.topbanner i').on('click', topbannerHandler);
    function topbannerHandler() {
        $('.topbanner').slideUp();
        곱하기(10, 20);
    }

    $('.topbanner i').on('click', topbannerHandler);
    /////////////////////////////////////////////////

    //***각각의 슬라이드 애니메이션  */
    $('.mainVisualSlide').on('init reInit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    //슬라이드  
    $('.mainVisualSlide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,

    });
    /////////////////////////////////////////////////
    // $('.mainVisualSlide figure').addClass('on');
    //전체 슬라이드에서 class를 떼고 지금 슬라이드에
    //class를 붙이는 일

    // $('.mainVisualSlide').on('afterChange', function () {
    //      console.log("체인지됐네!!!!!!!!")
    //  })

















});