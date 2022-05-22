import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = cartModal.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')
    const cartTotal = cartModal.querySelector('.cart-total > span')
    const cartWrapper = cartModal.querySelector('.cart-wrapper')
    const cartSendBtn = cartModal.querySelector('.cart-confirm')
    const countGoodsLabel = document.querySelector('.counter')
    let countGoodsCart = 0

    const openCart = () => {

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        // метка счетчик над корзиной
        countGoodsLabel.textContent = countGoodsLabel.textContent = cart.length;

        cartModal.style.display = 'flex'

        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)

    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartCloseBtn.addEventListener('click', closeCart)

    // ===================  клик по товару для корзины  =====================
    goodsWrapper.addEventListener('click', (event) => {
        //console.log(event.target);
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))
            // console.log(goodItem);

            // счетчик для корзины
            countGoodsLabel.textContent = cart.length;
        }
    })

    // ----------------------- Удалить с корзины --------------------
    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            //получаем весь массив cart
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            //получить тот эл-нт который кликнули
            const card = event.target.closest('.card')
            const key = card.dataset.key

            //из массива cart удалить эл-нт с идентификатором key и 
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            cart.splice(index, 1)
            ///splice(индекс удаляемого эл-та, кол-во)
            //              console.log(index);

            //записать в LocalStorage новый массив данных
            localStorage.setItem('cart', JSON.stringify(cart))
            //  рендерим
            renderCart(cart)
            //подсчет стоимости
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
            //счетчик над корзиной
            countGoodsLabel.textContent = cart.length;
        }

    })

    /* =============== отправка товара с корзины на ОФОРМИТЬ ЗАКАЗ ==================
1. Получить весь массив карт
2. импортировать функцию postData
3. отправить постзапросом массив карт на выполнение
4. очистить массив карт
5. перерисовать корзину
    */
    cartSendBtn.addEventListener('click', () => {
        //                       console.log('send');
        //1. Получить весь массив карт
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        // передать в postData весь массив cart
        postData(cart).then(() => {
            localStorage.removeItem('cart')
            //перерендерим передавая пустой массив
            renderCart([])
            //обнуляем цену
            cartTotal.textContent = 0;
            //обнуляем кол-во над корзиной
            countGoodsLabel.textContent = 0;
        })
    })
}
export default cart




