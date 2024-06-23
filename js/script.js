/**
 * This function will change image based on gallery selected
 * @param {} element for each gallery
 * gallery 1: 1 - 12
 * gallery 2: 13 - 24
 * gallery 3: 25 - 36
 */
function changeImage(galleryNum){
    var imageLinks = document.querySelectorAll('.imageLink');
    var images = document.querySelectorAll('.image');
    var startIndex = 1;
    if(galleryNum == 2){
        startIndex = 13;
    }
    if(galleryNum == 3){
        startIndex = 25;
    }

    console.log(startIndex);

    var index = startIndex;
    for(let imageLink of imageLinks){
        newSrc = "images/pic" + index + ".jpg";
        imageLink.href = newSrc;
        console.log(newSrc);
        index++;
    }

    index = startIndex;
    for(let image of images){
        image.src = "images/pic" + index + ".jpg"; 
        index++;
    }
}