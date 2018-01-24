module.exports = {
    topUp: (amt, cb) => {
        Car.findByNm('bmw').exec((err, cr) => {
            if (cr) {
                cb(cr)
            }else cb(err)
        })
    }
}