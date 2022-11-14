import todo from '../model/Todo.js'

export const addtodo = async(req,res)=>{
    try {
        const newTodo = await todo.create({

            test:req.body.test,
            createdAt:Date.now()
        })
        await newTodo.save();
        res.status(200).json(newTodo)    
    } catch (error) {
        
        res.status(500).json(error.message)
    }
    
}