
import mongoose from 'mongoose'

export const connectMongoDB  =async(connectionURL) => {
    const conncection =await mongoose.connect(connectionURL)
    return connections
}