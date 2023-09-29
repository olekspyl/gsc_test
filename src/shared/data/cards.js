import screenshots from '@/assets/images/screenshotsMask.webp';
import videos from '@/assets/images/videosMask.webp';
import arts from '@/assets/images/artsMask.webp';
import logo from '@/assets/images/logoMask.webp';
import fact from '@/assets/images/factMask.webp';
import ost from '@/assets/images/ostMask.webp';

const cards = [
  { src: screenshots, alt: 'screenshots', top: '128', title: 'screenshots', size: '68 mb' },
  { src: videos, alt: 'videos', top: '128', title: 'videos', size: '1.5 gb' },
  { src: arts, alt: 'arts', top: '140', title: 'arts', size: '128 mb' },
  { src: logo, alt: 'logo', top: '128', title: 'logo', size: '76.5 kb' },
  { src: fact, alt: 'fact', top: '128', title: 'fact sheets', size: '128 mb' },
  { src: ost, alt: 'ost', top: '128', title: 'ost', size: '68 mb' },
];

export default cards;
