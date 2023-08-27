import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_tK06ufFFluRVey2AUGuoILqGOkBmyoZqONcJSoW1VsReyMDs92CF0FaFvvpO6M7S";

export function fetchCatByBreed(breedId) {
    let params = new URLSearchParams({
        breed_ids: breedId,
   });
   return axios.get(`https://api.thecatapi.com/v1/images/search?${params}`).then((response) => {
        if (!response.data) {
             new Error(response.status);
        }
        else {
             return response.data[0];
        }
   })
}



export function fetchCatByBreed(breedId) {
    return axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    .then(response => response.data[0])
    // .then(response => {
    //     if(!response.data) {
    //         new Error(response.status);
    //     }
    // else {
    //     return response.data;
    // }
    // })
    .catch(error => {
        throw error; 
    });
}




