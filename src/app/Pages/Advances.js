import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';

class Advances{

    $individualPost = document.createElement('wrapper');
    url = 'http://localhost:3000/post';
    post;

    constructor(){

        this.$individualPost.className = 'individualPost';

        this.post = JSON.parse(sessionStorage.getItem('individualPost'));

        this.$individualPost.appendChild(new Navbar());

        this.$individualPost.appendChild(new Header());


        if(this.post){

            const section = document.createElement('section');
            section.appendChild(this.renderPost(this.post));
            this.$individualPost.appendChild(section);

        }
        return this.$individualPost;

    }

        
    renderPost(post){

        const {title, description, category, base_cost} = post;

        const $btn = document.createElement('article');
        $btn.className = 'post';

        $btn.innerHTML += `
            <h2 class="title">${title}</h2>
            <section class="desc">
                <h2 class="title-desc">Descripcion</h2>
                <p class="">${description}</p>
            </section>
            <section class="category">
                <h2 class="title-category">Categoria</h2>
                <p class="">${category}</p>
            </section>
            <section class="base_cost">
                <h2 class="title-base_cost">Costo Base</h2>
                <p class="">${base_cost}$</p>
            </section>
    
            <button class="btn">Postularse</button>    

        `

        return $btn;
    }


    
}

export default Advances;