import mongoose from 'mongoose'

class ShoppingCartDb {

    constructor() {
        mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
        this.cart = mongoose.model('Cart', { 
            id : Number,
            usr : String,
            items : []
        })

        let ft = new Date()
    }

    all() {

    }

    create() {

    }

    byId() {

    }

    createCart() {

    }
    cart(id) {

    }

    checkout() {

    }

    addItemToCart(item, cartId) {

    }
}

export default new ShoppingCartDb();