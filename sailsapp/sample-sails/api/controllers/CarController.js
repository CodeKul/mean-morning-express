/**
 * CarController
 *
 * @description :: Server-side logic for managing cars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    simple: (req, res) => {

        Car.create({
            nm: 'bmw',
            pz: 899,
            isFuel: true
        }).exec((err, cr) => {
            if (cr) {
                return res.json({
                    sts: 'success',
                    msg: 'car saved successfully',
                    car: cr
                })
            } else {
                return res.json({
                    sts: 'err',
                    msg: `${err}`
                })
            }
        })
    },
    payment: (req, res) => {
        PaymentService.topUp(90, rs => res.json(rs))
    },
    byNm: (req, res) => {
        Car.findByNm('bmw').exec((err, cr) => {
            if (cr) {
                return res.json({
                    amt: 12,
                    sts: `success`,
                    car: cr
                })
            } else {
                return res.json({
                    sts: 'error',
                    err: err
                })
            }
        })
    }
};

