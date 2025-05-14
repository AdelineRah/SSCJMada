const logoInternational = document.getElementById('logo-international')
logoInternational.addEventListener('click',()=>{
    window.open('https://www.soeursdusacrecoeurdejesus.org','_blank')
})

const modalPays = document.createElement('section')
const drapeau  =document.querySelectorAll(".drapeau")
modalPays.id='modal-pays'
modalPays.style.display = "none"
modalPays.innerHTML = `
    <div class="container-pays">
            <button id="close-modal-pays">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M7 17L16.8995 7.10051" stroke="#f1bc33" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#f1bc33" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <h2>france</h2>
            <div>
                <img src="images/Promotion féminine.jpeg" alt="">
                <ul>
                    <li>21 pers</li>
                    <li>nationalité</li>
                    <li>communauté</li>
                </ul>
            </div>
    </div>
`
document.body.appendChild(modalPays)
const closeModalPays = document.getElementById('close-modal-pays')
closeModalPays.addEventListener('click',()=>{
    modalPays.style.display="none"
})
drapeau.forEach(drap=>{
    drap.addEventListener('click',()=>{
        modalPays.style.display='flex'
    })
})