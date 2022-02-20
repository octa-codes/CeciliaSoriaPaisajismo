const initBg = (autoplay = true) => {
    const bgImgsNames = ['plano.planta.png', '3.jpg', '2.jpg', '3 rd.png', '4.jpg'];
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