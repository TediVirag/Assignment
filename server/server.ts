import express from "express";

const app = express();

app.use((req:any, res:any, next:any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
        console.log(`${req.ip}`);                //log
        next();
})

app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let message="";
app.post('/api/interview/magic', (req,res,next) => {
    message = req.body.input
    
    console.log("post")    
    res.send()
    next()                  //log
})


app.get('/api/interview/magic', (req, res, next) => {
    let messages : string[] = message.split(' ')
    let sub1 : string = message.substring(0,5)
    let sub2 : string = message.substring(0,6)
    if( sub1 == "first"){
        messages.sort((n1,n2) => {
            if (n1 > n2) {
                return 1;
            }
        
            if (n1 < n2) {
                return -1;
            }
        
            return 0;
        });
        messages=messages.map(value => value.slice(0,-1))
        messages=messages.filter(value => value.length > 1)
        
    } else if(sub2 == "second"){
        messages.sort((n1,n2) => {
            if (n1 < n2) {
                return 1;
            }
        
            if (n1 > n2) {
                return -1;
            }
        
            return 0;
        });
        messages=messages.map(value => value+'A')
        
    }
    res.send({"result" : messages})
    console.log(messages)       //log
    next()                     
})

app.listen(4201, '127.0.0.1', function(){
    console.log('server now listening');             //log
})