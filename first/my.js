let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const empSchm = mongoose.Schema({
    id: Number,
    name: String,
    sal: Number
});

const Employee = mongoose.model('Employee', empSchm);

let manager = new Employee({
    id: 7896,
    name: 'Android',
    sal: 799
})

manager.save().then(() => {
    console.log(`Manager Has been Saved`)
})

Employee.find({ }, (err, mgrs) => {
    if (err) {
        console.log(err)
        return
    }
    mgrs.forEach(mgr => {
        console.log(mgr.name)
    });
});







