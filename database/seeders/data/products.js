// This file contains seeding data for products
const { v4: uuidv4 } = require('uuid');

module.exports = [{
    name: 'AIR JORDAN 1 DIOR',
    description: 'Brand new Jordan 1 dior sneakers',
    sku: uuidv4(),
    inventoryId: 29,
    price: '4500',
    discountId: 14,
    brand: 'JORDAN',
    imgId: 'K5Vd6bW',
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'PUMA BLACK RIDER',
    description: 'Brand new Puma black rider sneakers',
    sku: uuidv4(),
    inventoryId: 30,
    price: '3500',
    discountId: 14,
    brand: 'PUMA',
    imgId: 'L5V46bW',
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'ADIDAS SAMOA',
    description: 'Brand new Adidas Samoa sneakers',
    sku: uuidv4(),
    inventoryId: 31,
    price: '5000',
    discountId: 14,
    brand: 'ADIDAS',
    imgId: 'T5V46bE',
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'ADIDAS LIFESTYLE',
    description: 'Brand new Adidas lifestyle sneakers',
    sku: uuidv4(),
    inventoryId: 32,
    price: '3200',
    discountId: 13,
    brand: 'ADIDAS',
    imgId: 'P5D46bW',
    createdAt: new Date(),
    updatedAt: new Date()
}]