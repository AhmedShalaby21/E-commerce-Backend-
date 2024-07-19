import express from "express";
import { dbConn } from "./Database/dbConnection.js";
import { bootstrap } from "./src/modules/bootstrap.js";
import { globalErrorHandling } from "./src/middleware/globalErrorHandling.js";
import { appError } from "./src/utils/appError.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/uploads',express.static('uploads'))

bootstrap(app);

app.use('*',(req,res,next)=>{
   
    next(new appError(`route not found ${req.originalUrl}`,404))
})
app.use(globalErrorHandling)

app.listen(port, () => console.log(`e-commerce app listening on port ${port}`));
