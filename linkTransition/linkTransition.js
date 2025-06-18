const transitionPh = document.getElementById('transitionPh');

// Duration in seconds (default 0.5s)
const animationDuration = 0.42;

window.linkTransition = function (from, to, isBackwards = false) {
  document.getElementById(from).style.animation = `contentSlide${
    isBackwards ? 'Rv' : ''
  } ${animationDuration}s ease forwards`;
  document.getElementById(to).style.animation = `phSlide${
    isBackwards ? 'Rv' : ''
  } ${animationDuration}s ease forwards`;
};
