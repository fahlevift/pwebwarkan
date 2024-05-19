// const navbar = document.getElementsByTagName('nav')[0];
// window.addEventListener('scroll', function(){
//     if(window.scrollY > 1){
//         navbar.classList.replace('bg-transparent', 'nav-color');
//     }else if(window.scrollY <= 0){
//         navbar.classList.replace('nav-color', 'bg-transparent');
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const incrementButtons = document.querySelectorAll('.btn-primary:nth-child(3)');
    const decrementButtons = document.querySelectorAll('.btn-primary:nth-child(1)');
    const quantitySpans = document.querySelectorAll('.quantity');

    // Tambahkan event listener untuk tombol +
    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantitySpans[index].innerText);
            quantity++;
            quantitySpans[index].innerText = quantity;
        });
    });

    // Tambahkan event listener untuk tombol -
    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantitySpans[index].innerText);
            if (quantity > 0) {
                quantity--;
                quantitySpans[index].innerText = quantity;
            }
        });
    });
});
