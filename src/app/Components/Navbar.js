import edit from '../../style/assets/icons/edit-user.svg';
import message from '../../style/assets/icons/message.svg';
import check from '../../style/assets/icons/check.svg';
import user1 from '../../style/assets/images/user1.png';
import projectImg from '../../style/assets/images/project.png';

class Navbar {

    $navbar = document.createElement('nav');

    constructor(){

        this.$navbar.className = 'navbar';
        this.$navbar.id = 'navbar';


        const list = [
            {
                title: 'Mi Perfil',
                icon: edit,
                href: 'profile.html'
            },
            {
                title: 'Mensajes',
                icon: message,
                href: 'message.html'
            },
            {
                title: 'Proyectos Actuales',
                icon: check,
                href: 'currentProjects.html'
            },

        ]

        const user = JSON.parse(sessionStorage.getItem('user'));

        if(user){
            this.$navbar.innerHTML += `
                    <figure>
                        <img src="${user1}">
                    </figure>
                    <h2 id="username">${user.name}</h2>
                    <ul>
                        ${list.map(this.createLi).join(' ')}
                    </ul>
            `
        }

        return this.$navbar;

    }

    createLi(list){

        const {title, icon, href} = list;

        return `
            <li>
                <img src="${icon}">
                <a href="${href}"> 
                    ${title} 
                </a>
            </li>
        ` 
    }


}


export default Navbar;