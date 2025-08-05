import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Error } from './pages/error/error';
import { Todo } from './pages/todo/todo';

export const routes: Routes = [
    {
        path: '',
        component: Home
    }, {
        path: 'todo/:id',
        component: Todo
    }, {
        path: "**",
        component: Error
    }
];
