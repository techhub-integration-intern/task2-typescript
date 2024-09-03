export type ProductCategory = "Electronics" | "Clothing" | "Food"

export interface Product {
    id: number,
    name: string,
    quantity: number,
    price: number,
    category: ProductCategory
}


export class Inventory {
    private products : Product[] = []
    private nextId: number = 1;

    constructor(){}

    addProduct(name: string, quantity: number, price: number, category: string): Product | string{
        if (!this.isValidCategory(category)) {
            let error_msg : string = `Invalid category: ${category}. Must be one of Electronics, Clothing, or Food.`
            console.log(error_msg)
            return error_msg;
        }
        const product : Product = {
            id: this.nextId++,
            name: name,
            quantity: quantity,
            price: price,
            category: category as ProductCategory
        }
        this.products.push(product)
        console.log(`Product ${name} added successfully`)
        console.log(product)
        return product
    }

    updateProduct<K extends keyof Product>(productId: number, attributeName: K, newValue: Product[K]): Product | string{
        if (!this.isValidAttribute(attributeName)) {
            let error_msg : string = `Invalid attribute: ${attributeName}. Must be one of name, quantity, price, or category.`
            console.log(error_msg)
            return error_msg;
        }
        const productIdx = this.products.findIndex(p => p.id === productId);
        if (productIdx == -1) {
            let error_msg : string = `Product with ID ${productId} not found.`
            console.log(error_msg)
            return error_msg;
        }
        this.products[productIdx][attributeName] = newValue;
        console.log(`Product ${this.products[productIdx].name} updated successfully`)
        console.log(this.products[productIdx])
        return this.products[productIdx]
    }

    getProduct(productId: number): Product | string{
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            let error_msg : string = `Product with ID ${productId} not found.`
            console.log(error_msg)
            return error_msg;
        }
        console.log(product)
        return product
    }

    getTotal(): number{
        return this.products
            .map(p => p.price) 
            .reduce((total, price) => total + price, 0);
    }

    private isValidCategory(category: string): category is ProductCategory {
        return ["Electronics", "Clothing", "Food"].includes(category);
      }

    private isValidAttribute(attributeName: string): attributeName is keyof Product {
        return ["name", "quantity", "price", "category"].includes(attributeName);
      }
}

const inventory = new Inventory();
inventory.addProduct("Laptop", 10, 1500, "Electronics");
inventory.addProduct("Laptop2", 20, 1500, "Nothingness");
inventory.addProduct("Laptop3", 30, 2000, "Clothing");
inventory.updateProduct(1, "name", "Gaming Laptop"); 
inventory.updateProduct(2, "price", 1200); 
inventory.updateProduct(3, "price", 1200); 
inventory.getProduct(2)
inventory.getProduct(3)
console.log(inventory.getTotal())