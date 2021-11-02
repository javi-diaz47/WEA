class Button {

    $button;

    constructor(props){

        const {title, anchor, className} = props

        this.$button = `
            <button class="${className}">
                <a href="${anchor}">
                    ${title}
                </a>
            </button>
        `
    }

    get getBtn(){
        return this.$button;
    }

}

export default Button;