import User from './components/user'
import Products from './components/product/products'
import ProductCad from './components/product/product-cad'
import Product from './components/product/product'


export const routes = [{
    path: '',
    name: 'login',
    component: User
}, {
    path: '/products',
    name: 'products',
    component: Products
}, {
    path: '/products/:id',
    name: 'products',
    component: Product
}, {
    path: '/new-product',
    name: 'new products',
    component: ProductCad
}

    // {
    //     path: '/configuration',
    //     name: 'configuration',
    //     component: Configure,
    //     beforeEnter: (to, from, next) => {
    //         if (tokenService.hasAuthenticated())
    //             next()
    //         else
    //             next('/')
    //     }
    // }
]