import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FormLabel from '../Utils/FormLabel';
import email from '../../style/assets/icons/email.svg';
import lock from '../../style/assets/icons/lock.svg';
import google from '../../style/assets/icons/google.svg';
import facebook from '../../style/assets/icons/facebook-blue.svg';


class Login{

    $login = document.createElement('wrapper');

    constructor(){

        this.$login.className = 'login';

        this.$login.appendChild(new Header({
            btnTitle: "Registro",
            btnUrl: './register.html',
            btnClassName: "btn",
        }));

        const inputs = [
            {
                icon: email,
                labelFor: 'email',
                labelTitle: 'Correo',
                labelType: 'email',
                id: 'login_email'
            },
            {
                icon: lock,
                labelFor: 'password',
                labelTitle: 'Contraseña',
                labelType: 'password',
                id: 'login_password'
            },
        ];

        const $form = document.createElement('form');
        $form.method = "post";
        $form.action = 'http://localhost:3000/login';
        $form.innerHTML += `
                <h2>Ingresar</h2>
                <div class="inputs">
                    ${inputs.map(FormLabel).join(' ')}
                </div>
                <div class="login-with">
                    <button class="btn-login">
                        <img src="${google}">
                        <a>
                            Ingresar con Google
                        </a>
                    </button>
                    <button class="btn-login">
                        <img src="${facebook}">
                        <a>
                            Ingresar con facebook
                        </a>
                    </button>
                </div>
               <input type="submit" value="Ingresar" class="btn">
        `
        
        const url = 'http://localhost:3000/login';
            
        $form.addEventListener('submit', async (ev) => {
            ev.preventDefault();
            const formData = new FormData($form);
            
            const res = await fetch(url, {
                method: "POST",
                body: formData,
            });
            
            const loginStatus  = (await res.json());

            if(await loginStatus.status == false){
                alert('email or password are incorrect');
            }else{
                sessionStorage.setItem('user', JSON.stringify(loginStatus));
                document.location.href = "./projectsHome.html";
            }
            
        })


        this.$login.appendChild($form);
        this.$login.appendChild(new Footer());

        return this.$login;

    }

    
}

export default Login;