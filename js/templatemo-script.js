const initBg = (autoplay = true) => {
    const bgImgsNames = ['imagen principal.png', 'ppal.1.jpg', 'imagenprincipal3.png'];
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