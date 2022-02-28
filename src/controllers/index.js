const controller={
    'index': (req,res,next)=>{
        res.render('raikaH');
    },
    'sidebar': (req, res, next)=>{
        res.render('index');
    }
};//fin del controlador

module.exports =controller;