import Home from '../view/page/home';
import Favorite from '../view/page/favorite';
import Detail from '../view/page/detail';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/restoran/:id': Detail,
};

export default routes;
