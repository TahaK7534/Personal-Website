/*
Next time, when you click on any of the cards center the card that you clicked
- make all other cards fly out to the left and right respectively animate that -- DONE
- center the clicked card animate that 
-  perform a zoom in style animation on the card
- that should take you the project page -- I should switch to using node.js and react 
- There needs to be a reverse type of animation for leaving the page
Also leave room for customization of stuff, like the colors of the background when zomming in - this is mainly so that
I can make it more class like so adding projects in the future is as simple as possible.


Make it so you can only click the image when they are fully in view - but like what if they are not fully in view??? - 

fix when you click the button move the scroll to the right location and stop you from scrolling


Then I should Make the final Page aka the about me page aka the red area
make like three options in the center (about me, education, work experience)
- Make the about me page - Make this one more fun
- Make the education page - Cute little animations in and arround the text would be cool
- Make the work experience page - Same thing here
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
    CenterCard(SelectedImage)
}


function CardFlyingAwayAnimation(SelectedImageId) {
    Images.forEach(image => {
        if (image.id != SelectedImageId) {
            const SelectedImageIDNumber = SelectedImageId.substr(SelectedImageId.length - 1);
            const ImageIdNumber = image.id.substr(image.id.length - 1);

            PersistCurrentStyle(image)
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

function CenterCard(SelectedImage) {
    PersistCurrentStyle(SelectedImage);

    SelectedImage.classList.remove("Image-Down");
    const rect = SelectedImage.getBoundingClientRect();
    const viewportCenterX = window.innerWidth / 2;
    const imageCenterX = rect.left + rect.width / 2;
    const deltaX = viewportCenterX - imageCenterX;

    // Animate to center
    SelectedImage.animate(
        [
            { transform: SelectedImage.style.transform },
            { transform: `translateX(${deltaX}px)` }
        ],
        {
            duration: 3000,
            easing: "ease-out",
            fill: "forwards"
        }
    );
}




function PersistCurrentStyle(image){
        const currentTransform = window.getComputedStyle(image).transform;
        const currentOpacity = window.getComputedStyle(image).opacity;
        // Apply these as inline styles so they persist after removing other animation class
        image.style.transform = currentTransform;
        image.style.opacity = currentOpacity;
}