import axios from 'axios'
import { loginType, registerType } from '../../types'

const URL:string  = process.env.REACT_APP_URL || 'http://localhost:5000'

export const registerUser = async(user:registerType) => {
    console.log("He")
    const response = await axios.post(`${URL}/user/register`,user)
    console.log(response)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data

}

export const loginUser = async(user:loginType) => {
    const response = await axios.post(`${URL}/user/login`,user)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}

