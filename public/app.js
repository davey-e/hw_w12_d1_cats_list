const app = function() {

    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('cat');

    const nameListItem = document.createElement('li');
    nameListItem.innerText = "Name: Grumpy";

    const favFoodListItem = document.createElement('li');
    favFoodListItem.innerText = "Favourite Food: Mice";

    const imageListItem = document.createElement('li');
    imageListItem.innerHTML= '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">';

    unorderedList.appendChild(nameListItem);
    unorderedList.appendChild(favFoodListItem);
    unorderedList.appendChild(imageListItem);

    const cats = document.getElementById('cats');
    cats.appendChild(unorderedList);
}

document.addEventListener("DOMContentLoaded", app);