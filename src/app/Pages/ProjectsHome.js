import Button from '../Utils/Button';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

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

        
        const cards = [
            {
                category: 'art',
                img: img1
            },
            {
                category: 'code',
                img: img2
            },
            {
                category: 'music',
                img: img3
            },
            {
                category: 'cook',
                img: img4
            },
            {
                category: 'cine',
                img: img5
            },
            {
                category: 'writer',
                img: img6
            },
            {
                category: 'design',
                img: img7
            },
            {
                category: 'cine',
                img: img8
            },
            
        ]
       
        const section = document.createElement('section');
        const $cards = cards.map(Card);
        $cards.forEach($card => section.appendChild($card));


        this.$projectHome.appendChild(new Navbar());

        this.$projectHome.appendChild(new Header());

        const $h2 = document.createElement('h2');
        $h2.style = 'font-size: 1.4rem; padding: 0 2rem;';
        $h2.textContent = 'Encuentra tu proximo proyecto'

        this.$projectHome.appendChild($h2);

        this.$projectHome.appendChild(section);
        
        return this.$projectHome;

    }

    
}

export default ProjectsHome;