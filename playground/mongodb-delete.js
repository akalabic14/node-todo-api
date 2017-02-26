const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return conole.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').deleteMany({ name: "Aleksandar"}).then((res) => {
    console.log('Deleted all users with name Aleksandar',res);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58b2edd50e4a49017402a133')
  }).then((res) => {
    console.log(`You have deleted user with id: ${res._id}.`);
  });



  // db.close();
});
