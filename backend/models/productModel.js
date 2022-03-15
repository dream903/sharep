import mongoose from "mongoose";

const productSchema=new mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        image:{type:String,required:true},
        brand:{type:String,required:true},
        category:{type:String,required:true},
        description:{type:String,required:true},
        outils:{type:String,required:true},
        lien:{type:String,required:true},
       
     }, {
            timestamps:true,
        }
);
const Product=mongoose.model('Product',productSchema);
export default Product;