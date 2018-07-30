import HomePage from '../client/pages/HomePage';
import ProductDetailPage from '../client/pages/ProductDetailPage';
import ProductsListPage from '../client/pages/ProductsListPage';
import axios from 'axios';
import App from './App';

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
        component: HomePage
      }
    ];

export default Routes;