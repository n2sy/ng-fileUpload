const  express  =  require('express')
const  app  =  express()
const  port  =  3000

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
})

// app.get('/api/upload', (req, res) => {
//     res.json({
//         'message': 'hello'
//     });
// });

app.post('/api/upload', multipartMiddleware, (req, res) => {
    //console.log(req.files); 
    let fileName = req.files.uploads[0].path.slice(8); //To save in DB 
    res.status(200).json({
        'message': 'File uploaded successfully',
        'fileName' : fileName
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))