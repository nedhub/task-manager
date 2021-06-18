// CRUD create read update delete

//create done!


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient // this is for getting the mongoclient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')



const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



const id = new ObjectID()

console.log(id.id)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=> {
        if (error) {
            return console.log("unable to connect to database")
        }

        //  console.log('Connected correctly ')

        const db = client.db(databaseName)



        // db.collection('users').deleteMany({
        //     age: 22
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)

        // })

        db.collection('users').deleteOne({
            age: 23
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)


        })





















        // const updatePromise = db.collection('tasks').updateMany({
        //     // _id: new ObjectID("600ee71d3782a84aba0d58f2")
        //     completed: true
        // }, {
        //     // $set: {
        //     //     name: 'Ned the Great'
        //     // }

        //         $set: {
        //             completed: false
        //         }
        // })


        // .then((result) => {
        //     console.log(result.modifiedCount)

        // }).catch((error) => {
        //     console.log(error)
        // } )
    








        // db.collection('users').findOne({ name: 'Ned', age: 1}, (error, user)=> {
        //     if (error) {
        //         return console.log("Unable to fetch")
        //     }

        //     console.log(user)

        // })
        


        // db.collection('users').find({ age: 27 }).toArray((error, users) => {
        //     console.log(users)
        // })


        // db.collection('users').find({ age: 27 }).toArray((error, count) => {
        //     console.log(count)
        // })

        // db.collection('tasks').findOne({_id: new ObjectID("600f22873e18b2062f904145")}, (error, task) => {
        //     console.log(task)
        // } )


        // db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
        //     console.log(tasks)
        // })



        // db.collection('users').insertOne({
        //     // _id: id,
        //     name: 'Vikram',
        //     age: 26
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert User')
        //     }

        //     console.log(result.ops)

        // })

        // db.collection('users').insertMany([
        //     {
        //         name: 'jen',
        //         age: 28,
        //     },
        //     {
        //         name: 'Gunther',
        //         age: 65
        //     }
        // ], (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert documents')
        //     }

        //     console.log(result.ops)

        // })

            // db.collection('tasks').insertMany ([{
            //     description: 'Clean the house',
            //     completed: true
            // }, {
            //     description: 'Take out the trash',
            //     completed: false
            // }, {
            //     description: 'Brush mouth',
            //     completed: true
            // }], (error, result) => {
            //     if (error) {
            //         return console.log("Unable to insert document")
            //     }

            //     console.log(result.ops)
            // })


} )