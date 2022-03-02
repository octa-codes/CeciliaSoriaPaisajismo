const initBg = (autoplay = true) => {
    const bgImgsNames = ['Cecilia Soria (1).gif', '1920x600 ppal..png', '1920x600 ppal. (2).png'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $("#demo1").backstretch(bgImgs, {duration: 3000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}




$().ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);
});