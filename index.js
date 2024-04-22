const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//asadulimran1999
//LFvjeRUErCuRm2kP

app.get('/', (req, res) => {
  res.send('Simple project is running');
})

//mongodb connection
const uri =
  'mongodb+srv://asadulimran1999:LFvjeRUErCuRm2kP@cluster0.kj2w8eq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const database = client.db('UsersDB');
    const userCollection = database.collection('users');

    app.post('/users', async(req, res) => {
      const user = req.body;
      console.log('new user', user);
      const result = await userCollection.insertOne(user);
      res.send(result);

    });
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Project is running on ${port}`)
})