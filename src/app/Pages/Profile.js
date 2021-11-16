import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';
import star from '../../style/assets/icons/star.svg';
import projectImage from '../../style/assets/images/project.png';
import chat from '../../style/assets/icons/inbox.svg';

class Profile{

    $advances = document.createElement('wrapper');
    url = 'http://localhost:3000/post';
    advance;

    constructor(){

        this.$advances.className = 'profile';

        this.advance = JSON.parse(sessionStorage.getItem('project'));

        this.$advances.appendChild(new Navbar());

        this.$advances.appendChild(new Header());

        const section = document.createElement('section');

        if(this.advance){
            this.$advances.appendChild(this.render(this.advance));
        }

        return this.$advances;

    }

        
    render(project){

        const {name} = project;

        const $section = document.createElement('section');
        $section.innerHTML += `
            <div  id="e65_96">
                <img src="${projectImage}" >
            </div>
            <div  id="e65_103"></div>
            <span  id="e65_104">Editar</span>
            <div  id="e66_159"></div>
            <span  id="e66_160">Editar</span>
            <p id="e65_105">Perfil</p>
            <span  id="e65_106">Experta en diseño de interfaces, con muchos años de experiencia y una gran creatividad. Siempre con ganas de mejorar y tomar mayores desafios.</span>
            <span  id="e65_107">Acerca de mi:</span>
            <div  id="e65_108"></div>
            <span  id="e65_109">
                <img src="${star}"> 5
            
            </span></div> 
        `;


        return $section;

    }


    
}

export default Profile;