import Main from '../pages/Main';
import Login from '../pages/Login';
import Upload from '../pages/Upload';
import Signup from '../pages/Signup';

const routes = [
    {
        path : '/',
        component : Main
    },
    {
        path : '/login',
        component : Login
    },
    {
        path : '/upload',
        component : Upload
    },
    {
        path : '/signup',
        component : Signup
    }
];

export default routes;