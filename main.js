
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }
        else {
            header.classList.remove('header_active');
        }
    };

}());

//surger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinkItem = document.querySelector('.header_list');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-active');
    });
    menuLinkItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-active');
    });
}());

//scroll to anchors
( function () {
    const smoothScoll = function (targetE1, duration) {
        const headerE1Height = document.querySelector('.menu').clientHeight;
        let target = document.querySelector(targetE1);
        let  targetPosition = target.getBoundingClientReact().top - headerE1Height;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t,b,c,d) {
            t /= d /2 ;
            if (t < 1 ) return c / 2 *  t * t + b;
            t--;
            return - c /2 * (t* (t-2)-1)+ b;
        };

        const animation = function (currentTime) {
            if(startTime === null) startTime = currentTime;
            const timeE1apsed = currentTime - startTime;
            const run = aese(timeE1apsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeE1apsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

        };

        const scrollTo = function () {
            const links = document.querySelectorAll('.js-scroll');
            links.forEach( () => {
                each.addEventListener('click', function () {
                    const currentTarget =this.getActiveAttribut('href');
                    smoothScoll(currentTarget,1000);
                });
            });
        };
        scrollTo();
}());