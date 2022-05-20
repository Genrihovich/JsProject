const getData = (str) => {
    return fetch(
        `https://jstest-ce73c-default-rtdb.firebaseio.com/goods.json`
    )
        .then(response => {
            return response.json()
        })


    // return fetch(
    //     `https://jstest-ce73c-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    //     .then(response => {
    //         return response.json()
    //     })
}

export default getData