var imgArray = [
    '6.jpg',
    '7.jpg'],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();