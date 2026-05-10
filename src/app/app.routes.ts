import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { Application } from './templates/application/application';
import { Home } from './features/home/home';
import { Products } from './features/products/products';
import { Subscribe } from './features/subscribe/subscribe';
import { History } from './features/history/history';
import { authGuard } from './core/guards/auth-guard';
import { Error } from './features/error/error';

export const routes: Routes = [
    {
        path: "",
        component: Login
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "register",
        component: Register,
    },
    {
        path: "app",
        component: Application,
        canActivate: [authGuard],
        children: [
            {
                path: "home",
                component: Home
            },
            {
                path: "products",
                component: Products
            },
            {
                path: "subscribe",
                component: Subscribe
            },
            {
                path: "history",
                component: History
            },
            {
                path: "error",
                component: Error
            }
        ]
    }
];
