let initialState = {
    products: [{ img: 'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg', price: 1, name: 'Apple', inStock: Math.ceil(Math.random() * 100), categories: 'FOOD' },
    { img: 'https://images.deliveryhero.io/image/darkstores/groceries-catalog/products/20182252.jpg', price: 1, name: 'Orange', inStock: Math.ceil(Math.random() * 100), categories: 'FOOD' },
    { img: 'https://images.philips.com/is/image/PhilipsConsumer/55PUT7805_56-IMS-ar_AE?$jpglarge$&wid=960', price: 150, name: 'TV', inStock: Math.ceil(Math.random() * 100), categories: 'ELECTRONICS' },
    { img: 'https://m.media-amazon.com/images/I/51ZK41Ai3xL._AC_SX466_.jpg', price: 65, name: 'Blender', inStock: Math.ceil(Math.random() * 100), categories: 'ELECTRONICS' },
    { img: 'https://cdn.al-ain.com/images/2021/5/11/62-143923-playstation-5-price-egypt-prominent-specifications_700x400.jpg ', price: 580, name: 'PS 5', inStock: Math.ceil(Math.random() * 100), categories: 'CONSOL' },
    { img: 'https://gamerawy.com/wp-content/uploads/2021/02/maxresdefault-81.jpg', price: 600, name: 'XBOX X', inStock: Math.ceil(Math.random() * 100), categories: 'CONSOL' },
    { img: 'https://www.91-img.com/pictures/143683-v4-samsung-galaxy-s20-fe-5g-mobile-phone-large-1.jpg', price: 380, name: 'Samsung s20 fe', inStock: Math.ceil(Math.random() * 100), categories: 'PHONE' },
    { img: 'https://www.mytrendyphone.eu/images/Huawei-P40-Pro-256GB-Silver-Frost-6901443378951-29042020-01-p.jpg', price: 430, name: 'huawei p40 pro', inStock: Math.ceil(Math.random() * 100), categories: 'PHONE' },
    { img: 'https://unboxinggeeks.com/wp-content/uploads/2021/01/%D8%B1%D9%8A%D8%B2%D8%AF%D9%8A%D9%86%D8%AA-%D8%A5%D9%8A%D9%81%D9%8A%D9%84.png', price: 50, name: 'Resident Evil Village', inStock: Math.ceil(Math.random() * 100), categories: 'GAMES' },
    { img: 'https://cdn.realsport101.com/images/ncavvykf/realsport-production/b8fa0aa99cd32f14f99a66449d792cb052fe8c4b-1280x720.png?w=686&h=386&auto=format', price: 50, name: 'FIFA 22', inStock: Math.ceil(Math.random() * 100), categories: 'GAMES' }
    ],
    list: []
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    let filterList
    switch (type) {
        case 'categories':

           filterList = state.products.filter(item => item.categories === payload)

            return { ...state, list: filterList }

        default:
            // filterList = state.products.filter(item => item.categories === 'FOOD')
            return state;
    }
};

export const ListCategories = (name) => {
    return {
        type: 'categories',
        payload: name
    };
};