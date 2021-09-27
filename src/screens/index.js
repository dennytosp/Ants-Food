import Onboard from './auth/Onboarding';
import Home from './Common/Home';
import Saved from './Common/Saved';
import Notifications from './Common/Notifications';
import Profile from './Common/Profile';
import Welcome from './auth/Welcome';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './Inside/Cart';
import Details from './Inside/Details';
import Checkout from './Inside/Cart/navigation/Checkout';
import Purchase from './Inside/Cart/navigation/Purchase';
import Rating from './Inside/Rating';
import MyOrders from './Common/Profile/navigation/MyOrders';
import ShippingAddress from './Common/Profile/navigation/ShippingAddress';
import PaymentMethod from './Common/Profile/navigation/PaymentMethod';
import MyReviews from './Common/Profile/navigation/MyReviews';
import Settings from './Common/Profile/navigation/Settings';
import AddShippingAddress from './Common/Profile/navigation/ShippingAddress/navigation/AddShippingAddress/';
import AddPaymentMethod from './Common/Profile/navigation/PaymentMethod/navigation/AddPaymentMethod';

export const authen = {Onboard, Welcome, Register, Login};
export const common = {Home, Saved, Notifications, Profile};
export const inside = {
  Cart,
  Details,
  Checkout,
  Purchase,
  Rating,
  MyOrders,
  ShippingAddress,
  PaymentMethod,
  MyReviews,
  Settings,
  AddShippingAddress,
  AddPaymentMethod,
};
