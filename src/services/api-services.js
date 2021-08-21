const axios = require('axios');

export async function fetchData(data, page, per_page) {
    return  axios.get(`https://pixabay.com/api/?key=23014303-cccfcd18e39dcef17b63261f1&q=${data}&page=${page}&per_page=${per_page}`)
            .then(result => new Promise(resolve => resolve(result.data)))
            .catch(e => new Promise(resolve => resolve([])))
    }