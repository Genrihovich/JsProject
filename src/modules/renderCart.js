const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartModal = document.querySelector('.cart')
    const cartSendBtn = cartModal.querySelector('.cart-confirm')

    cartWrapper.innerHTML = ''

    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `)
        //если корзина пуста то кнопка не активна Оформить заказ
        cartSendBtn.setAttribute('disabled', true);
    } else {
        cartSendBtn.removeAttribute('disabled');

        goods.forEach((goodsItem) => {
            cartWrapper.insertAdjacentHTML('beforeend', `
        
                <div class="card" data-key="${goodsItem.id}">
                    ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}                
                    <div class="card-img-wrapper">
                <span class="card-img-top"
                    style="background-image: url('${goodsItem.img}')"></span>
            </div>
            <div class="card-body justify-content-between">
                <div class="card-price">${goodsItem.price}</div>
                <h5 class="card-title">${goodsItem.title}</h5>
                <button class="btn btn-primary">Удалить</button>
            </div>
                </div >
            
        `)
        });
    }

}
export default renderCart