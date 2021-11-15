const FormLabel = (props) => {

    const {category, img} = props;
    
    const $btn = document.createElement('button');
    $btn.onclick = () => {
        sessionStorage.setItem('post', category);
    }

    $btn.innerHTML += `
        <a href="./projectsPost.html">
            <figure>
                    <img src="${img}">
            </figure>
        </a>
 
    `
    
    return $btn;

}

export default FormLabel;
