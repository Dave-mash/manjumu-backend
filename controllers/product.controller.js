
const db = require("../database/models");
const { Product } = db;
const { v4: uuidv4 } = require('uuid');

const products = [{
    name: 'AIR JORDAN 1 DIOR',
    description: 'Brand new Jordan 1 dior sneakers adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    path: `air-jordan-1-dior-f7n2nurf3i`, // ${Math.random().toString(32).slice(2)}
    inventoryId: 29,
    price: '4500',
    discountId: 14,
    brand: 'JORDANS',
    rating: '1',
    media: [
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/jordans%2Fair%20jordan%201%20dior.2.jpeg?alt=media&token=0830d53d-d1cc-488a-8f2e-6a86d3a46144',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/jordans%2Fair%20jordan%201%20dior.3.jpeg?alt=media&token=db6a8df6-6ada-43fe-b744-6c13efa28420',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/jordans%2Fair%20jordan%201%20dior.4.jpeg?alt=media&token=e95fa6fc-6fd8-483b-919d-fc0167209c76',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/jordans%2Fair%20jordan%201%20dior.5.jpeg?alt=media&token=ef2c8af7-fed8-4d38-a190-0e91d2ff0fae',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/jordans%2Fair%20jordan%201%20dior.jpeg?alt=media&token=14dca6ff-714b-495e-8029-7a315d8c709a'
    ],
    imgHash: 'PKLzIL9B0lb8eYIfERrxCw==',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/new%20arrivals%2Fair%20jordan.jpg?alt=media&token=b88556d3-742f-4787-8214-f4deb5dd8896'
}, {
    name: 'PUMA BLACK RIDER',
    description: 'Brand new Puma black rider sneakers adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    path: `puma-black-rider-2tv6stasmo8`,
    inventoryId: 30,
    price: '3500',
    discountId: 14,
    brand: 'PUMA',
    rating: '2',
    media: [
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/puma%2FPUMA-black-rider(1).jpg?alt=media&token=6dd4a363-7ecd-4f7a-abce-4ffec22fa446',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/puma%2FPUMA-black-rider(2).jpg?alt=media&token=6ff7d28a-86c4-45fd-b0e0-cbe28dee4452',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/puma%2FPUMA-black-rider.jpg?alt=media&token=5fc9ac98-b73f-4337-a1e0-15d37295d49f',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/puma%2Fpuma-black-rider(3).jpeg?alt=media&token=50937bf1-5a86-4b4c-8568-f6a1a95dccb0',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/puma%2Fpuma-black-rider(4).jpg?alt=media&token=8fea0b5c-745a-4952-8f80-6d74927215f8'
    ],
    imgHash: 'bUUfS/4IVI7bqtj8viJkvg==',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/new%20arrivals%2Fsample3.jpg?alt=media&token=edc5c84b-610c-409c-8356-ffcad3d4995c'
}, {
    name: 'ADIDAS SAMOA',
    description: 'Brand new Adidas Samoa sneakers adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    path: `adidas-samoa-6mslldiia3g`,
    inventoryId: 31,
    price: '5000',
    discountId: 14,
    brand: 'ADIDAS',
    rating: '3',
    media: [
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas%2Fadidas-samoa(5).jpeg?alt=media&token=d4975cf6-f698-40d7-ac6d-bb17579376c0',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas%2Fadidas-samoa(4).jpeg?alt=media&token=50ddb452-2be3-4320-9180-d1ed0af12a26',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas%2Fadidas-samoa(3).jpeg?alt=media&token=f321d6ab-470b-4727-b952-94090de7da20',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas%2Fadidas-samoa(6).jpg?alt=media&token=f0608b7b-29db-45f0-86ef-bb5230bef6b0',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas%2Fadidas-samoa.jpg?alt=media&token=c444c151-e72f-45a9-b562-f7190d43de03'
    ],
    imgHash: 'aqSPIKcdoh4PzYDiKtg5IQ==',
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/new%20arrivals%2Fsample5.jpg?alt=media&token=0a26f8ae-6c91-41e0-90e9-701fc35b12f8"
}, {
    name: 'ADIDAS LIFESTYLE',
    description: 'Brand new Adidas lifestyle sneakers adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus',
    sku: uuidv4(),
    path: `adidas-lifestyle-bpfldu9gsqg`,
    inventoryId: 32,
    price: '3200',
    discountId: 13,
    brand: 'ADIDAS',
    rating: '4',
    media: [
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas-lifestyle%2Fadidas-lifestyle(1).jpeg?alt=media&token=ecac32b7-d6b1-412e-af1d-8111c86a070e',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas-lifestyle%2Fadidas-lifestyle(2).jpg?alt=media&token=038388d4-4ffb-4595-a109-f99730534028',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas-lifestyle%2Fadidas-lifestyle(3).jpg?alt=media&token=482542b5-f0e2-4365-8ce2-51f155104e47',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas-lifestyle%2Fadidas-lifestyle(4).jpeg?alt=media&token=90f221a4-249e-4f7f-9857-61259b4e07e1',
        'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/adidas-lifestyle%2Fadidas-lifestyle.jpg?alt=media&token=0578a4f6-69b0-46aa-b700-fd8aa1859237'
    ],
    imgHash: 'iy0P1Nxe/WPtL9RhnmECag==',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/new%20arrivals%2Fadidas%20lifestyle.jpg?alt=media&token=e2716302-5ca6-47f5-9660-d046c8382be4'
}];

