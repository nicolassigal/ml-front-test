import ProductDetailPage from '../client/pages/ProductDetail/ProductDetailPage';
import ProductsListPage from '../client/pages/ProductsList/ProductsListPage';
import NotFoundPage from '../client/pages/NotFoundPage/NotFoundPage';
import HomePage from '../client/pages/Home/HomePage';

const Routes = [
      {
        path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/items',
        component: ProductsListPage,
        exact: true
      },
      {
        path: '/items/:id',
        component: ProductDetailPage,
      },
      {
        path: '*',
        exact: true,
        component: NotFoundPage
      }
    ];

export default Routes;