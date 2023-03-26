const mongoClient = require("../database/connection")
const data = require('../data')
const studentEnrollment = async (req, res) => {
    // const studentData = req.body;

    const studentData = data;
    try {
        const result = await mongoClient.insertToDB(studentData);
        console.log("the result of database operation", result)
        return res.status(200).send({ message: result })


    } 
    catch (error) {
        console.log("Something Went Wrong");    
        return res.status(500).send({ message: `Something Wrong ${error}`})

    }

}

const getStudentData = async(req,res) =>{

// const queryparams = req.query;
const query = {id:{$gt:15}}

try{
    const result = await mongoClient.findInDb(query);
    console.log("result is", result)
    return res.status(200).send(result)
}
catch (error) {
    console.log("Something Went Wrong");
    return res.status(500).send({ message: `Something went wrong ${error}` })

}
    
}

const getStudentDataByCategory = async(req,res) =>{

    // const queryparams = req.query;
    const query = {category:"Bollywood"}
    
    try{
        const result = await mongoClient.findInDb(query);
        console.log("result is", result)
        return res.status(200).send(result)
    }
    catch (error) {
        console.log("Something Went Wrong");
        return res.status(500).send({ message: `Something went wrong ${error}` })
    
    }
        
    }

const studentUpdate= async(req,res) =>{

    const updateData = req.body;
    const filter = updateData.filter;
    const value={$set:updateData.value}
   
    try{
        const result = await mongoClient.updateInDb(filter, value);
        console.log("result is", result)
        return res.status(200).send(result)
    }
    catch (error) {
        console.log("Something Went Wrong");
        return res.status(500).send({ message: `Something went wrong ${error}` })
    
    }
        
    }


    const studentDelete= async(req,res) =>{

       
const queryparams = req.query;
console.log(queryparams)
try{
    const result = await mongoClient.deleteInDb(queryparams);
    console.log("result is", result)
    return res.status(200).send(result)
}
catch (error) {
    console.log("Something Went Wrong");
    return res.status(500).send({ message: `Something went wrong ${error}` })

}
            
        }




module.exports = {
    studentEnrollment,getStudentData,studentUpdate,studentDelete,getStudentDataByCategory
}