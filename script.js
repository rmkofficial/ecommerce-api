document.addEventListener('DOMContentLoaded', function () {
    async function fetchProducts(url) {
        let data = await fetch(url);
        let response = await data.json();
        console.log(response);
    };
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});