const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    duration: 600,
    interval: 4000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);