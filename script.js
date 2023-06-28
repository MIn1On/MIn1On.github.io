const sliderImages = document.querySelectorAll('.SliderIMG'),
    sliderLine = document.querySelector('.SliderLine'),
    sliderDots = document.querySelectorAll('.SliderDot'),
    sliderBtnNext = document.querySelector('.SliderBtnNext'),
    sliderBtnPrev = document.querySelector('.SliderBtnPrev');

let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', nextSlide,);
sliderBtnPrev.addEventListener('click', prevSlide,);

function showSlide() {
    sliderWidth = document.querySelector('.BigSlider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;

    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
});




const designButton = document.querySelectorAll('.DesignButton');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

designButton.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});




const list = document.querySelector('.list'),
    items = document.querySelectorAll('.blocks__item')
    listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }

        switch (targetId) {
            case 'all':
                getItems('blocks__item')
                break
            case 'shooter':
                getItems(targetId)
                break
            case 'rpg':
                getItems(targetId)
                break
            case 'strategi':
                getItems(targetId)
                break
            case 'survival':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}





document.querySelectorAll('.menupoint').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;
        console.log(content)

        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});


