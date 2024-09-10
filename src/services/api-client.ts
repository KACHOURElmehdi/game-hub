import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd87fdd62c54848989e7da911c33f3fc7'
    }
})