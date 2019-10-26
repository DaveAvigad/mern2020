const mongoose = require('mongoose')
const consts = require('./consts')
const User = require('./user')

const { MLAB_URL, DB_USER, DB_PASS } = consts
const url = MLAB_URL
const options = {
    useNewUrlParser: true, // For deprecation warnings
    useCreateIndex: true, // For deprecation warnings
    user: DB_USER,
    pass: DB_PASS
}

mongoose
    .connect(url, options)
    .then(() => {
            User.find({}, 
                (err, result) => {
                    if(err) throw err
                    console.log(result)
                    mongoose.disconnect()
                })
        })
        // const allUsers = await User.find({ name: "Michal" })
        // console.log('%o', allUsers)

        /* find() */

        // .then(() => {
        //     User.find({
        //         name: 'Krystal Choulerton', 
        //         age: {$gte: 30, $lte: 50}
        //     }, 
        //         (err, result) => {
        //             if(err) throw err
        //             console.log(result)
        //             mongoose.disconnect()
        //         })
        // })

        /* insert() */

        // .then(() => {
        //     const user = new User({
        //         name: "Nimrod",
        //         age: 20, 
        //         status: "A",   
        //         groups: ["sports", "music", "books"]
        //     });

        //     user.save(
        //         (err) => {
        //             if(err)
        //             console.log(`err: ${err}`);
        //             else {
        //                 console.log(`Saved document: ${JSON.stringify(user)}`);
        //                 mongoose.disconnect();
        //             }
        //         });
        //     })

        /* validation */

        // .then(() => {
        //     const user = new User({
        //         name: 'Nimrod',
        //         age: 20, 
        //         status: 'A',   
        //         groups: ['sports', 'music', 'books'],
        //         city: 'Tel-Aviv'
        //     })

        //     user.save(
        //         (err) => {
        //             if(err)
        //             console.log(`err: ${err}`)
        //             else {
        //                 console.log(`Saved document: ${JSON.stringify(user)}`)
        //                 mongoose.disconnect()
        //             }
        //         });
        //     })

        /* update */

        // .then(() => {
        //     const conditions = { name: "Michal" }
        //     const options = {}
        //     const doc = {
        //         $set: { name: "Michael", age: 77 },
        //         $push: { groups: 'TV' }
        //     }

        //     User.updateOne(conditions, doc, options,
        //         (err, result) => {
        //             if (err)
        //                 console.log(`err: ${err}`);
        //             else {
        //                 console.log(JSON.stringify(result))

        //                 mongoose.disconnect();
        //             }
        //         })
        // })

        /* delete */

        // .then(() => {
        //     const conditions = { name: "Michael" }

        //     User.deleteOne(conditions,
        //         (err, result) => {
        //             if (err)
        //                 console.log(`err: ${err}`);
        //             else {
        //                 console.log(JSON.stringify(result))

        //                 mongoose.disconnect();
        //             }
        //         })
        // })
    .catch(err => console.error('some error occurred', err))