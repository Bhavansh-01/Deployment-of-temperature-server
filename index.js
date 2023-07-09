const { initializeApp } = require('firebase/app');
const{getDatabase,ref,set}=require('firebase/database');
const express = require('express')
const app = express()
const port = 3000
const firebaseConfig = {
  apiKey: "AIzaSyCNzRdlcfQeoN8a7L0jA04zhDamdpwyyJI",
  authDomain: "learnfirebase-f2755.firebaseapp.com",
  databaseURL: "https://learnfirebase-f2755-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learnfirebase-f2755",
  storageBucket: "learnfirebase-f2755.appspot.com",
  messagingSenderId: "994018527725",
  appId: "1:994018527725:web:d6978ce0e350bd778effe4",
  measurementId: "G-WBPJCQ3BK5"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const application=initializeApp(firebaseConfig);
const db = getDatabase();
app.use(express.json());


app.post('/updateTemperature', async (req, res) => {
  console.log(req.body.rakeId);
  const rakeId=req.body.rakeId;
  const reference=ref(db,'rakes/'+rakeId);
  await set(reference,{
    Temperature : req.body.Temperature,
  })
  res.send("success");
});




// function writeUserData(rakeId,temperature,pressure,VcbTripping){
//   const db=getDatabase();
//   const reference=ref(db,'rakes/'+rakeId);
//   set(reference,{
//     Temperature: temperature,
//     Pressure: pressure,
//     VCB_Tripping: VcbTripping
//   });
// }
// writeUserData("Rake 3","85","103","false");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})