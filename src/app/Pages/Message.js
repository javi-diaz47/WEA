import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';
import check from '../../style/assets/icons/check.svg';
import upload from '../../style/assets/icons/upload.svg';
import user2 from '../../style/assets/images/user2.png';

class Message{

    $advances = document.createElement('wrapper');
    url = 'http://localhost:3000/post';
    advance;

    constructor(){

        this.$advances.className = 'message';

        this.advance = JSON.parse(sessionStorage.getItem('project'));


        this.$advances.appendChild(this.render());


        return this.$advances;

    }

        
    render(project){

        const $section = document.createElement('section');
        $section.innerHTML += `
        <div id=e65_131><div  id="e65_132">
        </div>
        <div id="osito">
            <img src="${user2}">
            <span  id="e65_133">Xi-Jinping</span>
            <span  id="e65_134">offline</span>
        </div>

       <div  id="e65_138"></div>


        <span  id="e65_144">EL cliente le ha elegido para el desarrollo del proyecto, espere sus nuevas indicaciones </span>

        <div  id="e69_164">
            Hola!
        </div>



        `;


        return $section;

    }


    
}

export default Message;