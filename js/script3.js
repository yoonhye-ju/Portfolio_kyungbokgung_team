var slider1 = document.querySelector('#slider')
var video =  slider.querySelector('video')

var controller = new ScrollMagic.Controller();
var animation2 = new TweenMax.from('#header',1, {
    position:"fixed"
})
var scene = new ScrollMagic.Scene({
    duration: 3500,
    triggerElement: slider,
    triggerHook: 0
})
// .addIndicators()
.setPin(slider1)
.setTween(animation2)
.addTo(controller)
// .addIndicators();

var accelamount = 0.1;
var scrollpos = 0;
var delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos/700;
})

setInterval(() => {
    video.currentTime = scrollpos;
}, 5);