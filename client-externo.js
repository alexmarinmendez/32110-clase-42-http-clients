import https from 'https'

// const options = {
//     hostname: 'gorest.co.in',
//     port: 443,
//     path: '/public/v2/users',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 59f0ecb87cf3b3cf56169d895593a8a9fa5c89c5185c4efad62e28d569d320aa'
//     },
//     responseType: 'json'
// }

// const req = https.request(options, (res) => {
//     console.log(`Status => ${res.statusCode}`)
//     res.on('data', data => {
//         // process.stdout.write(data)
//         console.log(JSON.parse(data))
//     })
// })

// req.on('error', error => {
//     console.log(`Error en request => ${error.message}`)
// })

// req.end()

// post
const data = JSON.stringify({
    name: 'Shakira',
    gender: 'female',
    email: 'shakira@gmail.com',
    status: 'active'
})

const postOptions = {
    hostname: 'gorest.co.in',
    port: 443,
    path: '/public/v2/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': 'Bearer 59f0ecb87cf3b3cf56169d895593a8a9fa5c89c5185c4efad62e28d569d320aa'
    },
}

const postReq = https.request(postOptions, (res) => {
    console.log(`Status => ${res.statusCode}`)
    res.on('data', data => {
        console.log(JSON.parse(data))
    })
})

postReq.on('error', error => {
    console.log(error.message)
})

postReq.write(data)
postReq.end()