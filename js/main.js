// creo una lista con il percorso delle immagini da mostrare nel carosello
const carouselImages = [
    'media/01.png',
    'media/02.png',
    'media/03.png',
    'media/04.png',
    'media/05.png'
]

// creo un indice per tenere traccia dell'item corrente
let currentItem = 0

// creo un ciclo per creare gli items del carousel dinamicamente
for (i=0; i < carouselImages.length; i++){
    document.querySelector('.my_items').innerHTML += `<div class="my_item d-none">
                                                        <img class="w-100 rounded border border-3" src="${carouselImages[i]}" alt="">
                                                    </div>`
}

// creo una lista contente tutti gli item
const allItmes = document.getElementsByClassName('my_item')
allItmes[currentItem].classList.remove('d-none')

// creo un evento per tenre traccia del next-button
document.getElementById('nextBtn').addEventListener('click', function(){
    // incremento l'indice di 1 e sostituisco le classi
    allItmes[currentItem].classList.add('d-none')
    currentItem++
    allItmes[currentItem].classList.remove('d-none')
    
    document.getElementById('previousBtn').classList.remove('d-none')

    if (currentItem == carouselImages.length - 1){
        document.getElementById('nextBtn').classList.add('d-none')
    }
});

// creo un evento per tenre traccia del previous-button
document.getElementById('previousBtn').addEventListener('click', function(){
    // decremento l'indice di 1 e sostituisco le classi
    allItmes[currentItem].classList.add('d-none')
    currentItem--
    allItmes[currentItem].classList.remove('d-none')

    document.getElementById('nextBtn').classList.remove('d-none')

    if (currentItem <= 0){
        document.getElementById('previousBtn').classList.add('d-none')
    }
})