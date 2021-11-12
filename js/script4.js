var controller3 = new ScrollMagic.Controller();
var animation3 = new TimelineMax();
                 animation3
                 .to('#event',1,{height:'100vh'})
                 .to('.item',1,{x:'-100%'})
                 .to('.item',1,{x:'-200%'})
                 
                 
                 

var scene3 = new ScrollMagic.Scene({
    triggerElement: '#event',
    triggerHook: 0,
    duration: '1200'
})
.setPin('#event', {pushFollowers: true})
.setTween(animation3)
.addTo(controller3)
// .addIndicators();

                
                 
