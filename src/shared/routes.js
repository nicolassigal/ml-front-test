import HomePage from '../client/pages/HomePage';
import ProductDetailPage from '../client/pages/ProductDetailPage';
import ProductsListPage from '../client/pages/ProductsListPage';
import axios from 'axios';
import App from '../shared/App';

export default  [
    {
        ...App,
        routes: [
            {
                path: '/',
                component: HomePage,
                exact: true
            },
            {
                path: '/items',
                component: ProductsListPage,
                exact: true
            },
            {
                path: '/items/:id',
                component: ProductDetailPage
            }
        ]
    }
]
