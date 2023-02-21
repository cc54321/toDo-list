
const { update } = require('../models/List');
const List = require('../models/List');


//all List
async function getAllList(req, res) {

    
    try {
      const allList = await List.find({});
      res.json({task: allList });
    }catch(e){
      console.log(e);
    }
};



//create a list
async function createList(req, res) {
    try {
      //parse out fields from POST request
    /*
listName: String,
    description: String,
    completed: Boolean,
    status: { type: String, default: 'incomplete'},
    dateCreated: { type: Date, default: Date.now},
    dateCompleted: {type: Date},
    id: { type: String, default: uuidv4()},
    */
      const listName  = req.body.listName
      const description = req.body.description 
      const completed = req.body.completed
      const status = req.body.status
      
  
      //pass fields to new Blog model 
      //notice how it's way more organized and does the type checking for us
      const newList = new List({
          listName,
          description,
          completed,
          status,
      });
  
      //save our new entry to the database 
      const savedData =  await newList.save();
      
      //success to the user 
      res.json({
          success: true,
          list: savedData
      });
  
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
};


//update list
async function updateList (req, res) {
    const entryID = req.body.id;

    
    try{
            await List.updateOne({id: entryID}, req.body);
    
    if ( req.body.completed === true)
    {

    const filter = { id: entryID };
    const update = { dateCompleted: Date.now() };

// update document with the date completed
    let doc = await list.findOneAndUpdate(filter, update);
    doc.id;
    doc.dateCompleted;            
    }
    
    } catch(err) {
    
        console.log(err)
        throw err
    }
    
    res.json ({
        success: true,
        message: `list ${entryID} has been updated`
    })
    
    };


 //delete list  
 async function deleteOneList(req, res) {
    const entryId = req.body.id;

    try {
        await list.deleteOne({id: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }

    res.json({
        success: true,
        message: `list entry id ${entryId} deleted`
    })
};


//delete multiple list
async function deleteMultiple(req, res) {
	try {
      
      const idsToDelete = req.query.id

      const deleteResult = await list.deleteMany({id:
          idsToDelete
        })
  
  } catch (e) {
    res.send(e);
  }

	res.json({
		success: true,
        deletedResult: idsToDelete
        
	})
}

async function createMultiple (req, res){

   try {

    let createMulti = await list.create(
        req.body
          )

    return createMulti

   } catch (e) {
    res.send(e);
   }

   res.json({

    sucess:true
    
   })
    



}

module.exports = {
getAllList,
createList,
updateList,
deleteOneList,
deleteMultiple,
createMultiple

}

