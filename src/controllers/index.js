const controller={
    'index': (req,res,next)=>{
        res.render('raikaH');
    },
    'sidebar': (req, res, next)=>{
        res.render('sidebar');
    }
};//fin del controlador

module.exports =controller;