import logo from'../../style/assets/images/Welcome.svg';
import Button from '../Utils/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Home {

    $home = document.createElement('wrapper');

    constructor(){

        this.$home.className = 'home';

        const $logo = document.createElement('img');
        $logo.src = logo;
        $logo.className = 'welcome-img';


        this.$home.appendChild(new Header({
            btnTitle: "Ingresar",
            btnUrl: './login.html',
            btnClassName: "btn",
        }));

        this.$home.appendChild($logo);

        this.$home.innerHTML += `

            <div class="buttons">        
                ${ new Button({
                    title: "registrame",
                    anchor: "./register.html",
                    className: "btn"
                }).getBtn}
                
                ${ new Button({
                    title: "Sobre nosotros",
                    anchor: "./projectsHome.html",
                    className: "btn about-us-btn"
                }).getBtn} 

            <div>
        `;


        this.$home.appendChild(new Footer());

        return this.$home;
    }

}

export default Home;