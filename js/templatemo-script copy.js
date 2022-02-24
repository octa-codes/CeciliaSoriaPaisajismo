const initBg = (autoplay = true) => {
    const bgImgsNames = ['800x700 js.apertura pc 1.png', '800x700 js.apertura pc 2.png', '800x700 js.apertura pc 3.png', '800x700 js.apertura pc 4.png', '800x700 js.apertura pc 5.png'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $("#demo").backstretch(bgImgs, {duration: 3000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}




$().ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);
});