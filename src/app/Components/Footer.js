import facebook from '../../style/assets/icons/facebook.svg';
import instagram from '../../style/assets/icons/instagram.svg';
import twitter from '../../style/assets/icons/twitter.svg';
import heart from '../../style/assets/icons/heart.svg';

class Footer{

    $footer = document.createElement('footer');

    constructor(){

        this.$footer.className="footer";

        this.$footer.innerHTML += `
            <wrapper class="contact-us">
                <ul>
                    <li>
                        <a href="https://facebook.com">
                            <image class="icon" src="${facebook}">
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com">
                            <image class="icon" src="${instagram}">
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com">
                            <image class="icon" src="${twitter}">
                        </a>
                    </li>

                </ul>

                <p>
                    Creado con 
                        <image src="${heart}">
                    desde Latam
                </p>

            </wrapper>
        `

        return this.$footer;

    }


}

export default Footer;