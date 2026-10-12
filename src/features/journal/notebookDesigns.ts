import cover1 from '../../assets/journal/1.jpg';
import cover2 from '../../assets/journal/2.jpg';
import cover3 from '../../assets/journal/3.jpg';
import cover4 from '../../assets/journal/4.jpg';
import cover5 from '../../assets/journal/5.jpg';
import cover6 from '../../assets/journal/6.jpg';
import cover7 from '../../assets/journal/7.jpg';
import cover8 from '../../assets/journal/8.jpg';

export interface NotebookDesign {
  id: string;
  name: string;
  image: string;
  imagePath: string;
  description: string;
}

export const notebookDesigns: NotebookDesign[] = [
  {
    id: 'burgundy-plaid',
    name: 'Burgundy Plaid',
    image: cover1,
    imagePath: '/src/assets/journal/1.jpg',
    description: 'Cozy burgundy & plum diagonal tartan plaid fabric binder with floral snap strap',
  },
  {
    id: 'sakura-zebra',
    name: 'Sakura Zebra',
    image: cover2,
    imagePath: '/src/assets/journal/2.jpg',
    description: 'White & slate zebra tiger stripes with delicate watercolor pink blush and cherry blossoms',
  },
  {
    id: 'fluffy-leopard',
    name: 'Fluffy Leopard',
    image: cover3,
    imagePath: '/src/assets/journal/3.jpg',
    description: 'Ultra-soft spotted snow leopard faux fur with metallic vintage button clasp',
  },
  {
    id: 'noir-lace',
    name: 'Noir Lace',
    image: cover4,
    imagePath: '/src/assets/journal/4.jpg',
    description: 'Intricate vintage black floral lace overlay on textured pewter leather with snap closure',
  },
  {
    id: 'classic-polka-dot',
    name: 'Classic Polka Dot',
    image: cover5,
    imagePath: '/src/assets/journal/5.jpg',
    description: 'Glossy jet black patent leather with crisp white micro polka dots and contrast white strap',
  },
  {
    id: 'starry-plum',
    name: 'Starry Plum',
    image: cover6,
    imagePath: '/src/assets/journal/6.jpg',
    description: 'Velvety deep aubergine leather stamped with midnight black star motifs',
  },
  {
    id: 'pastel-dragonfly',
    name: 'Pastel Dragonfly',
    image: cover7,
    imagePath: '/src/assets/journal/7.jpg',
    description: 'Sunny lemon and candy striped textured planner with lilac dragonfly sketch and pink spine',
  },
  {
    id: 'ribbon-bunny',
    name: 'Ribbon Bunny',
    image: cover8,
    imagePath: '/src/assets/journal/8.jpg',
    description: 'Baby pink dotted leather featuring an adorable painted bunny with ribbon ear-bows',
  },
];

export default notebookDesigns;
