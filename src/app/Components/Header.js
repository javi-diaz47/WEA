import logo from '../../style/assets/icons/logo.svg';
import Button from '../Utils/Button';

class Header{

    $header = document.createElement('header');
    constructor(props={}){

        this.$header.className = 'header';
        
        // const $logo = document.createElement('img');
        // $logo.src = logo;

        const $logo = `
            <a href="./">
                <img src="${logo}" >
            </a>
        `;

        this.$header.innerHTML += $logo;

        const {btnTitle, btnUrl, btnClassName} = props;

        if(btnTitle){
            const $btn = new Button({
                    title: btnTitle,
                    anchor: btnUrl,
                    className: btnClassName,
                });

            this.$header.innerHTML += $btn.getBtn;


        }

        return this.$header;

    }






}

export default Header;