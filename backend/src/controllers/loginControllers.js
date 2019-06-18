const User = require('../models/user')

module.exports = {
    async index(req, res){

        const {email, senha} = req.body
        const userFind = await User.find({
            email : email,
            senha : senha,
        })
        const valida = await userFind != "" ? true : false
        
        return res.json(valida)
    }
}