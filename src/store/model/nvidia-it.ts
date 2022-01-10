import {Store} from './store';

export const NvidiaIT: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.buy',
      text: ['aggiungi al carrello', 'ACQUISTA ORA'],
    },
    outOfStock: {
      container: '.buy',
      text: ['PRODOTTO ESAURITO'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://store.nvidia.com/it-it/geforce/store/nvlinks/?page=1&limit=9&locale=it-it&category=NVLINKS',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url: 'https://store.nvidia.com/it-it/geforce/store/gpu/?page=1&limit=9&locale=it-it&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url: 'https://store.nvidia.com/it-it/geforce/store/gpu/?page=1&limit=9&locale=it-it&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070ti',
      url: 'https://store.nvidia.com/it-it/geforce/store/gpu/?page=1&limit=9&locale=it-it&category=GPU&gpu=RTX%203070%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://store.nvidia.com/it-it/geforce/store/gpu/?page=1&limit=9&locale=it-it&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url: 'https://store.nvidia.com/it-it/geforce/store/gpu/?page=1&limit=9&locale=it-it&category=GPU&gpu=RTX%203080%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url: 'https://store.nvidia.com/it-it/geforce/store/gpu/?page=1&limit=9&locale=it-it&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
  ],
  name: 'nvidia-it',
};
