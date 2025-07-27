const characters = document.querySelectorAll('.character');
console.log(characters);

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        
        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');

        character.classList.add('selected');


    });
    
});