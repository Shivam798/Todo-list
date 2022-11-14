import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    test:
        {
            type:String,
            required:true
        },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const todo = mongoose.model('todo',Schema)
export default todo;