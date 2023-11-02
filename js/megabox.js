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
        // 현재 활성화된 슬라이드의 인덱스
        var currentSlide = 0;

        // 전체 슬라이드 개수를 저장하는 변수
        var numSlides = $(".slide-container li.box").length;

        // 프로그레스 바 요소를 선택하는 변수
        var progressBar = $(".progress-bar");

        // 슬라이드 초기화 함수
        function initSlides() {
            // 모든 슬라이드의 'active' 클래스를 제거하고 숨김
            $(".slide-container li.box").removeClass("active").hide();
            // 현재 활성화된 슬라이드에 'active' 클래스를 추가하고 표시
            $(".slide-container li.box").eq(currentSlide).addClass("active").show();
        }
        // 프로그레스 바 업데이트 함수
        function updateProgressBar() {
            // 슬라이드 진행 상황을 계산하고 프로그레스 바의 너비를 업데이트
            var progress = (currentSlide / (numSlides - 1)) * 100 + "%";

            // 프로그레스 바의 너비 업데이트
            progressBar.css("width", progress);
        }

        initSlides(); // 초기 슬라이드 설정
        updateProgressBar();

        // "prev" 버튼 클릭 시
        $("#prev").click(function () {
            if (currentSlide > 0) { // 현재의 슬라이드 인덱스 currentSlide가 0보다 큰지 확인 - 첫 번째 슬라이드가 아닌 경우에만 다음 동작을 수행
                currentSlide--; // 현재 슬라이드 인덱스를 1만큼 감소시킴
                initSlides(); // 슬라이드 업데이트
                updateProgressBar(); // 프로그레스 업데이트
            }
        });

        // "next" 버튼 클릭 시
        $("#next").click(function () {
            if (currentSlide < numSlides - 1) {
                // 현재의 슬라이드 인덱스 currentSlide가 슬라이드의 총 개수 numSlides보다 작은지 확인 - 마지막 슬라이드가 아닌 경우에만 다음 동작을 수행하도록 하는 조건
                currentSlide++; // currentSlide++;는 현재 슬라이드 인덱스를 1만큼 증가시킴 
                initSlides(); // 슬라이드 업데이트
                updateProgressBar(); // 프로그레스 업데이트
            }
        });
    });


});