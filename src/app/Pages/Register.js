import Button from '../Utils/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Register{

    $register = document.createElement('wrapper');

    constructor(){

        this.$register.appendChild(new Header({
            btnTitle: "Ingresar",
            btnUrl: './login.html',
            btnClassName: "btn",
        }));

        //Append Form

        this.$register.appendChild(new Footer());


        return this.$register;

    }

    
}

export default Register;