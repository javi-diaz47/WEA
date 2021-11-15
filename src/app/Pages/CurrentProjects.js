import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';

class CurrentProjects{

    $currentProjects = document.createElement('wrapper');
    url = 'http://localhost:3000/post';
    post;

    constructor(){

        this.$currentProjects.className = 'currentProjects';

        // this.projects = JSON.parse(sessionStorage.getItem('individualPost'));

        this.$currentProjects.appendChild(new Navbar());

        this.$currentProjects.appendChild(new Header());


        


        // if(this.post){

        //     const section = document.createElement('section');
        //     section.appendChild(this.renderPost(this.post));
        //     this.$individualPost.appendChild(section);

        // }

        // this.loadProjects();

        return this.$currentProjects;

    }

    async loadProjects(){
        
        const posts = await this.getProjects();

            if(posts.length == 0){

            }else{

                const section = document.createElement('section');
                const $posts = posts.map(this.renderPrjects);
 
                section.innerHTML += `
                    <h2 class="title">${this.category}</h2>
                `

                $posts.forEach($post => section.appendChild($post));

                this.$projectsPost.appendChild(section);
            }
       
    }

    renderPost(post){

        const {title, base_cost} = post;

        const $btn = document.createElement('button');
        $btn.className = 'btn-post';
        $btn.onclick = () => sessionStorage.setItem('individualPost', JSON.stringify(post));
        
        $btn.innerHTML += `
            <a href="/individualPost.html">
                <h2 class="project">${title}</h2>
                <h2 class="project2">${base_cost}$</h2>
            </a>
        `

        return $btn;
    }

    async getProjects(){

        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify({category: this.category}),
        });


        const posts = await response.json();

        return posts;

    }
    
}

export default CurrentProjects;