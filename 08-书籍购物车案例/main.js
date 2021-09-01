const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: "算法导论",
            price: 57.00,
            count: 1
        }, {
            id: 2,
            name: "Android入门",
            price: 982.00,
            count: 1
        }, {
            id: 3,
            name: "Java进阶",
            price: 13.25,
            count: 1
        }, {
            id: 4,
            name: "php小白经",
            price: 10.00,
            count: 1
        }, {
            id: 5,
            name: "C大神之路",
            price: 53.50,
            count: 1
        }]
    },
    methods: {
        remove() {

        },
        addBook(index) {
            this.books[index].count++
        },
        minBook(index) {
            this.books[index].count--
        },
        totalPrice() {
            // let result = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     result += this.books[i].price * this.books[i].count
            // }
            // return result
            //高阶函数
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        },
        handleRemove(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return "¥" + price.toFixed(2)
        }
    }
})