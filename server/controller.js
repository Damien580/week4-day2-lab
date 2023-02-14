let houseData = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houseData)
    },
    addHouses: (req, res) => {
        console.log(req.body)
        let newHouse = {...req.body, id:houseId}
        console.log(newHouse)
        newHouse.price = parseInt(newHouse.price)
        houseData.push(newHouse)
        res.status(200).send(houseData)
        houseId++
    },
    updateHouses: (req, res) => {
        console.log(req.body)
        console.log(req.params)
        let { type } = req.body
        let { id } = req.params
        let index = houseData.findIndex(houses => houses.id === +id)
        if (type === "minus" && houseData[index].price > 0){
            houseData[index].price -= 10000

        } else if (type === "plus" && houseData[index].price < 1000000000000000){
            houseData[index].price += 10000
        }
        res.status(200).send(houseData)

    },
    deleteHouses: (req, res) => {
        let { id } = req.params
        console.log(id)
        let index = houseData.findIndex(houses => houses.id === +id)
        houseData.splice(index, 1)
        res.status(200).send(houseData)
    }
}
