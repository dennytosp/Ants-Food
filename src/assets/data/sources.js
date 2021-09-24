import {COLORS} from '../../constants';
import {photos} from '../../assets';
import {Popular, Chair, Table, Armchair, Bed, Lamb} from '../svg';
import {React} from 'react';

export const ONBOARD_DATA = [
  {
    title: 'Delicious Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: photos.onb01,
  },
  {
    title: 'Fast Shipping',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum rhoncus nulla.',
    image: photos.onb02,
  },
  {
    title: 'Certificate Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies mauris a id.',
    image: photos.onb03,
  },
  {
    title: 'Payment Online',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui ultricies sit massa.',
    image: photos.onb04,
  },
];

export const DATA_CATEG = [
  {
    id: '1',
    image: Popular,
    name: 'Popular',
  },
  {
    id: '2',
    image: Chair,
    name: 'Chair',
  },
  {
    id: '3',
    image: Table,
    name: 'Table',
  },
  {
    id: '4',
    image: Armchair,
    name: 'Armchair',
  },
  {
    id: '5',
    image: Bed,
    name: 'Bed',
  },
  {
    id: '6',
    image: Lamb,
    name: 'Lamb',
  },
];

export const DATA_PRODUCT = [
  {
    id: '1',
    image: photos.product01,
    name: 'Black Simple Lamp',
    price: '$ 12.00',
  },
  {
    id: '2',
    image: photos.product02,
    name: 'Minimal Stand',
    price: '$ 25.00',
  },
  {
    id: '3',
    image: photos.product03,
    name: 'Coffee Chair',
    price: '$ 20.00',
  },
  {
    id: '4',
    image: photos.product04,
    name: 'Simple Desk',
    price: '$ 50.00',
  },

  {
    id: '5',
    image: photos.product05,
    name: 'Black Simple Lamp',
    price: '$ 12.00',
  },
  {
    id: '6',
    image: photos.product01,
    name: 'Minimal Stand',
    price: '$ 25.00',
  },
  {
    id: '7',
    image: photos.product03,
    name: 'Coffee Chair',
    price: '$ 20.00',
  },
  {
    id: '8',
    image: photos.product02,
    name: 'Simple Desk',
    price: '$ 50.00',
  },
];

export const DATA_CART = [
  {
    id: '1',
    image: photos.product05,
    name: 'Coffee Table',
    price: '$ 50.00',
  },
  {
    id: '2',
    image: photos.product03,
    name: 'Coffee Chair',
    price: '$ 20.00',
  },
  {
    id: '3',
    image: photos.product02,
    name: 'Minimal Stand',
    price: '$ 25.00',
  },
  {
    id: '4',
    image: photos.product04,
    name: 'Minimal Desk',
    price: '$ 50.00',
  },
  {
    id: '5',
    image: photos.product01,
    name: 'Minimal Lamp',
    price: '$ 12.00',
  },
];

const sources = {
  ONBOARD_DATA,
  DATA_CATEG,
  DATA_PRODUCT,
  DATA_CART,
};
export default sources;
