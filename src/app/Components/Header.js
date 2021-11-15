import logo from '../../style/assets/icons/logo.svg';
import Button from '../Utils/Button';

class Header{

    $header = document.createElement('header');
    
    constructor(props={}){

        this.$header.className = 'header';
        this.$header.id = 'header';
        
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

        }else{

            const $burgerBtn = document.createElement('button');
            $burgerBtn.className = 'burger-btn';
            $burgerBtn.innerHTML += `
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.625 27.75H1.375C0.742188 27.75 0.25 28.3125 0.25 28.875V31.125C0.25 31.7578 0.742188 32.25 1.375 32.25H30.625C31.1875 32.25 31.75 31.7578 31.75 31.125V28.875C31.75 28.3125 31.1875 27.75 30.625 27.75ZM30.625 18.75H1.375C0.742188 18.75 0.25 19.3125 0.25 19.875V22.125C0.25 22.7578 0.742188 23.25 1.375 23.25H30.625C31.1875 23.25 31.75 22.7578 31.75 22.125V19.875C31.75 19.3125 31.1875 18.75 30.625 18.75ZM30.625 9.75H1.375C0.742188 9.75 0.25 10.3125 0.25 10.875V13.125C0.25 13.7578 0.742188 14.25 1.375 14.25H30.625C31.1875 14.25 31.75 13.7578 31.75 13.125V10.875C31.75 10.3125 31.1875 9.75 30.625 9.75ZM30.625 0.75H1.375C0.742188 0.75 0.25 1.3125 0.25 1.875V4.125C0.25 4.75781 0.742188 5.25 1.375 5.25H30.625C31.1875 5.25 31.75 4.75781 31.75 4.125V1.875C31.75 1.3125 31.1875 0.75 30.625 0.75Z" fill="black"/>
                </svg>
            `;

            $burgerBtn.onclick = () => {
                const nav = document.querySelector('#navbar');
                nav.classList.toggle('nav-active');
                $burgerBtn.classList.toggle('burger-btn-active');
            };


            this.$header.appendChild($burgerBtn);

        }

        return this.$header;

    }


}

export default Header;