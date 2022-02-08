const initBg = (autoplay = true) => {
    const bgImgsNames = ['4.jpg', '3.jpg', '2.jpg', '3 rd.png', 'plano.planta.png'];
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