import * as yup from "yup"


const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/

const ContactSchema = yup.object({
    first_name: yup.string().required("Please enter your first name"),
    last_name:  yup.string().required("Please enter your last name"),
    email:  yup.string().email().required("Please enter your email "),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter your mobile number"),
    message: yup.string()
}
    

)

export default ContactSchema
