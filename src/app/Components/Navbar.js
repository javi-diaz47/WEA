import edit from '../../style/assets/icons/edit-user.svg';
import handshake from '../../style/assets/icons/offer-service.svg';
import message from '../../style/assets/icons/message.svg';
import check from '../../style/assets/icons/check.svg';

class Navbar {

    $navbar = document.createElement('nav');

    constructor(){

        this.$navbar.className = 'navbar';
        this.$navbar.id = 'navbar';


        const list = [
            {
                title: 'Editar Perfil',
                icon: edit,
                href: 'advances.html'
            },
            {
                title: 'Mensajes',
                icon: message,
                href: 'advances.html'
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
                        <img src="">
                    </figure>
                    <h2 class="username">${user.name}</h2>
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