const initBg = (autoplay = true) => {
    const bgImgsNames = ['jao1.jpg', 'jao2.jpg', 'jao3.jpg'];
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