var express = require('express')
const categoris = require('./data/categories.json')
const news = require('./data/news.json')
var cors = require('cors')
var app = express()
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
     res.send('Hello World!')
})
app.get('/categoriy', (req, res) => {
     res.send(categoris)
})
app.get('/categoriy/:id', (req, res) => {
     const id = req.params.id;
     if (id == 0) {
          res.send(news)
     } else {
          const findid = news.filter(n => n.category_id == id)
          res.send(findid)
     }

})

app.get('/news', (req, res) => {
     res.send(news)
})


app.get('/news/:id', (req, res) => {
      const id=req.params.id;
      const findnews=news.find(n=>n._id==id);

     res.send(findnews)
})


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})
