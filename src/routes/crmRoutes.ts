import { addNewContact, 
  getContacts, 
  getContactWithID,
  updateContact,
  deleteContact } from "../controllers/crmController";

const routes = (app) => {
app.route('/contact')
.get((req,res,next) => {
//middleware
console.log(`Request from ${req.originalUrl}`)
console.log(`Request type ${req.method}`)
next();
},getContacts)
//Post a new contact 
.post(addNewContact);

app.route('/contact/:contactID')

//get a new contact with Id
.get(getContactWithID)
//update a contact with id
.put(updateContact)
//delete a specific contact 
.delete(deleteContact);

};

export default routes;