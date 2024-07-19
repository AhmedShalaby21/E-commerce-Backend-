import { model } from "mongoose"
import { catchError } from "../../middleware/catchError.js"

export const getAll=(model)=>{

    return catchError(async (req ,res ,next)=>{
        let pageNumber = req.query.page *1 || 1
        if(req.query.page<1) pageNumber = 1
        let limit = req.query.limit
        let skip = (parseInt(pageNumber)-1) *limit 
        let doc = await model.find().skip(skip).limit(limit)
        
    res.json({message:"success",pageNumber, doc})
    })
}
export const getOne=(model)=>{

return catchError(async (req ,res ,next)=>{
    
    let doc = await model.findById(req.params.id)
    
    doc ||  next(new appError("doc not found",404))
    !doc || res.json({message:"success", doc})
}
)
}
export const deleteOne=(model)=>{
return catchError(async (req ,res ,next)=>{
    
    let doc = await model.findByIdAndDelete(req.params.id)

    doc ||  next(new appError("doc not found",404))
    !doc || res.json({message:"success", doc})
}
)
}