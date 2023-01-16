$(document).ready(function(){

    console.log("hola");

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    $("#galeria a").hover(function(){
        $("img", this).animate({
            width: "105%",
            height: "105%",
        }, 100);
    }, function(){
        $("img", this).animate({
            width: "100%",
            height: "100%",
        }, 100);
    });

    $('#menu li').hover(function(){
        $('a', this).animate({
            'font-size':'24px'});
    }, function(){
        $('a', this).animate({
            'font-size':'16px'});
    });

    $('#iconos li').hover(function(){
        $('img', this).animate({
            width: '+=20%', 
            height: '+=20%'});
    }, function(){
        $('img', this).animate({
            width: '-=20%', 
            height: '-=20%'});
    });

    console.log("Funciona Todo");
});