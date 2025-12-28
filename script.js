/*
Next time, when you click on any of the cards center the card that you clicked
- make all other cards fly out to the left and right respectively animate that
- center the clicked card animate that
-  perform a zoom in style animation on the card
- that should take you the project page
- There needs to be a reverse type of animation for leaving the page
Also leave room for customization of stuff, like the colors of the background when zomming in - this is mainly so that
I can make it more class like so adding projects in the future is as simple as possible.
*/






// Get all the card images
const Card_Images = document.getElementsByClassName("Image");

// Convert them into an array for easier access & add event listener
const Images = []
for (const image of Card_Images) {
    image.addEventListener("click", CardSelected);
    Images.push(image)
}



function CardSelected(event) {
    const SelectedImage = event.currentTarget;
    CardFlyingAwayAnimation(SelectedImage.id)
}





function CardFlyingAwayAnimation(SelectedImageId) {
    Images.forEach(image => {
        if (image.id != SelectedImageId) {
            const SelectedImageIDNumber = SelectedImageId.substr(SelectedImageId.length - 1);
            const ImageIdNumber = image.id.substr(image.id.length - 1);

            //Get the current computed styles (where the scroll animation is currently)
            const currentTransform = window.getComputedStyle(image).transform;
            const currentOpacity = window.getComputedStyle(image).opacity;

            // Apply these as inline styles so they persist after removing other animation class
            image.style.transform = currentTransform;
            image.style.opacity = currentOpacity;

            // Remove the scroll animation class becasue If I keep this this animation will play again
            image.classList.remove("Image-Down");

            // Add my new animation
            if (ImageIdNumber > SelectedImageIDNumber) {
                image.classList.add("Image-FlyAwayRight");
            } else {
                image.classList.add("Image-FlyAwayLeft");
            }
        }
    });
}


