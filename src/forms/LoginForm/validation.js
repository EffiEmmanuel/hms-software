import * as yup from 'yup'

const loginSchema = yup.object().shape({
    username: yup.string().min(2).max(12).required('* This field is required'),
    password: yup.string().min(8).max(20).required('* This field is required')
})

export default loginSchema