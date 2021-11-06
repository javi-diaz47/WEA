import Button from '../Utils/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FormLabel from '../Utils/FormLabel';
import email from '../../style/assets/icons/email.svg';
import lock from '../../style/assets/icons/lock.svg';
import enterpreneur from '../../style/assets/icons/user.svg';
import enterprise from '../../style/assets/icons/enterprise.svg';

class Register{

    $register = document.createElement('wrapper');

    constructor(){

        this.$register.className = 'register';

        this.$register.appendChild(new Header({
            btnTitle: "Ingresar",
            btnUrl: './login.html',
            btnClassName: "btn",
        }));

        const inputs = [
            {
                icon: email,
                labelFor: 'email',
                labelTitle: 'Correo',
                labelType: 'email',
                id: 'register_email'
            },
            {
                icon: lock,
                labelFor: 'password',
                labelTitle: 'Contraseña',
                labelType: 'password',
                id: 'register_password'
            },
            {
                icon: lock,
                labelFor: 'verifyPassword',
                labelTitle: 'Verificar Contraseña',
                labelType: 'password',
                id: 'register_verifyPassword'
            },

        ];

        const radioInputs = [
            {
                icon: enterpreneur,
                labelFor: 'type',
                labelTitle: 'emprendedor',
                labelType: 'radio',
                id: 'enterpreneur'
            },
            {
                icon: enterprise,
                labelFor: 'type',
                labelTitle: 'empresa',
                labelType: 'radio',
                id: 'enterprise'
           },
    
        ]
                
        this.$register.innerHTML += `
            <form method="get">
                <h2>Registro</h2>
                <div class="inputs">
                    ${inputs.map(FormLabel).join(' ')}
                </div>

                <div class="radio">
                   <label for="enterpreneur">
                        <input class="enterpreneur" type="radio" name="type" id="enterpreneur" checked="checked" required>
                        <svg class="enterpreneur" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 14.0625C16.3818 14.0625 19.5312 10.9131 19.5312 7.03125C19.5312 3.14941 16.3818 0 12.5 0C8.61816 0 5.46875 3.14941 5.46875 7.03125C5.46875 10.9131 8.61816 14.0625 12.5 14.0625ZM18.75 15.625H16.0596C14.9756 16.123 13.7695 16.4062 12.5 16.4062C11.2305 16.4062 10.0293 16.123 8.94043 15.625H6.25C2.79785 15.625 0 18.4229 0 21.875V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V21.875C25 18.4229 22.2021 15.625 18.75 15.625Z" fill="black"/>
                        </svg>
                       Emprendedor
                    </label>

                    <label for="enterprise">
                        <input class="enterprise" type="radio" name="type" id="enterprise" required>
                        <svg class="enterprise" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2891 23.4375H20.3125V1.17188C20.3125 0.524658 19.7878 0 19.1406 0H2.73438C2.08716 0 1.5625 0.524658 1.5625 1.17188V23.4375H0.585938C0.262354 23.4375 0 23.6999 0 24.0234V25H21.875V24.0234C21.875 23.6999 21.6126 23.4375 21.2891 23.4375ZM6.25 3.71094C6.25 3.38735 6.51235 3.125 6.83594 3.125H8.78906C9.11265 3.125 9.375 3.38735 9.375 3.71094V5.66406C9.375 5.98765 9.11265 6.25 8.78906 6.25H6.83594C6.51235 6.25 6.25 5.98765 6.25 5.66406V3.71094ZM6.25 8.39844C6.25 8.07485 6.51235 7.8125 6.83594 7.8125H8.78906C9.11265 7.8125 9.375 8.07485 9.375 8.39844V10.3516C9.375 10.6751 9.11265 10.9375 8.78906 10.9375H6.83594C6.51235 10.9375 6.25 10.6751 6.25 10.3516V8.39844ZM8.78906 15.625H6.83594C6.51235 15.625 6.25 15.3626 6.25 15.0391V13.0859C6.25 12.7624 6.51235 12.5 6.83594 12.5H8.78906C9.11265 12.5 9.375 12.7624 9.375 13.0859V15.0391C9.375 15.3626 9.11265 15.625 8.78906 15.625ZM12.5 23.4375H9.375V19.3359C9.375 19.0124 9.63735 18.75 9.96094 18.75H11.9141C12.2376 18.75 12.5 19.0124 12.5 19.3359V23.4375ZM15.625 15.0391C15.625 15.3626 15.3626 15.625 15.0391 15.625H13.0859C12.7624 15.625 12.5 15.3626 12.5 15.0391V13.0859C12.5 12.7624 12.7624 12.5 13.0859 12.5H15.0391C15.3626 12.5 15.625 12.7624 15.625 13.0859V15.0391ZM15.625 10.3516C15.625 10.6751 15.3626 10.9375 15.0391 10.9375H13.0859C12.7624 10.9375 12.5 10.6751 12.5 10.3516V8.39844C12.5 8.07485 12.7624 7.8125 13.0859 7.8125H15.0391C15.3626 7.8125 15.625 8.07485 15.625 8.39844V10.3516ZM15.625 5.66406C15.625 5.98765 15.3626 6.25 15.0391 6.25H13.0859C12.7624 6.25 12.5 5.98765 12.5 5.66406V3.71094C12.5 3.38735 12.7624 3.125 13.0859 3.125H15.0391C15.3626 3.125 15.625 3.38735 15.625 3.71094V5.66406Z" fill="black"/>
                        </svg>
                        Empresa
                   </label>
                </div>
                <input type="submit" value="Registrame" >
            </form>
        `





        this.$register.appendChild(new Footer());


        return this.$register;

    }

    
}

export default Register;