var express    = require('express');            //api
var app        = express();                     //api
var bodyParser = require('body-parser');        //interprets?
var collection = require('./collection.json');  //Json collection of onfile request=>response


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();

//localhost / anything
router.get('/schedule',(req,res)=>{
    res.send(
        [
            {
                "id":1,
                "courseNumber":"NURS301",
                "name": "Nursing Informatics",
                "credits":3
            },
            {
                "id":2,
                "courseNumber":"NURS302",
                "name": "Nursing Informatics2",
                "credits":4
            },
            {
                "id":3,
                "courseNumber":"NURS303",
                "name": "Nursing Informatics3",
                "credits":4
            }
        ]
    );
})
router.get('/not-authorized', (req, res)=>{
    res.status(401);
    res.send();
});
router.get('/*', (req, res)=>{
    var response =  {
                        "code": 12345,
                        "message": "An error occurred."
                    };
    res.status(500);
    res.json(response);//send response  
});
var postCollection = require('./testPostCollection.json');

router.post('/*',(req,res)=>{
    var response ={"response" : "No response in Mock API"};
    //insert json navigation once schema defined
    res.json(response);
})
router.put('/*',(req,res)=>{
    var response ={"response" : "No response in Mock API"};
    //insert json navigation once schema defined
    res.json(response);
})

//router base route
app.use('/', router);

app.listen(3000, () => console.log('Server running on port 3000'))
console.log('Listening at http://localhost:' + port);