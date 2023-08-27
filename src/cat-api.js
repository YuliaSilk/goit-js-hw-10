import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_tK06ufFFluRVey2AUGuoILqGOkBmyoZqONcJSoW1VsReyMDs92CF0FaFvvpO6M7S";

export function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
        if(!response.data) {
            new Error(response.status);
        }
    else {
        return response.data;
    }
    })
    .catch(error => {
        throw error; 
    });
}

export function fetchCatByBreed(breedId) {
    return axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    // .then(response => response.data)
    .then(response => {
        if(!response.data) {
            new Error(response.status);
        }
    else {
        return response.data;
    }
    })
    .catch(error => {
        throw error; 
    });
}



// export function fetchBreeds() {
//     return axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
//         if (!response.data) {
//              new Error(response.status);
//         }
//         else {
//              return response.data;
//         }
//    })
// }
// Надіслати запит GET (метод за замовчуванням)
// axios('/user/12345');



// const options = {
//     method: 'GET'
// }
// fetchBreeds('https://api.thecatapi.com/v1/breeds?value&id', options)
// .then(response)