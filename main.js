// kita buat sebuah fungsi yang munculkan modal 

const showModal = () => {

    // kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalMenu')

    // kita atur style dari element tersebut 
    // jadikan dia yang terlihat 
    modal.style.display = 'flex'

}

// kita buat fungsi untuk hide element 
const hideModal = () => {

    // kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalMenu')

    // kita atur STYLE dari element tersebut 
    // jadikan dia tersembunyi
    modal.style.display = 'none'

}

const hideaboutAlert = () => {

    // kita ambil element yang akan di SHOW
    let aboutAlert = document.querySelector('.aboutAlert')

    // kita atur STYLE dari element tersebut 
    // jadikan dia tersembunyi
    aboutAlert.style.display = 'none'



}