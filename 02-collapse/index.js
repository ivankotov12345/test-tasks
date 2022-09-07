const wrapper = document.querySelector('.collapsible');
const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const buttonLabels = document.querySelectorAll('.collapsible__action');
const lableVisible = document.querySelector('.collapsible__action--visible');
const lableHidden = document.querySelector('.collapsible__action--hidden');

let fadeFlag = 0;

const stylesWrapper = () => {
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.alignItems = 'center';
  wrapper.style.marginTop = '50px';
};

stylesWrapper();

const stylesBtn = () => {
  button.style.backgroundColor = "green";
  button.style.border = 'none';
  button.style.borderRadius = '8px';
  button.style.width = '300px';
  button.style.height = '50px';
};

stylesBtn();

const stylesLable = () => {
  lableVisible.style.display = 'none';
  lableHidden.style.display = 'block';

  buttonLabels.forEach(lable => {
    lable.style.fontSize = '18px';
    lable.style.textTransform = 'uppercase';
    lable.style.color = '#FFF';
  });
}

stylesLable();

const options = {
  duration: 300,
  easing: 'ease-in-out',
};

const stylesContent = () => {
  content.style.fontSize = '24px';
  content.style.transform = 'translateY(-1000px)';
}

stylesContent();

const animationBtn = () => {
  const keyframesBtn = [
    { opacity: .3 },
    { opacity: 1 },
  ];

  button.animate(keyframesBtn, options)
}

const fadeInContent = () => {
  content.style.transform = 'translateY(0)';
  const keyframesFadeIn = [
    { transform: 'translateY(-1000px)' },
    { transform: 'translateY(0)' },
  ];

  content.animate(keyframesFadeIn, options)
}

const fadeOutContent = () => {
  content.style.transform = 'translateY(-1000px)';
  const keyframesFadeOut = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-1000px)' },
  ];

    content.animate(keyframesFadeOut, options)
}

const contentToggle = () => {
  if (fadeFlag === 0) {
    fadeFlag = 1;
    fadeInContent();
  } else if (fadeFlag === 1) {
    fadeFlag = 0;
    fadeOutContent();
  }
};

const btnToggle = () => {
  lableVisible.style.display = (lableVisible.style.display === 'none') ? 'block' : 'none';
  lableHidden.style.display = (lableHidden.style.display === 'block') ? 'none' : 'block';
  button.style.backgroundColor = (button.style.backgroundColor === 'green') ? 'red' : 'green';

  contentToggle();
  animationBtn();
};

button.addEventListener('click', btnToggle)