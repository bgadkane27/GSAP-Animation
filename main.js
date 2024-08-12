gsap.to("#page1 #box1",{
    x:617,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true,
    repeatDelay:0.1
})

gsap.to("#page3 #box3",{
    x:-610,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true,
    repeatDelay:0.1
})

gsap.from("#page2 h2",{
    x:1000,
    duration:2,
    // color: "blue", 
    // ease:'elastic.out',
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end:"top 90%",
        x:200,        
    }
})

