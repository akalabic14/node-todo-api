const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return conole.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
    // db.collection('Users').insertOne({
    //   name: 'Aleksandar',
    //   age: 21,
    //   location: 'Gradiska'
    // }, (err, res) => {
    //   if(err){
    //     return console.log('Unable to insert users',err);
    //   }
    //   console.log(JSON.stringify(res.ops, undefined, 2));
    // });

  db.close();
});
