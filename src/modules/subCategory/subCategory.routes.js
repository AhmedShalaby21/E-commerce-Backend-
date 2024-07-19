import { Router } from "express";
import { addSubCategory, deleteSubCategory, getAllSubCategories, getSubCategory, updateSubCategory } from "./subCategory.controller.js";
import { validate } from "../../middleware/validate.js";
import { subCategoryValidationSchema } from "./subCategory.validation.js";

const SubCategoryRouter = Router({mergeParams:true})

SubCategoryRouter
.route('/')
.post(addSubCategory,validate(subCategoryValidationSchema))
.get(getAllSubCategories)
SubCategoryRouter
.route('/:id')
.get(getSubCategory)
.put(updateSubCategory)
.delete(deleteSubCategory)
export default SubCategoryRouter