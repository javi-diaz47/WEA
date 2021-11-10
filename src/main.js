import Home from './app/Pages/Home';
import Register from './app/Pages/Register';
import Login from './app/Pages/Login';
import './style/main.scss';
import ProjectsHome from './app/Pages/ProjectsHome';


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
        },
        {
            name: 'projectsHome',
            content: new ProjectsHome()
        }
    ];


for(const page of pages){

    const {name, content} = page;

    if($body.id == name){
        $body.appendChild(content);
    }

}
