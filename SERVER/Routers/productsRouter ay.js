const { Router } = require("express");
const productController = require("../Controllers/productController ay");
const authenticateToken = require("../middleware/authenticateToken");
const router = Router();

router.get("/All_products", productController.allProducts);
router.get("/Get_Product_By_Id/:id", productController.getBroductById);
router.get("/Get_Products_By_Category/:category", productController.getProductsByCategory);
router.post("/Add_New_product", authenticateToken.authorize(["admin", "superuser"]), productController.imageProduct, productController.addNewProduct);
router.put("/Update_Product_By_Id/:id", authenticateToken.authorize(["admin", "superuser"]), productController.imageProduct, productController.updateProductById);
router.delete("/Delete_Product_By_Id/:id", authenticateToken.authorize(["admin"]), productController.deleteProductById);

module.exports = router;
