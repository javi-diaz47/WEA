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

    setOnclick(func){
        this.$button.onclick = () => func;
    }

}

export default Button;