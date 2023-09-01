import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
// import './css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');
 
  loader.classList.add('is-hidden');
  error.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');
 
  fetchBreeds()
    .then(renderBreedSelect)
    .then(new SlimSelect({
      select: '.breed-select'
    }))
    .catch(onFetchError);
  
  breedSelect.addEventListener('change', onSelectBreed);
  function renderBreedSelect(json) {
    const markup = json.map(el => `<option value='${el.id}'>${el.name}</option>`).join('');
    breedSelect.insertAdjacentHTML('beforeend', markup);
    breedSelect.value = null;
  }
  function onSelectBreed(evt) {
    loader.classList.remove('is-hidden');
    error.classList.add('is-hidden');
    catInfo.classList.add('is-hidden');
    const breedId = evt.currentTarget.value;
    fetchCatByBreed(breedId)
      .then(renderCatCard)
      .catch(err => {
        console.log(err);
        onFetchError(err);
      });
  }

  function renderCatCard(data) {
    const breedInfo = data.breeds[0];
    const img = {
      url: data.url,
      alt: breedInfo.name,
    };

    const markup = `
      <h2 class="header">${breedInfo.name}</h2>
      <div class="card">
        <img src="${img.url}" alt="Cat breed ${img.alt}" class="image">
        <div class="description">
          <p class="text">${breedInfo.description}</p>
          <p class="text"><b>Temperament:</b> ${breedInfo.temperament}</p>
        </div>
      </div>
    `;

    catInfo.innerHTML = markup;
    loader.classList.add('is-hidden');
    catInfo.classList.remove('is-hidden');
  }

  function onFetchError(error) {
    console.error(error);
    loader.classList.add('is-hidden');
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  }
});