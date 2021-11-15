import Home from './app/Pages/Home';
import Register from './app/Pages/Register';
import Login from './app/Pages/Login';
import './style/main.scss';
import ProjectsHome from './app/Pages/ProjectsHome';
import ProjectsPost from './app/Pages/ProjectsPost';
import IndividualPost from './app/Pages/IndividualPost';
import Advances from './app/Pages/Advances';
import CurrentProjects from './app/Pages/CurrentProjects';

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
        },
        {
            name: 'projectsPost',
            content: new ProjectsPost()
        },
        {
            name: 'individualPost',
            content: new IndividualPost()
        },
        {
            name: 'advances',
            content: new Advances()
        },
        {
            name: 'currentProjects',
            content: new CurrentProjects()
        },



    ];


for(const page of pages){

    const {name, content} = page;

    if($body.id == name){
        $body.appendChild(content);
    }
        
}