import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key : '25aa99c1878c43e8bfa430dc0d0d9fff'
    }
})