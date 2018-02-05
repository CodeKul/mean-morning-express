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
    },

    fileUpload: (req, res) => {
        console.log(`Reached to server`)
        console.log(`user name ${req.body.usNm}`)
        req.file('myPhoto').upload({
            maxBytes: 10000000
        }, (err, files) => {
            if(err) {
                console.log('error')
                return res.json({
                    msg : 'error in file uplod',
                    err : err
                })
            }
            if(files.length == 0) {
                console.log('file length is 0')
                return res.json({
                    msg : 'No files have been uploaded',
                })
            }
            console.log(`After uploading file`)
            return res.json({
                msg : 'file uploaded successfully'
            })
            // Db query
        });
    }
};

