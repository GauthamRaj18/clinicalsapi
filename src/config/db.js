import mongoose from 'mongoose'
import {DB} from './properties.js'


module.exports= function(){
    mongoose.connect(DB)
}