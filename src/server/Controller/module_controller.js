let quoteStorage = []
let id = 0
// let favorites = []



module.exports = {
     create: (req, res) => {
       let { quote } =  req.body
       quoteStorage.push(quote, id)
       id++
       res.status(200).send(quote)
       
           },

        read: (req,res) => { res = 
        
          res.status(200).send(dailyQuote)

        }
       }
           

       

  