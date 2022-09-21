import mongoose from "mongoose";

const { Schema } = mongoose;

const quoteSchema = new Schema({
  snippet:  { type:String, required:true },
  author: { type:String, required:true },
  body:   { type:String, required:true }
},{
  timestamps:true
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;