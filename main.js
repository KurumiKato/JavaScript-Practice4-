'use strict';

// 1
{
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  document.querySelector('p').textContent = '縦:'+ windowWidth + ' 横:' + windowHeight;
}
{
  window.addEventListener('resize',() =>{
    const windowWidth = window.outerWidth;
    const windowHeight = window.innerHeight;
    document.querySelector('p').textContent = '縦:'+ windowWidth + ' 横:' + windowHeight;
  })
}

