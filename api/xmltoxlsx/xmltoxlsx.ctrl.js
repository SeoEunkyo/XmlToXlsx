const XLSX = require('xlsx')
const fs = require('fs')
var xml2json = require('xml2json');


const index = (req,res) => { 
    //console.log(req.query.limit)
    //if(req.query.limit === 2)
    //{
    //    res.json(users[2])
    //}
    res.render('xmltoxlsx')
    
}

const convert = (req, res) =>{

    
    const XMLData = req.body.content
    var jsonformat = xml2json.toJson(XMLData)
    const obj = JSON.parse(jsonformat)
    jsonformat = obj.DocumentElement.Table

    console.log(jsonformat) 
    

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(jsonformat )
    XLSX.utils.book_append_sheet(wb, ws, 'Converted Sheet' );

    XLSX.writeFile(wb, "./public/sheetTemp.xlsx");

    const filePath =  "./public/sheetTemp.xlsx"
    var fileName = 'ConvertedResult.xlsx'
    
    
    fs.exists(filePath, function(exists){
        console.log(filePath)
        if (exists) {     
          // Content-type is very interesting part that guarantee that
          // Web browser will handle response in an appropriate manner.
          res.writeHead(200, {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment; filename=" + fileName
          });
          fs.createReadStream(filePath).pipe(res);
        } else {
          res.writeHead(400, {"Content-Type": "text/plain"});
          res.end("ERROR File does not exist");
        }
    })






}


module.exports ={index, convert}