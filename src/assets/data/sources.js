import {COLORS} from '../../constants';
import {photos} from '../../assets';
import {
  Popular,
  Chair,
  Table,
  Armchair,
  Bed,
  Lamb,
  Method01,
  Method02,
} from '../svg';
import {React} from 'react';

export const ONBOARD_DATA = [
  {
    title: 'Welcome to Surf.',
    text: 'I provide essential stuff for your ui designs every tuesday!.',
    image: photos.onboard01,
  },
  {
    title: 'Every Tuesday!',
    text: 'Make sure to take a look my uplab profile every tuesday',
    image: photos.onboard02,
  },
  {
    title: 'Download now!',
    text: 'You can follow me if you wantand comment on any to get some freebies',
    image: photos.onboard03,
  },
];

export const DATA_CATEG = [
  {
    id: '1',
    image: Popular,
    name: 'Popular',
    status: 'Popular',
  },
  {
    id: '2',
    image: Chair,
    name: 'Chair',
    status: 'Chair',
  },
  {
    id: '3',
    image: Table,
    name: 'Table',
    status: 'Table',
  },
  {
    id: '4',
    image: Armchair,
    name: 'Armchair',
    status: 'Armchair',
  },
  {
    id: '5',
    image: Bed,
    name: 'Bed',
    status: 'Bed',
  },
  {
    id: '6',
    image: Lamb,
    name: 'Lamb',
    status: 'Lamb',
  },
];

