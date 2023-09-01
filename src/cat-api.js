import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_tK06ufFFluRVey2AUGuoILqGOkBmyoZqONcJSoW1VsReyMDs92CF0FaFvvpO6M7S";


// axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
//      console.log(response);
// })


    
function fetchBreeds() {
      return axios.get('https://api.thecatapi.com/v1/breeds')
     .then((response) => response.data)
     .catch((error) => error.message)
}

function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
     .then((response) => response.data[0])
     .catch((error) => error.message)
}


export { fetchBreeds, fetchCatByBreed }


// export function fetchBreeds() {
//     return axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
       
//     if (!response.data) {
//              new Error(response.status);
//         }
//         else {
//              return response.data;
//         }
//    })
//    .catch(error)
// }



// export function fetchCatByBreed(breedId) {
//     let params = new URLSearchParams({
//         breed_ids: breedId,
//    });
//    return axios.get(`https://api.thecatapi.com/v1/images/search?${params}`).then((response) => {
//         if (!response.data) {
//              new Error(response.status);
//         }
//         else {
//              return response.data[0];
//         }
//    })
// }




