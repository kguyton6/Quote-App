let quotes = []
let id = 0
// let favorites = []



module.exports = {
    create: (req, res) => {
       let { quote } =  req.body
       quotes.push({quote, id})
       console.log(req.body)
       id++
       res.status(200).send(quote)

    },

    // read: (req, res) => {
    //     res.status(200).send(quotes)
    // },

    // update: (req, res) => {
    //   let { favorites } = req.body 
    //   console.log(favorites) 
    // }


}
