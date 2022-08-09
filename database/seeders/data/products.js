// This file contains seeding data for products
const { v4: uuidv4 } = require('uuid');

module.exports = [{
    name: 'AIR JORDAN 1 DIOR',
    description: 'Brand new Jordan 1 dior sneakers sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    inventoryId: 1,
    price: '4500',
    discountId: 1,
    brand: 'JORDAN',
    imgToken: '0830d53d-d1cc-488a-8f2e-6a86d3a46144',
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'PUMA BLACK RIDER',
    description: 'Brand new Puma black rider sneakers sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    inventoryId: 2,
    price: '3500',
    discountId: 2,
    brand: 'PUMA',
    imgToken: '6dd4a363-7ecd-4f7a-abce-4ffec22fa446',
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'ADIDAS SAMOA',
    description: 'Brand new Adidas Samoa sneakers sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    inventoryId: 3,
    price: '5000',
    discountId: 1,
    brand: 'ADIDAS',
    imgToken: 'f321d6ab-470b-4727-b952-94090de7da20',
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'ADIDAS LIFESTYLE',
    description: 'Brand new Adidas lifestyle sneakers sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    inventoryId: 4,
    price: '3200',
    discountId: 2,
    brand: 'ADIDAS',
    imgToken: 'ecac32b7-d6b1-412e-af1d-8111c86a070e',
    createdAt: new Date(),
    updatedAt: new Date()
}]