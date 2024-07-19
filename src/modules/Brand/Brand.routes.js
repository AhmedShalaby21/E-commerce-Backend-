import { Router } from "express";
import { addBrand, deleteBrand, getAllBrands, getBrand, updateBrand } from "./Brand.controller.js";
import { uploadSingleFile } from "../../fileUpload/fileUpload.js";
import { validate } from "../../middleware/validate.js";
import { brandValidationSchema } from "./Brand.validation.js";



const brandRouter = Router()

brandRouter
.route('/')
.post(uploadSingleFile('logo','brands'),validate(brandValidationSchema),addBrand)
.get(getAllBrands)
brandRouter
.route('/:id')
.get(getBrand)
.put(uploadSingleFile('logo','brands'),updateBrand)
.delete(deleteBrand)
export default brandRouter