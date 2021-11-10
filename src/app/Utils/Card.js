const FormLabel = (props) => {

    const {img} = props;

    return`
        <article>
            <a href="./">
                <figure>
                        <img src="${img}">
                </figure>
            </a>
         </article>
    `

}

export default FormLabel;
