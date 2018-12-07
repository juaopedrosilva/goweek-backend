const Tweeat = require('../model/Tweeat')

module.exports = {
    async store(req, res) {
        const tweeat = await Tweeat.findById(req.params.id)
        
        tweeat.set({ likes: tweeat.likes + 1})

        await tweeat.save()

        req.io.emit('like', tweeat)
        
        return res.json(tweeat)
    }
}
