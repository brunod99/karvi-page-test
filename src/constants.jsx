import carIcon from '../public/images/car.svg';
import user from '../public/images/user.svg';

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
};

export default CONSTANTS;
