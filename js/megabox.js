$(function () {
    $(".add > span").on("click", function () {
        $(".add").stop().slideUp(0);
    });

    $("footer > .inner > .findC").on("click", function () {
        $(".FFind").fadeIn(0);
    });
    $(".close").on("click", function () {
        $(".FFind").fadeOut(0);
    });

    $(".nt").on('mouseover', function () {
        $(".headerBG").fadeIn(0);
    });
    $(".nt").on('mouseleave', function () {
        $(".headerBG").fadeOut(0);
    });



    // ============  slide 

    $(function () {
        var currentSlide = 0;
        var numSlides = $(".slide-container li.box").length;
        var progressBar = $(".progress-bar");

        // 슬라이드 초기화 함수
        function initSlides() {
            $(".slide-container li.box").removeClass("active").hide();
            $(".slide-container li.box").eq(currentSlide).addClass("active").show();
        }
        // 프로그레스 바 업데이트 함수
        function updateProgressBar() {
            var progress = (currentSlide / (numSlides - 1)) * 100 + "%";

            progressBar.css("width", progress);
        }

        initSlides(); // 초기 슬라이드 설정
        updateProgressBar();

        // "prev" 버튼 클릭 시
        $("#prev").click(function () {
            if (currentSlide > 0) {
                currentSlide--;
                initSlides();
                updateProgressBar();
            }
        });

        // "next" 버튼 클릭 시
        $("#next").click(function () {
            if (currentSlide < numSlides - 1) {
                currentSlide++;
                initSlides();
                updateProgressBar();
            }
        });
    });

    // 팝업 슬라이드
    var x = 0
    setInterval(function(){
        if (x < 4){
            x++
        } else {
            x = 0
        } slidePosition = x * (-480) + "px"
        $('.slidelist').animate({left:slidePosition},400);
    },3000);

    $('.popupClose').on("click",function(){
        $(".PopupAdd").hide();
    });




});