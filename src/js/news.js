btnsSearchs = document.querySelectorAll('.search-btn');

for(const btnSearch of btnsSearchs){
    btnSearch.addEventListener('click', () => {
        resetStyles()

        btnSearch.classList.add('active')
    })
}

function resetStyles(){
    btnsSearchs.forEach(btnSearch => {
        btnSearch.classList.remove('active')
        
    });
}