import Home from './app/Pages/Home';
import Register from './app/Pages/Register';
import Login from './app/Pages/login';
import './style/main.scss';


const $body = document.querySelector('body');

const pages = [
        {
            name: 'home',
            content: new Home()
        },
        {
            name: 'register',
            content: new Register()
        },
        {
            name: 'login',
            content: new Login()
        }
    ];


for(const page of pages){

    const {name, content} = page;

    if($body.id == name){
        $body.appendChild(content);
    }

}
