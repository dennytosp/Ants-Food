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

export const authen = {Onboard, Welcome, Register, Login};
export const common = {Home, Saved, Notifications, Profile};
export const inside = {Cart, Details, Checkout, Purchase};
