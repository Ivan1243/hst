const express = require('express')
const app = express()
const port = 3000

app.use(express.static('img'))

app.get('/', (request, response) => {
    response.send('Hello!')
})

app.get('/123', (request, response) => {
    response.send( '<script> function clicked() {' +
                  'document.getElementsByName("abc")[0].style.color="white";' +
                  '}'+
                 ' function img() {' +
    'document.getElementsByName("img")[0].style.border = "100px solid white";' +
'}' +
                  
                  'var status = 0' +            
                  'if {' +
                  'status = 0 (document.getElementsByName("abc")[0].style.color="purple";)' + 
                  '}' +
                  'else {' +
                  'status = 1 (document.getElementsByName("abc")[0].style.color="red";)' + 
                  '}' +
    
                  'status = 1 - status'
                  
                  setTimeout(300);
        
'}' +          
                  
    '</script>' +              
    '<style type="text/css">' +
   'TABLE {' +
    'width: 300px;' +
   ' border: 1px solid black; ' +
   ' border-bottom: none; ' +
  ' }' +
   'TD {' +          
   ' border-bottom: 1px solid black;' +
  ' }' +
'</style>' +
'<table>' +
'<tr name = "abc" onclick ="clicked()" bgcolor="lightblue">' +
'<td>бабочка</td>' +
'</tr>' +
'<tr>' +
'<td name = "img" onclick = "img()"><img src="img_w.jpg" alt="butterfly"></td>' +
'</tr>' +
'</table>' )
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})