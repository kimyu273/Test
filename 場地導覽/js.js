var imgArray = [
    'https://www.tku.edu.tw/images/pic/internation.jpg',
    'https://newtaipei.travel/content/images/attractions/4744/1024x768_af7c0330-861e-4b0f-b23b-3098d563c7c0.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8b/Tamkang_Chueh_Sheng_Memorial_Library_2019-01-23.jpg',
    'https://www.tku.edu.tw/images/pic/science.jpg',
    'https://photo.tku.edu.tw/getjpg.cshtml?im=17E22772128710716BDD3CD45A70BCE16B86767F0020D9372DA8B33C74AFF26C'],
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