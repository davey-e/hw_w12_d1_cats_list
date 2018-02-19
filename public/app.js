const addCat = function(name, favFood, imageHTML){

    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('cat');

    const nameListItem = document.createElement('li');
    nameListItem.innerText = "Name: " + name;

    const favFoodListItem = document.createElement('li');
    favFoodListItem.innerText = "Favourite Food: " + favFood;

    const imageListItem = document.createElement('li');
    imageListItem.innerHTML= imageHTML;

    unorderedList.appendChild(nameListItem);
    unorderedList.appendChild(favFoodListItem);
    unorderedList.appendChild(imageListItem);

    const cats = document.getElementById('cats');
    cats.appendChild(unorderedList);

}


const app = function() {

    addCat('Grumpy', 'Mice', '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">')
    
}

document.addEventListener("DOMContentLoaded", app);