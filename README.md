# Manjumu Backend
A simplified sneaker ecommerce api mvp

## Prerequisites
- NodeJS v16^
- Postgresql v10^
- Postman
- Git v2

## Technologies
- Express
- Sequelize
- Mpesa Daraja API
- Firebase - Authentication, Realtime Database, Storage

## Requirements
- [ ] A user should be able to view each and all products
- [ ] An authenticated user should be able to add and manage cart
- [ ] An authenticated user should be able to add and manage wishlist
- [ ] An authenticated should be able to Manage their profile - Change password
- [ ] An authenticated user should be able to manage orders
- [ ] An authenticated user should be able to complete a purchase

## Endpoints
| Endpoint        | Functionality           | HTTP method  |
| ------------- |:-------------:| -----:|
| `/products` | Fetch all questions       |    GET |
| `/products/:id` | Fetch a specific  product        |    GET |
| `/:userId/wishlist` | Fetch wishlist        |    GET |
| `/:userId/cart` | Fetch cart        |    GET |
| `/:userId/orders` | Fetch orders      |    GET |
| `/:userId/cart/create` | Post a cart      |    POST |
| `/:userId/wishlist/create` | Post a wishlist      |    POST |
| `/:userId/orders/create` | Post a order      |    POST |
| `/:userId/cart/:cartId` | Update cart      |    PATCH |
| `/:userId/wishlist/:wishlistId` | Update cart      |    PATCH |
| `/:userId/orders/:orderId` | Update order      |    PATCH |
| `/:userId/cart/:cartId` | Delete cart item      |    DELETE |
| `/:userId/wishlist/:wishlistId` | Delete cart item      |    DELETE |
| `/:userId/orders/:orderId` | Delete order item      |    DELETE |

## Running the app - Linux
1. Clone this repo: ```git clone https://github.com/Dave-mash/manjumu-backend.git```
2. Move into project directory and install dependencies: ```cd manjumu-backend && npm i```
3. Run migrations: ```npx sequelize db:migrate```
4. Seed some data: ```npx sequelize-cli db:seed:all```
3. ```npm run dev```

## Authors
David Macharia @[Dave-mash](https://github.com/Dave-mash)