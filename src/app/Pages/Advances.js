import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';
import check from '../../style/assets/icons/check.svg';
import upload from '../../style/assets/icons/upload.svg';
import chat from '../../style/assets/icons/inbox.svg';

class Advances{

    $advances = document.createElement('wrapper');
    url = 'http://localhost:3000/post';
    advance;

    constructor(){

        this.$advances.className = 'advances';

        this.advance = JSON.parse(sessionStorage.getItem('project'));

        this.$advances.appendChild(new Navbar());

        this.$advances.appendChild(new Header());

        const section = document.createElement('section');

        if(this.advance){
            this.$advances.appendChild(this.render(this.advance));
        }else{
            section.innerHTML += `
                <img src="${empty}">
            `
        }

        return this.$advances;

    }

        
    render(project){

        const {name} = project;

        const $section = document.createElement('section');
        $section.innerHTML += `

            <h2 class="title">${name}</h2>

            <section class="progress">

                <div id="deliver" class="circle" status="true">
                    <img src="${check}">
                    <p> Entregado </p> 
                </div>

                <div id="deliver" class="circle">
                    <img src="${check}">
                    <p> Aprobaco </p> 
                </div>

                <div id="deliver" class="circle">
                    <img src="${check}">
                    <p> Pagado </p> 
                </div>

            </section>

            <section class="upload-chat">
                <div>
                    <h2>Entregar</h2>
                    <img src="${upload}";
                </div>
                <div>
                    <h2>Chat</h2>
                    <img src="${chat}";
                </div>
            <section>
            
        `;


        return $section;

    }


    
}

export default Advances;