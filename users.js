const addBtn = document.getElementById('Add-Button');
addBtn.addEventListener('click',addUser);

function addUser(){
axios.get('https://randomuser.me/api')
.then(function(response){
    console.log(response.data.results);
    const userImg = response.data.results[0].picture.medium ;
    const userName = response.data.results[0].name.first;
    const userSurname = response.data.results[0].name.last;

    createCard (userImg,userName,userSurname);
})
.catch(function(error) {
    console.log(error)
})
}

function createCard(image,name,surname) {

    let images = document.createElement('img');
    images.src= image;
    images.className = 'img-fluid';

    let completeName = document.createElement('h4');
    completeName.innerText = name + '' + surname;

    let  card = document.createElement('div');
    card.className = "col-4";
    card.appendChild(images);
    card.appendChild(completeName);

    let galleryElement = document.getElementById('gallery');
    galleryElement.appendChild(card);
}