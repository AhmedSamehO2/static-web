let aboutOffcet = $("#about").offset().top
let contactOffcet = $("#contact").offset().top
console.log(aboutOffcet);

$(window).scroll(function () {
  let wScroll = $(window).scrollTop()
  if (wScroll > aboutOffcet - 50) {
    // window.alert('hello')
    $("#main-nav").css('backgroundColor', "rgba(0,0,0,0.7)")
    $("#btnUp").fadeIn(500)
  }
  else {
    $("#main-nav").css('backgroundColor', "transparent")
    $("#btnUp").fadeOut(500)
  }


})

let topX = 0
$("#btnUp").click(function () {


  $('html,body').animate({ scrollTop: topX }, 1000, function () {
    $('html,body').animate({ scrollTop: topX + 70 }, 800,function(){
     
    })

  })
})

$("a[href^='#']").click(function () {

  let aHref = $(this).attr('href')
  
   console.log(aHref);

  let sectionTop = $(aHref).offset().top
 // console.log(sectionTop);

  $("html,body").animate({ scrollTop: sectionTop }, 1000)
  
})




$("#sideBarToggle").click(function(){

  let colorBoxWidth = $("#colorBox").innerWidth()
 
  if($("#sideBar").css('left')=='0px')
  {
    $("#sideBar").animate({left:`-${colorBoxWidth}`},1000)

  }
  else{
  $("#sideBar").animate({left:`0px`},1000)

  }

})


for (let i = 0; i < $(".colorItem").length; i++) {


  let red = Math.round(Math.random()*255)
  let blue = Math.round(Math.random()*255)
  let green = Math.round(Math.random()*255)

  
  $(".colorItem").eq(i).css('backgroundColor',`rgba(${red},${green},${blue})`)
  
}



$(".colorItem").click(function(){
  bgColor = $(this).css('backgroundColor')
  console.log(bgColor);

  $("h1,#btnUp,i").css('color',bgColor)
})



