const CAT_ARRAY = [

    {name: 'Boba', favFood: 'Sock fluff', imageLink: '<img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg">'},
    {name: 'Barnaby', favFood: 'Tuna', imageLink: '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">'},
    {name: 'Max', favFood: 'Whiskas Temptations', imageLink: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'},
    {name: 'Grumpy', favFood: 'Mice', imageLink: '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">'}
];


const addCat = function(name, favFood, imageLink){

    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('cat');

    const nameListItem = document.createElement('li');
    nameListItem.innerText = 'Name: ' + name;

    const favFoodListItem = document.createElement('li');
    favFoodListItem.innerText = 'Favourite Food: ' + favFood;

    const imageListItem = document.createElement('li');
    imageListItem.innerHTML= imageLink;

    unorderedList.appendChild(nameListItem);
    unorderedList.appendChild(favFoodListItem);
    unorderedList.appendChild(imageListItem);

    const cats = document.getElementById('cats');
    cats.appendChild(unorderedList);

}

const app = function() {

    for(i=0; i < CAT_ARRAY.length; i++){
        addCat(CAT_ARRAY[i].name, CAT_ARRAY[i].favFood, CAT_ARRAY[i].imageLink);
    }
    
}

document.addEventListener("DOMContentLoaded", app);