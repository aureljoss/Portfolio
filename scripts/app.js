var text = document.querySelector("h1");
document.addEventListener("scroll", () => {
  text.style.left = window.scrollY * 5 + "px";
});


//gsap.to(".hello", { duration: 2.5, ease: "bounce.out", x: -600 });

// ------ Cursor ------//
new kursor({
  type: 1,
  removeDefaultCursor:true,
})

// ------ Intro with GSAP Scroll Trigger ------//
gsap.from('.introduction', {
  opacity: 0,
  scrollTrigger: {
      trigger: '.introduction',
      toggleActions: 'restart pause reverse pause',
      start: 'top center',
      once: true,
  },
  y: 100,
}); 
    gsap.to('.introduction', {
      opacity:1,
        scrollTrigger: {
            trigger: '.introduction',
            toggleActions: 'restart pause reverse pause',
            start: 'top bottom',
            once: true,
        },
        y: 0,
        duration: 2,
        ease: "bounce.out",
    }); 

const btn = document.getElementById('collapsible');

btn.addEventListener('click', () => {
  btn.style.display = 'none';

  const box = document.getElementById('hidden-text');
  box.style.display = 'block';
});

// ------ HippoProject ----- //

// -- GSAP scroll trigger -- //
gsap.registerPlugin(ScrollTrigger);

gsap.from('#hippo', {
  scrollTrigger: {
      trigger: '#hippo',
      toggleActions: 'restart pause reverse pause',
      start: 'top center',
      once: true,
  },
  x: 400,
}); 
    gsap.to('#hippo', {
        scrollTrigger: {
            trigger: '#hippo',
            toggleActions: 'restart pause reverse pause',
            start: 'top center',
            once: true,
        },
        x: 0,
        duration: 2,
        ease: "bounce.out",
    }); 



// -- Hippo Hover Animation -- //

const mouthOpen= gsap.timeline ({paused:true});
const easeType= Power2.easeOut;
const mouthSpeed= 0.5;
mouthOpen.to('.mouth-back',{duration:mouthSpeed, ease: easeType, y:-70},0);
mouthOpen.to('.tongue',{duration:mouthSpeed * 1.5, ease: easeType, y:-70,},0);
mouthOpen.to('.teeth',{duration:mouthSpeed, ease: easeType, y:-70, scaleY: 1.2},0);
mouthOpen.to('.freckles', {duration: mouthSpeed, ease: easeType, y: -8},0);
mouthOpen.to('.ears', {duration: mouthSpeed, ease: easeType, y:10},0);
mouthOpen.to('.eye-right', {duration: mouthSpeed, ease: easeType, x:-2},0);
mouthOpen.to('.eye-left', {duration: mouthSpeed, ease: easeType, x:2},0);
mouthOpen.to('.eyes', {duration: mouthSpeed, ease: easeType, y:2},0);
mouthOpen.to('.nostrils', {duration: mouthSpeed, ease: easeType, y: -2},0);

// ---- Mouse Hover --//

const button = document.getElementById('hippo');

button.addEventListener('mouseenter', enterButton);
button.addEventListener('mouseleave', leaveButton);

function enterButton(){mouthOpen.play();}
function leaveButton (){mouthOpen.reverse();}


// -- Ear Wiggle --//
const earWiggle=gsap.timeline({paused:true, repeat:2});
earWiggle.set('.ear-right',{transformOrigin:"center center"});
earWiggle.to('.ear-right', {duration: 0.1, rotation: 75});
earWiggle.to('.ear-right', {duration: 0.1, rotation: 0});
window.setInterval(() => earWiggle.play(0), 1500);


// ------ HippoProject ----- //

// -- GSAP scroll trigger -- //
gsap.registerPlugin(ScrollTrigger);

gsap.from('#carrot', {
  scrollTrigger: {
      trigger: '#carrot',
      toggleActions: 'restart pause reverse pause',
      start: 'top center',
      once: true,
  },
  x: 400,
  autoAlpha:0,
  delay: 2,
}); 
    gsap.to('#carrot', {
        scrollTrigger: {
            trigger: '#carrot',
            toggleActions: 'restart pause reverse pause',
            start: 'top center',
            once: true,
        },
        x: 0,
        duration: 2,
        ease: "bounce.out",
        delay:2,
    }); 


// ------ Banner scroll ----- //

// -- GSAP scroll trigger -- //
gsap.registerPlugin(ScrollTrigger);

// ------ Social ----- //

const sayHello = document.getElementById('sayHello');
const  social=document.getElementById('socialIcon');

sayHello.addEventListener('mouseenter', enterHello);
sayHello.addEventListener('mouseleave', leaveHello);

function enterHello(){
  social.style.transform="scale(2)";
}
function leaveHello(){
  social.style.transform="scale(1)";
}
