import Splide from 'https://cdn.jsdelivr.net/npm/@splidejs/splide/+esm';

export default function decorate(block) {

  [...block.children].forEach((div) => {
    div.className = 'splide__slide';

    const [image, preTitle, preTitleType, title, description, buttonTxt, buttonLink, alignContent] = [...div.children];

    image.className = 'cmp-teaser__image';
    preTitle.className = 'cmp-teaser__pretitle';
    title.className = 'cmp-teaser__title';
    description.className = 'cmp-teaser__description';
    button.className = 'cmp-teaser__action-container';

    const teaserContentDiv = document.createElement('div');
    teaserContentDiv.className = 'cmp-teaser__content';

  });

  const slideTrack = document.createElement('div');
  slideTrack.className = 'splide__track';
  const slideList = document.createElement('div');
  slideList.className = 'splide__list';
  slideList.append(...block.children);
  slideTrack.append(slideList);
  block.replaceChildren(slideTrack);
  block.className = 'splide';

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide/dist/css/splide.min.css';
  link.dataset.splide = 'true';
  document.head.appendChild(link);

  const splide = new Splide('.splide', {
    type: 'loop',
    arrows: false,
    padding: '5rem'
  });
  splide.mount();
}
