import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import './css/cats_style.css';

import Notiflix, { Notify } from 'notiflix';
import SlimSelect from 'slim-select'



const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

loader.classList.replace('loader', '.is-hidden');
error.classList.add('.is-hidden');
catInfo.classList.add('.is-hidden');

const arrBreedsId = [];
  fetchBreeds()
  .then(data => {
  data.forEach(element => {
  arrBreedsId.push({text: element.name, value: element.id});
  });
})
  .catch(onFetchError);

new SlimSelect({
    select: selector,
    data: arrBreedsId
    });

selector.addEventListener('change', onSelectBreed);
function onSelectBreed(evt) {
  loader.classList.replace('loader', '.is-hidden');
  error.classList.add('.is-hidden');
  catInfo.classList.add('.is-hidden');

  const breedId = evt.currentTarget.value;
  fetchCatByBreed(breedId)
  .then(data => {
    loader.classList.replace('loader', 'is-hidden');
    selector.classList.remove('is-hidden');
    const { url, breeds } = data[0];
    catInfo.innerHTML = `
    <div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div>
    <div class="box"><h1>${breeds[0].name}</h1>
    <p>${breeds[0].description}</p>
    <p><b>Temperament:</b> ${breeds[0].temperament}</p>
    </div>`
    catInfo.classList.remove('is-hidden');
  }) 
  .catch(onFetchError);
};

function onFetchError(error) {
  selector.classList.remove('is-hidden');
  loader.classList.replace('loader', 'is-hidden');

  Notify.failure('Oops! Something went wrong! Try reloading the page!');
};