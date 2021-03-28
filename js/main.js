

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item, img ='https://notice.ru/upload/iblock/a2d/a2d28f214936864207f3b7afeea744fd.jpg') => {
    return `<div class="product-item">   

                <img src="${img}" alt="image" class="product-img">
                <h3 class="title">${item.title}</h3>
                <p class="price">${item.price} руб</p>               
                <button class="buy-btn">Купить</button>
            </div>`
};
/* ВАРИАНТ В ЗАДАНИИ

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item, item.img)).join(' ');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderProducts(products); 

*/

const renderPage = list => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};
    console.log(products);

renderPage(products);