const URI = 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US'
const PETICION = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQBgBSSSw1XjvoZyCSJn9kVxnqAuzBIk--shYQIRY2A49bLh3MBEmBN8NCq6nkSygZX9R6_5BXR91GNTKVux5HRjK18MTR5nhSfYshyjOnokuFt6JVmofn2LeSBWGfOsbWJlIWysya5B5gRLvGNCNDG49Xa5qmdpuudPHkaIEQGde1DtlUf25Xzubj4QcVUBPXo'
    }
}

fetch(URI,PETICION).then(function(respuesta){
    return respuesta.json()
}).then(function(respuesta){
    console.log(respuesta)
}).catch(function(error){
    console.log(error)
})