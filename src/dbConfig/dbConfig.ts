import mongoose from "mongoose";

export async function connect() {
 try{

    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection;

    connection.once('connected', () => {
        console.log("Connected to MongoDB");
        
    })

 }catch(error: any){
     console.log("Error: ", error.message);
     console.log("Somethings went wrong!");
     process.exit();
     
     
 }
}
