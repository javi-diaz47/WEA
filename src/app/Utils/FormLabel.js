const FormLabel = (props) => {

    const {icon, labelFor, labelTitle, labelType, id} = props;

    return`
            <label for="${labelFor}" >
                <img src="${icon}">
                ${labelTitle}
            </label>
            <input type="${labelType}" name="${labelFor}" id="${id}" required autocomplete>
    `

}

export default FormLabel
