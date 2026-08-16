import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function decorate(block) {
  const splide = new Splide(block, {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    autoplay: true,
  });

  splide.mount();
}
