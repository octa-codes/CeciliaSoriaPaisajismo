const initBg = (autoplay = true) => {
    const bgImgsNames = ['1.web.jpg', 'evoluc.ao.1año.6.jpg', '1642550571905.jpg', '2.web.jpg', '4.web.jpg'];
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