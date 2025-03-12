import  express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})