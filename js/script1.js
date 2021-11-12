var animation1 = new TimelineMax();
                     animation1
                     .to('#slidetitle, #menu, #logo, #hamburgernav, #viewmore, #learnmore, #buttontitle',0.001,{
                        display:"none"
                    })
                     .to('#slidetitle',1,{
                        display:"block"
                    })
                    //  .to('#cutton1, #cutton2',3.5,{
                    //     width:"0"
                    // })
                     .to('#slidetitle',1,{
                        fontSize:"40px",
                        x:"-700px",
                        y:"-60px"
                    })
                     .to('#slidetitle, #menu, #logo, #hamburgernav, #viewmore, #learnmore, #buttontitle',0.5,{
                        display:"block"
                    });
                    

