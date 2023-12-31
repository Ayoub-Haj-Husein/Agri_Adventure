const express = require('express');
const FavoritesProducts = require('../Controllers/FavoritesProducts');
const Router = express.Router();
const { authorize } = require('../Middleware/Authorization');

Router.post('/Add_New_Favorites_Products/:productId', authorize(["User", "Admin"]), FavoritesProducts.addFavoritesProducts);
Router.get('/Get_Favorites_Products_By_UserId', authorize(["User", "Admin"]), FavoritesProducts.getFavoritesProductsByUserId);
Router.get('/Get_Favorites_Products_By_ProductId/:productId', authorize(["User", "Admin"]), FavoritesProducts.getFavoritesProductByProductId);
Router.delete('/Delete_Favorites_Products/:productId', authorize(["User", "Admin"]), FavoritesProducts.deleteFavoritesProductsByProductsId);

module.exports = Router;