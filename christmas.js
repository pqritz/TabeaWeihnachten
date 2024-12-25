document.getElementsByClassName("box")[0].addEventListener('click', () => {
    const animatedDiv = document.getElementsByClassName('animStopper');
    const boxgift = document.getElementsByClassName('box-gift')[0];
    const applyAnimationOn = [document.getElementsByClassName('box-tape')[0], boxgift]
    
    boxgift.addEventListener('animationiteration', function handleIteration() {
        for(i=0; i<animatedDiv.length; i++) {
            animatedDiv[i].style.animationIterationCount = '1'; // Stop looping after the next iteration
        }
        boxgift.addEventListener('animationend', function handleAnimationEnd() {
            for(i=0; i<animatedDiv.length; i++) {
                animatedDiv[i].style.animation = 'none'; // Clear inline animation
                //animatedDiv[i].classList.add('new-animation');
            }
            for(i=0;i<applyAnimationOn.length;i++) {
                console.log(applyAnimationOn);
                applyAnimationOn[i].style.animation = "openTop 1s linear forwards";
            }
            document.getElementsByClassName('box-gifts')[0].style.animation = "openBottom 1s linear forwards";
            boxgift.removeEventListener('animationiteration', handleIteration);
            boxgift.removeEventListener('animationend', handleAnimationEnd);
        }, {once: true});
    }, {once: true});
    addRandomImage();
}, {once:true})

const imageUrls = [
    "assets/bunnyHeart1.png",
    "assets/bunnyHeart2.png",
    "assets/bunnyHeart3.png",
    "assets/bunnyHeart4.png"
]
const DOWNLOADBUNNY = "assets/Bunny.png";

function addRandomImage() {
    let randomImage;
    if(isMobile()) {
        randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    } else {
        randomImage = DOWNLOADBUNNY;
    }

    const existingImage = document.querySelector('BunnyImage');
    if(existingImage) {
        existingImage.remove();
    }
    const img = document.createElement('img');
    img.src = randomImage;
    img.alt = 'Bunny Image';
    img.className = 'BunnyImage';
    img.style.animation = "bunnyImageAnim";
    document.getElementsByClassName('imageContainer')[0].appendChild(img);
    setTimeout(() => {
        img.classList.add('visible');
    }, 1000); // Small delay to ensure the image is added first
    if(!isMobile()) {
        img.addEventListener("click", function() {
            downloadFile("https://github.com/pqritz/TabeaWeihnachten/raw/refs/heads/main/assets/DesktopPet.jar", "DesktopPet.jar")
        });
    }
}

function downloadFile(url, fileName) {
    console.log("CALLED");
    const anchor = document.createElement('a');
    
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|blackberry|windows phone/i.test(userAgent);
}


/** INCASE THE FANCY SHIT IS BETTER
  @keyframes openAnimation {
    from {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-10em);
    }
    50% {
        transform: translateY(-10em) translateX(-12.3em) rotate(-90deg);
    }
    65% {
        transform: translateY(-10em) translateX(-12.3em) rotate(-180deg);
    }
    75% {
        transform: translateY(5em) translateX(-12.3em) rotate(-180deg);
    }
    to {
        transform: translateY(5em) translateX(-12.3em) rotate(-180deg);
    }
} */
