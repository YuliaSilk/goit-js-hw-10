import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_tK06ufFFluRVey2AUGuoILqGOkBmyoZqONcJSoW1VsReyMDs92CF0FaFvvpO6M7S";

export function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
        if (!response.data) {
             new Error(response.status);
        }
        else {
             return response.data;
        }
   })
}



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




