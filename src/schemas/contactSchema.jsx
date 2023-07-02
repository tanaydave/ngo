import * as yup from "yup"

const ContactSchema = yup.object({
    first_name: yup.string().required("Please enter your first name"),
    last_name:  yup.string().required("Please enter your last name"),
    email:  yup.string().email().required("Please enter your email "),
    phone: yup.number().min(10).required("Please enter your mobile number"),
    message: yup.string()
}
    

)

export default ContactSchema
