new Vue({
    el: '#app',
    data: {
      fruits: [
        { name: 'Manzana', quantity: 15, price: 5 },
        { name: 'Fresas', quantity: 2, price: 20 }
      ],
      newFruit: {
        name: '',
        quantity: 0,
        price: 0
      }
    },
    computed: {
      totalQuantity() {
        return this.fruits.reduce((total, fruit) => total + fruit.quantity, 0);
      },
      subtotal() {
        return this.fruits.reduce((total, fruit) => total + (fruit.quantity * fruit.price), 0);
      },
      iva() {
        return this.subtotal * 0.16;
      },
      total() {
        return this.subtotal + this.iva;
      }
    },
    methods: {
      addFruit() {
        if (this.newFruit.name && this.newFruit.quantity > 0 && this.newFruit.price > 0) {
          this.fruits.push({ ...this.newFruit });
          this.newFruit.name = '';
          this.newFruit.quantity = 0;
          this.newFruit.price = 0;
        }
      },
      incrementQuantity(index) {
        this.fruits[index].quantity++;
      },
      decrementQuantity(index) {
        if (this.fruits[index].quantity > 0) {
          this.fruits[index].quantity--;
        }
      }
    }
  });
  