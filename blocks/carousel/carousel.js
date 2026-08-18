import Splide from 'https://cdn.jsdelivr.net/npm/@splidejs/splide/+esm';

export default function decorate(block) {

  [...block.children].forEach((div) => {
    div.className = 'splide__slide';

    let [image, mobileImage, preTitle, title, description, button, alignContent] = [...div.children];

    image.className = 'cmp-teaser__image';
    description.className = 'cmp-teaser__description';

    const picture = document.createElement('picture');

    const source = document.createElement('source');
    source.media = '(max-width: 767px)';
    source.srcset = mobileImage.querySelector('img').src;

    const img = document.createElement('img');
    img.src = image.querySelector('img').src;
    img.alt = image.querySelector('img').alt || '';

    picture.append(source, img);
    mobileImage.remove();
    image.replaceChildren(picture);

    if (preTitle.firstElementChild) {
      preTitle.firstElementChild.className = 'cmp-teaser__pretitle';
      preTitle = preTitle.firstElementChild;
    } else {
//      preTitle.remove();
    }
    if (title.firstElementChild) {
       title.firstElementChild.className = 'cmp-teaser__title';
       title = title.firstElementChild;
    } else {
//       preTitle.remove();
    }
    const buttonLink = button.querySelector('a');
    if (buttonLink) {
      button.className = 'cmp-teaser__action-container';
      buttonLink.className = 'cmp-teaser__action-link';
      button.replaceChildren(buttonLink);
    } else {
      button.remove();
    }

    const teaserContentDiv = document.createElement('div');
    teaserContentDiv.className = 'cmp-teaser__content';
    teaserContentDiv.append(preTitle);
    teaserContentDiv.append(title);
    teaserContentDiv.append(description);
    teaserContentDiv.append(button);

    const teaserDiv = document.createElement('div');
    teaserDiv.className = 'teaser';
    teaserDiv.append(teaserContentDiv);
    teaserDiv.append(image);

    if (alignContent.textContent == 'left') {
      teaserDiv.classList.add('content-on-bottom');
      teaserDiv.classList.add('content-on-left');
    } else {
      teaserDiv.classList.add('content-on-top');
      teaserDiv.classList.add('content-on-right');
    }
    alignContent.remove();

    div.append(teaserDiv);
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
    padding: '6.52174%'
  });
  splide.mount();
}
