const characters = document.querySelectorAll('.character');
console.log(characters);

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };

        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');

        character.classList.add('selected');

        const characterBigImage = document.querySelector('.character-image');
        const idCharacter = character.attributes.id.value;
        characterBigImage.src = `/src/imagens/card-${idCharacter}.png`;

        const characterName = document.getElementById('character-name');
        characterName.innerText = character.getAttribute('data-name');

        const characterDescription = document.getElementById('character-description');
        characterDescription.innerText = character.getAttribute('data-description');
    });
});