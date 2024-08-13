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
    // x:1000,
    transform:'translateX(150%)',
    duration:2,
    // color: "blue", 
    // ease:'elastic.out',
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end:"bottom -20%",        
    }
})

// function breakTheText(){
//     var head=document.querySelector('#head')
//     var text=head.textContent
//     var spiltedText=text.split("")

//     var length=spiltedText.length/2
    
//     var clutter=""
//     spiltedText.forEach(function(elem){
//         clutter += `<span>${elem}</span>`
//     })
    
//     head.innerHTML=clutter
// }

// breakTheText()

// gsap.from('h2 span', {
//     y:150,
//     opacity: 0,
//     duration:1,
//     delay:0.6,
//     stagger:0.3,
//     repeat:-1,
//     repeatDelay:0.2
// })


function breakTheText(){
    var head=document.querySelector('#head')
    var text=head.textContent
    var spiltedText=text.split("")
    var length=spiltedText.length/2
    
    var clutter=""
    spiltedText.forEach(function(elem, id){
        if(id<length){
            clutter += `<span class="start">${elem}</span>`
        }
        else{
            clutter += `<span class="end">${elem}</span>`
        }
        
    })
    
    head.innerHTML=clutter
}

breakTheText()

gsap.from('.start', {
    y:150,
    opacity: 0,
    duration:1,
    delay:0.6,
    stagger:0.3,
    repeat:-1,
    repeatDelay:0.2
})


gsap.from('.end', {
    y:150,
    opacity: 0,
    duration:1,
    delay:0.9,
    stagger:-0.3,
    repeat:-1,
    repeatDelay:0.2
})

