const index = (req,res) => { 
    //console.log(req.query.limit)
    //if(req.query.limit === 2)
    //{
    //    res.json(users[2])
    //}
    res.render('xmltoxlsx');
    
}

const convert = (req, res) =>{

    console.log(req.body.content) 




}


module.exports ={index, convert}