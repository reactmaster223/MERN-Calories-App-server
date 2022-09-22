const db = require("../models");
const Foods = db.foods;

exports.create = (req, res) => {
    if(!req.body.data){
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    Foods.create({ title: req.body.data.title, subtitle:req.body.data.subtitle, owner:req.body.owner}, function (err, adventure) {
        if(err){
            console.log(err)
            res.send({response:'failure'});
        }else{
            res.send({response:'success'});
        }
    });    
};

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    Foods.findByIdAndUpdate(req.body.id, { title : req.body.data.title, subtitle : req.body.data.subtitle}, function (err, adventure) {
        if(err){
            res.send(err);
        }else{
            if(adventure){
                res.send({response:'success'});
            }else{
                res.send({response:'failure'});
            }
        }
    });
};

exports.delete = (req, res) => {
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    Foods.deleteOne({_id : req.body.id}, function (err, adventure) {
        if(err){
            res.send(err);
        }else{
            console.log(req.body.id)
            if(adventure){
                res.send({response:'success'});
            }else{
                res.send({response:'failure'});
            }
        }
    });
};

exports.getfoods = (req, res) => {
    Foods.find({}, function (err, adventure) {
        if(err){
            res.send(err);
        }else{
            res.send({response:adventure});
        }
    });
};

exports.get_user_food_daily_data = (req, res) => {
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    Foods.find({user_id : req.body.user_id, date : req.body.date}, function (err, adventure) {
        if(err){
            res.send(err);
        }else{
            res.send({response:adventure});
        }
    });
};

exports.update_water_amount = (req, res) => {
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    Foods.findByIdAndUpdate(req.body.id, { water : req.body.water_amount}, function (err, adventure) {
        if(err){
            res.send(err);
        }else{
            if(adventure){
                res.send({response:'success'});
            }else{
                res.send({response:'failure'});
            }
        }
    });
};