export const DATA_PRODUCT = [
  {
    id: '1',
    image: photos.product01,
    name: 'Black Simple Lamp',
    price: '$ 12.00',
    status: 'Popular',
  },
  {
    id: '2',
    image: photos.product02,
    name: 'Minimal Stand',
    price: '$ 25.00',
    status: 'Chair',
  },
  {
    id: '3',
    image: photos.product03,
    name: 'Coffee Chair',
    price: '$ 20.00',
    status: 'Table',
  },
  {
    id: '4',
    image: photos.product04,
    name: 'Simple Desk',
    price: '$ 50.00',
    status: 'Armchair',
  },

  {
    id: '5',
    image: photos.product05,
    name: 'Black Simple Lamp',
    price: '$ 12.00',
    status: 'Bed',
  },
  {
    id: '6',
    image: photos.product01,
    name: 'Minimal Stand',
    price: '$ 25.00',
    status: 'Lamb',
  },
  {
    id: '7',
    image: photos.product03,
    name: 'Coffee Chair',
    price: '$ 20.00,',
    status: 'Chair',
  },
  {
    id: '8',
    image: photos.product02,
    name: 'Simple Desk',
    price: '$ 50.00',
    status: 'Table',
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

export const DATA_NOTIFICATIONS = [
  {
    id: '1',
    image: photos.product02,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: 'NEW',
  },
  {
    id: '2',
    image: photos.product01,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: '',
  },
  {
    id: '3',
    image: photos.product05,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: 'NEW',
  },
  {
    id: '4',
    image: photos.product04,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: 'HOT',
  },
  {
    id: '5',
    image: photos.product03,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: 'NEW',
  },
  {
    id: '6',
    image: photos.product01,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: 'HOT',
  },
  {
    id: '7',
    image: photos.product05,
    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
    status: 'NEW',
  },
];

export const DATA_REVIEWS = [
  {
    id: '1',
    image: photos.user,
    name: 'Bruno Fernandes',
    time: '20/03/2020',
    content:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '2',
    image: photos.user,
    name: 'Tracy Mosby',
    time: '15/04/2020',
    content:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '3',
    image: photos.user,
    name: 'Vamos Vegas',
    time: '16/05/2020',
    content:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
];

export const DATA_EVENT_PROFILE = [
  {
    id: '1',
    title: 'My orders',
    navigation: 'MyOrders',
    subtitle: 'Already have 10 orders',
  },
  {
    id: '2',
    title: 'Shipping Addresses',
    navigation: 'ShippingAddress',
    subtitle: '03 Addresses',
  },
  {
    id: '3',
    title: 'Payment Method',
    navigation: 'PaymentMethod',
    subtitle: 'You have 2 cards',
  },
  {
    id: '4',
    title: 'My reviews',
    navigation: 'MyReviews',
    subtitle: 'Reviews for 5 items',
  },
  {
    id: '5',
    title: 'Settings',
    navigation: 'Settings',
    subtitle: 'Notification, Password, FAQ, Contact',
  },
];

export const DATA_ORDER = [
  {
    id: 'Order No238562312',
    time: '20/03/2020',
    quantity: '03',
    total: '$150',
    status: 'Delivered',
  },
  {
    id: 'Order No368762317',
    time: '28/03/2020',
    quantity: '04',
    total: '$160',
    status: 'Processing',
  },
  {
    id: 'Order No238562313',
    time: '30/04/2020',
    quantity: '05',
    total: '$240',
    status: 'Canceled',
  },
  {
    id: 'Order No238562345',
    time: '12/05/2020',
    quantity: '06',
    total: '$310',
    status: 'Delivered',
  },
  {
    id: 'Order No238562346',
    time: '24/05/2020',
    quantity: '09',
    total: '$660',
    status: 'Canceled',
  },
  {
    id: 'Order No238562347',
    time: '02/06/2020',
    quantity: '02',
    total: '$110',
    status: 'Processing',
  },
  {
    id: 'Order No238562348',
    time: '12/06/2020',
    quantity: '04',
    total: '$460',
    status: 'Processing',
  },
  {
    id: 'Order No238562349',
    time: '30/05/2020',
    quantity: '07',
    total: '$510',
    status: 'Delivered',
  },
  {
    id: 'Order No238562350',
    time: '18/06/2020',
    quantity: '11',
    total: '$957',
    status: 'Canceled',
  },
  {
    id: 'Order No238562351',
    time: '24/05/2020',
    quantity: '01',
    total: '$110',
    status: 'Delivered',
  },
];

export const DATA_STATUS_ORDERS = [
  {
    id: '1',
    status: 'All',
  },
  {
    id: '2',
    status: 'Delivered',
  },
  {
    id: '3',
    status: 'Processing',
  },
  {
    id: '4',
    status: 'Canceled',
  },
];

export const DATA_SHIPPING_ADDRESS = [
  {
    id: '1',
    name: 'Lionel Messi',
    address: '25 rue Mateo Latouche, Nice, 06200, Sogan D’azur, Argentina',
    checked: true,
  },
  {
    id: '2',
    name: 'Robert Lewandowski',
    address: '55 rue Solion Lewandowski, Nice, 15560, Côte D’azur, Poland',
    checked: false,
  },
  {
    id: '3',
    name: 'Cristiano Ronaldo',
    address: '75 rue Robert Vascava, Nice, 88559, Alion D’azur, Portugal',
    checked: false,
  },
];

export const DATA_METHODS = [
  {
    id: '1',
    id_card: '* * * *  * * * *  * * * *  2108',
    background: '#222222',
    typeMethod: Method01,
    name: 'Dinh Tien Phong',
    time: '09/27',
  },
  {
    id: '2',
    id_card: '* * * *  * * * *  * * * *  3947',
    background: '#7F886A',
    typeMethod: Method02,
    name: 'Jennyfer Doe',
    time: '05/23',
  },
  {
    id: '3',
    id_card: '* * * *  * * * *  * * * *  8574',
    background: '#002C3E',
    typeMethod: Method01,
    name: 'Javil Clean',
    time: '08/25',
  },
];

export const DATA_MY_REVIEWS = [
  {
    id: '1',
    image: photos.product05,
    name: 'Coffee Table',
    price: '$ 50.00',
    time: '20/03/2020',
    description:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '2',
    image: photos.product02,
    name: 'Minimal Stand',
    price: '$ 25.00',
    time: '10/04/2020',
    description:
      'Vamos Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '3',
    image: photos.product04,
    name: 'Javic Santion',
    price: '$ 38.00',
    time: '16/04/2020',
    description:
      'Javic Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '4',
    image: photos.product03,
    name: 'Landing Solion',
    price: '$ 65.00',
    time: '22/04/2020',
    description:
      'Landing Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
];

const sources = {
  ONBOARD_DATA,
  DATA_CATEG,
  DATA_PRODUCT,
  DATA_CART,
  DATA_NOTIFICATIONS,
  DATA_REVIEWS,
  DATA_EVENT_PROFILE,
  DATA_ORDER,
  DATA_SHIPPING_ADDRESS,
  DATA_METHODS,
  DATA_MY_REVIEWS,
  DATA_STATUS_ORDERS,
};
export default sources;
