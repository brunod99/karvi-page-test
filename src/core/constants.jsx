// Header
import carIcon from '../../public/images/car.svg';
import user from '../../public/images/user.svg';

// Item
import Trust from '../../public/images/trust.svg';
import Settings from '../../public/images/settings.svg';
import Carblue from '../../public/images/car-blue.svg';

export const CONSTANTS = {
  city: 'São Paulo',
  header: {
    navbar: {
      items: ['Novos', 'Usados', 'Venda seu carro'],
      userSpecs: [
        {
          icon: carIcon,
          name: 'Meus carros',
        },
        {
          icon: user,
          name: 'Pedro Gomez',
        },
      ],
    },
  },
  items: {
    itemsSingle: {
      characteristics: [
        {
          icon: Carblue,
          copy: 'Mais carros para escolher',
        },
        {
          icon: Settings,
          copy: 'Conheça o status do carro real',
        },
        {
          icon: Trust,
          copy: 'Tome uma decisão de compra sem preocupações',
        },
      ],
    },
  },
};

export default CONSTANTS;
