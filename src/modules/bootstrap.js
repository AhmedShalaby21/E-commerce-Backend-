import brandRouter from "./Brand/Brand.routes.js"
import categoryRouter from "./Category/Category.routes.js"
import productRouter from "./Product/Product.routes.js"
import SubCategoryRouter from "./subCategory/subCategory.routes.js"

export const bootstrap = (app)=>{
    app.use('/api/categories', categoryRouter)
    app.use('/api/subcategories', SubCategoryRouter)
    app.use('/api/brands', brandRouter)
    app.use('/api/product', productRouter)



}