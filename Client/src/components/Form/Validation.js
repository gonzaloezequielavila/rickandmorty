const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexNum = /\d/;
const validation = (userData) => {


    const errors = {}

    if(!userData.email) errors.email = "An email is required"
    else if(!regexMail.test(userData.email)) errors.email = "Enter a valid email address"
    else if(!userData.password) errors.password = "A password is required"
    else if(!regexNum.test(userData.password)) errors.password = "The password must contain a number"

    return errors
}

export default validation;