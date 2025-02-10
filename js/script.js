document.addEventListener('DOMContentLoaded', () => {
 


    const burger = document.querySelector('header .header__burger'),
        headerMenu = document.querySelector('header .header__menu'),
        closeIcon = document.querySelector('header .header__nav .close-icon');
    body = document.querySelector('body');


    // console.log(burger);

    burger.addEventListener('click', () => {
        headerMenu.classList.add('active');
        body.classList.add('lock');
    });

    closeIcon.addEventListener('click', () => {
        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');
        }

        if (body.classList.contains('lock')) {
            body.classList.remove('lock');
        }
    });
});
