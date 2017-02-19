function newUser()
{
var emp = Friends.createEntity(); 
emp.FullName = friends.FullName; // assign 'Dupont' to the 'name' attribute
emp.SurName = friends.Surname; // assign 'John' to the 'firstname' attribute

emp.save(); // remember to save the entity
}
}

addHttpRequestHandler ('/newUser','EventHandler.js','newUser')
var currentDate= newDate