const highlights = [
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/highlights%2Fadidas.jpg?alt=media&token=e9b23553-0fa5-433e-a3e3-750755e13096',
        name: 'adidas'
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/highlights%2Fgrey%20nike.jpg?alt=media&token=b712a550-0b78-4089-8720-b450fcbf85d6',
        name: 'grey nike'
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/highlights%2Fjordans.jpg?alt=media&token=ab260065-a226-4cdc-91bd-80b5d25d0f6d',
        name: 'jordans'
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/highlights%2Fpuma.jpg?alt=media&token=d54b3bdc-a6bf-44b1-a2b4-3c0e5ab89430',
        name: 'puma'
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/highlights%2Fred%20nike.jpg?alt=media&token=2f9626c9-b216-4d64-b5c9-52eafd0e136d',
        name: 'red nike'
    }
]

// Fetch all products
exports.findAll = async (req, res) => {
    try {
        // const products = await Product.findAll();

        const products = await Product.findAll({
            attributes: [
                'name',
                'description',
                'sku',
                'inventoryId',
                'price',
                'discountId',
                'brand',
                'imgUrl'
            ]
        });

        res.send(products);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving tutorials."
        });
    }
};

// Fetch one product
// export const getOneProduct = async (req, res) => {
//     const { pid } = req.query;
//     let error;

//     try {
//         const getProduct = new Promise(function (resolve, reject) {
//             const product = products.filter(item => item.path === pid);

//             if (typeof (product) !== 'object') {
//                 error = reject({
//                     error: 'Expected an object but got something else!',
//                     status: 500
//                 });

//                 res.statusCode = 500;
//                 res.end(JSON.stringify(error));
//             } else if (product.length === 0) {
//                 error = reject({
//                     error: 'No product found!',
//                     status: 404
//                 });

//                 res.statusCode = 404;
//                 res.end(JSON.stringify(error));
//             } else {
//                 const response = resolve({ ...product[0] });

//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.setHeader('Cache-Control', 'max-age=180000');
//                 res.end(JSON.stringify(response));
//             }
//         });

//         return getProduct;
//     } catch (err) {
//         error = {
//             error: err.message,
//             status: 500
//         };

//         res.end(JSON.stringify(error));
//     }
// }

// // get new arrivals
// export const getNewArrivals = async (req, res) => {
//     if (!products.length) return { error: 'Expected an array but got something else!' };

//     try {
//         const discountedProducts = products.map(product => {
//             // fetch discount by discountId
//             // ...

//             // fictitious 
//             product.discount = 500;
//             return product
//         })

//         return discountedProducts;
//     } catch (error) {
//         return {
//             error: error.message,
//             status: 500
//         };
//     }
// };

// // fetch product brand names
// export const getProductBrandNames = async (req, res) => {
//     try {
//         const brandNames = products.map(product => product.brand);
//         const sortedNames = [...new Set(brandNames)];

//         return sortedNames;
//     } catch (error) {
//         return {
//             error: error.message,
//             status: 500
//         };
//     }
// }

// // fetch products by brand name
// export const getProductsByBrandName = async (req, res, brandName) => {
//     try {
//         console.log('========> ', brandName);
//         if (brandName === 'all-brands') return products;

//         const filteredProduct = products.filter(product => product.brand === brandName.toUpperCase());

//         return filteredProduct;
//     } catch (error) {
//         return {
//             error: error.message,
//             status: 500
//         };
//     }
// }

// // fetch highlight images
// export const getHighlightImages = async (req, res) => {
//     try {
//         res.statusCode = 200;

//         return highlights;
//     } catch (e) {
//         return {
//             error: error.message,
//             status: 500
//         };
//     }
// }