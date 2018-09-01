let quotes = []
let id = 0
let comment = ''
// let favorites = []



module.exports = {
     create: (req, res) => {
       let { quote } =  req.body
       quote.push(quotes, id)
       id++
       res.status(200).send(quote)
       
           },

        read: (req,res) => { req =
           req.body.comment 
      
            res.status(200).send({comment})

        }
       }
           

       

  