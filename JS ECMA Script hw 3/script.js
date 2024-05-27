// Задание 1
class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Имя сотрудника ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Сотрудник ${this.name} из отдела ${this.department}`);
    }
}

//Пример
const employee = new Employee("Ivan Ivanov");
employee.displayInfo();

const manager = new Manager("Alla Petrova", "Sales");
manager.displayInfo();

//Задание 2
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
        this.totalPrise = 0;
    }
    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        for (let value in this.products) {
            this.totalPrise += this.products[value].price;
        }
        return this.totalPrise;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 5000);
order.addProduct(product1);

const product2 = new Product("Headphones", 1000);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 6000