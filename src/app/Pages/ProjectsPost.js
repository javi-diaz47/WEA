import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';

class ProjectsPost{

    $projectsPost = document.createElement('wrapper');
    url = 'http://localhost:3000/post';
    category;

    constructor(){

        this.$projectsPost.className = 'projectsPost';

        this.category = sessionStorage.getItem('post');

    
        if(this.category){
            this.loadPost();
        }

        sessionStorage.removeItem('post');

        this.$projectsPost.appendChild(new Navbar());

        this.$projectsPost.appendChild(new Header());


        return this.$projectsPost;

    }

    async loadPost(){
        
        const posts = await this.getPost();

            if(posts.length == 0){

               
                const section = document.createElement('section');
                section.innerHTML += `
                    <section class="empty">
                        <h2 class="title">${this.category}</h2>
                        <img src=${empty}>
                        <h2 class="empty-title">Lo sentimos pero <br>Aun no hay publicaciones</h2>
                    <section> 
                `
                this.$projectsPost.appendChild(section);
 

            }else{

                const section = document.createElement('section');
                const $posts = posts.map(this.renderPost);
 
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

    async getPost(){

        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify({category: this.category}),
        });


        const posts = await response.json();

        return posts;

    }

    
}

export default ProjectsPost;