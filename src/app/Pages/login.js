import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Login{

    $login = document.createElement('wrapper');

    constructor(){

        this.$login.appendChild(new Header({
            btnTitle: "Registro",
            btnUrl: './register.html',
            btnClassName: "btn",
        }));

        //Append Form

        this.$login.appendChild(new Footer());

        return this.$login;

    }

    
}

export default Login;