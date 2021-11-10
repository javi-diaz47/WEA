import Button from '../Utils/Button';
import Header from '../Components/Header';


import img1 from '../../style/assets/images/something.png';
import img2 from '../../style/assets/images/code.png';
import img3 from '../../style/assets/images/music.png';
import img4 from '../../style/assets/images/cook.png';
import img5 from '../../style/assets/images/cine.png';
import img6 from '../../style/assets/images/writer.png';
import img7 from '../../style/assets/images/graphicDesigner.png';
import img8 from '../../style/assets/images/cine.png';

import Card from '../Utils/Card';

class ProjectsHome{

    $projectHome = document.createElement('wrapper');

    constructor(){

        this.$projectHome.className = 'projectsHome';

        this.$projectHome.appendChild(new Header);

        const cards = [
            {img: img1},
            {img: img2},
            {img: img3},
            {img: img4},
            {img: img5},
            {img: img6},
            {img: img7},
            {img: img8},
            
        ]

        this.$projectHome.innerHTML += `
            <h2>Encuentra tu proximo<br>proyecto:</h2>
            <section>
                ${cards.map(Card).join(' ')}
            </section>

        `;



        return this.$projectHome;

    }

    
}

export default ProjectsHome;