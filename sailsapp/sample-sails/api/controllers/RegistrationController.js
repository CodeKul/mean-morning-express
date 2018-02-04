/**
 * RegistrationController
 *
 * @description :: Server-side logic for managing registrations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: (req, res) => {
        let usNm = req.body.usNm
        let pass = req.body.pass
        console.log(`User - ${usNm} Pass - ${pass}`)
        Registration.find({
            usNm: usNm,
            pass: pass
        }).exec( (err, rs) => {
            if(err) {
                return res.json({sts : 'error'})
            }
            if (rs) {
                if(rs.length > 0) return res.json({ sts: true })
                else return res.json({ sts: false })
            }
        })
    }
};

