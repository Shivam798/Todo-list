import mongoose from 'mongoose';

export const Connection =(user,passwrod) => {
    const URL = `mongodb+srv://${user}:${passwrod}@cluster0.4skice7.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(URL,{useNewUrlParser: true})
    mongoose.connection.on('connected',()=>{
        console.log('Database connected Succesful');
    })
}
mongoose.connection.on('disconnected',() => {
    console.log("Error while connecting database" )
})