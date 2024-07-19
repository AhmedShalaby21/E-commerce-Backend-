import { Router } from "express";
import { addProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "./Product.controller.js";
import { uploadMixOfFiles } from "../../fileUpload/fileUpload.js";
import { validate } from "../../middleware/validate.js";
import { productValidationSchema } from "./Product.validation.js";



const productRouter = Router()

productRouter
.route('/')
.post(uploadMixOfFiles([{name: 'imageCover', maxCount:1},{name: 'images', maxCount:10}],'product'),validate(productValidationSchema),addProduct)
.get(getAllProduct)
productRouter
.route('/:id')
.get(getProduct)
.put(uploadMixOfFiles([{name: 'imageCover', maxCount:1},{name: 'images', maxCount:10}],'product'),updateProduct)
.delete(deleteProduct)
export default productRouter