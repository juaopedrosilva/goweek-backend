const Tweeat = require('../model/Tweeat')

module.exports = {
    async index(req, res) {
        const tweeats = await Tweeat.find().sort('-createdAt')
        
        return res.json(tweeats)
    }, 
    async store(req, res) {
        const tweeat = await Tweeat.create(req.body)

        req.io.emit('tweeat', tweeat)

        return res.json(tweeat)
    }
}