const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.listStyle = "none";
gallery.style.justifyContent = "space-between";
gallery.style.gap = "20px";
const createGallery = images
  .map(item => `<li class="gallery__item" style="flex-basis: calc((100% - 40px) / 3);">
  <img width="100%" height="100%" style="display: block;" src="${item.url}" alt="${item.alt} class="gallery__image"</li>`);
   gallery.insertAdjacentHTML("beforeend", createGallery);






