function summonKazu(number) {
    for(let i = 0; i < number; i++) {

         const kazu = document.createElement('div')
        kazu.classList.add('kazu')
        kazu.style.left = Math.floor(Math.random() * (window.innerWidth - 300)) + 'px'
        kazu.style.top = Math.floor(Math.random() * (window.innerHeight - 300)) + 'px'
        document.body.appendChild(kazu)
        kazu.addEventListener('click', clicked)
    }
   
}

function clicked(e) {
    document.body.removeChild(e.target)
}

summonKazu(8);
clicked();