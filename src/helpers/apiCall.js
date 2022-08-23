import axios from "axios"

export const makeAPICall = {
    post: async (endpoint, values) => {
        let response, data, error
    
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`, values)
        .then(res => {
            data = res.data
        })
        .catch(err => {
            error = err
        })

        response = {
            data,
            error
        }
        return response
    },

    get: async (endpoint) => {
        let response, data, error
    
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`)
        .then(res => {
            data = res
        })
        .catch(err => {
            error = err
        })

        response = {
            data,
            error
        }
        return response
    }
}