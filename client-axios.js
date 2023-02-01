import axios from 'axios'

(async () => {
    try {
        const response = await axios.request({
            baseURL: 'http://gorest.co.in',
            url: '/public/v2/users',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 59f0ecb87cf3b3cf56169d895593a8a9fa5c89c5185c4efad62e28d569d320aa'
            }
        })
        console.log(response.data)
    } catch(err) {
        console.log(err.message)
    }

})()