$('a').click(function(e){
    e.preventDefault()
})

/* 접근성 글자크기 선택 */
const settingBtn = document.querySelector('.btn-setting')
const settingTools = document.querySelector('.setting-tools')
const zoomOutBtn = document.querySelector('.setting-tools button.zoom-out')
const zoomBasicBtn = document.querySelector('.setting-tools button.zoom-basic')
const zoomInBtn = document.querySelector('.setting-tools button.zoom-in')

settingBtn.addEventListener('click',function(){
    this.classList.toggle('active')
    settingTools.classList.toggle('active')
})
// 축소, 기본, 확대 버튼 클릭 이벤트
zoomOutBtn.addEventListener('click',function(){
    document.documentElement.classList.remove('zoom-in')
    document.documentElement.classList.add('zoom-out')
})
zoomBasicBtn.addEventListener('click',function(){
    document.documentElement.classList.remove('zoom-in')
    document.documentElement.classList.remove('zoom-out')
})
zoomInBtn.addEventListener('click',function(){
    document.documentElement.classList.remove('zoom-out')
    document.documentElement.classList.add('zoom-in')
})



// 뉴스이미지 랜덤 배치하기
function addRandomImages(containerSelector) {
    let newsEl = ``;
    const totalImg = 24;
    const images = [];

    // 이미지 인덱스를 배열에 저장
    for (let i = 0; i < totalImg; i++) {
        let imageIndex = (i + 1).toString().padStart(2, '0');
        images.push(`<li class="media-item">
                        <img src="./assets/images/news${imageIndex}.png" alt="news logo">
                    </li>`);
    }

    // 랜덤으로 이미지를 선택하여 추가
    for (let i = 0; i < totalImg; i++) {
        // 랜덤 인덱스 생성
        const randomIndex = Math.floor(Math.random() * images.length);

        // 랜덤 이미지 추가
        newsEl += images[randomIndex];

        // 이미 추가된 이미지는 배열에서 제거 (중복 방지)
        images.splice(randomIndex, 1);
    }

    // 지정된 컨테이너에 HTML 삽입
    $(containerSelector).html(newsEl);
}

addRandomImages('.sc-news .media-list1');
addRandomImages('.sc-news .media-list2');
addRandomImages('.sc-news .media-list3');


let mediaList = document.querySelectorAll('.sc-news .media-list')
let prevBtn = document.querySelector('.sc-news .group-control .prev')
let nextBtn = document.querySelector('.sc-news .group-control .next')

let idx = 0

$('.sc-news .total-num').text(mediaList.length)

prevBtn.addEventListener('click',function(){
    if(idx < 1) {
        idx = 0
    } else {
        idx--
    }
    mediaList.forEach((el) => {
        el.style.display = 'none';
    });
    mediaList[idx].style.display = 'grid'
    console.log(idx)
    $('.curr-num').text(idx + 1)
})
nextBtn.addEventListener('click',function(){
    if(idx >= mediaList.length-1) {
        idx=0
    }
    else{
        idx++
    }
    mediaList.forEach((el) => {
        el.style.display = 'none';
    });
    mediaList[idx].style.display = 'grid'
    console.log(idx)
    $('.sc-news .curr-num').text(idx + 1)
})

var swiper = new Swiper('.feedSwiper', {
    slidesPerView: 6,  // 한번에 보여지는 슬라이드 개수
    spaceBetween: 28,   // 슬라이드 간 간격
    navigation: {
        nextEl: '.group-feed .next',
        prevEl: '.group-feed .prev'
    },
    
    
});

const swiper2 = new Swiper('.issueSwiper', {
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    

});
const swiper3 = new Swiper('.adSwiper', {
    slidesPerView: 3,
    spaceBetween: 8, 
    loop: true,
    /* autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    }, */

    navigation: {
        nextEl: '.sc-shopping-view .next',
        prevEl: '.sc-shopping-view .prev'
    },
    

});
const swiper4 = new Swiper('.bannerSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },

    /* navigation: {
        nextEl: '.sc-shopping-view .next',
        prevEl: '.sc-shopping-view .prev'
    }, */
    

});

let idx2 = 0
$('.vibe-group .btn-refresh').click(function(){
    if(idx2 >= $('.vibe-list').length-1) {
        idx2 = 0
    }else {
        idx2++
    }
    console.log(idx2)
    $('.vibe-list').css('display', 'none');
    $('.vibe-list').eq(idx2).css('display','flex')

}) 

let idx3 = 2
$('.group-more-view').click(function(){
    $(this).siblings($(`.group-interest-contents[data-index="${idx3}"]`)).css('display','grid')
}) 


$('.group-category-tab').find('[role="tab"]').click(function(e) {
    tabName = $(this).attr('id')

    e.preventDefault();
    
    $('.group-category-tab').find('[role="tab"]').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');

    $(`[data-tab="${tabName}"]`).siblings(`[role="tabpanel"]`).css('display','none')
    $(`[data-tab="${tabName}"]`).css('display','block')

});