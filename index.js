const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : "Marisol Hernandez",
        yaer : new Date().getFullYear(),
        title : "Inicio",
        descr : "Pagina de inicio"
    });
});

app.get('/rubens', (req, res)=>{
    res.render('rubens', {
        autor : "Marisol Hernandez",
        yaer : new Date().getFullYear(),
        title : "Rubens",
        descr :"Peter Paul Rubens fue un pintor barroco de la escuela flamenca. Su estilo exuberante enfatiza el dinamismo, el color y la sensualidad."
    });
});

app.get('/velazquez', (req, res)=>{
    res.render('velazquez', {
        autor : "Marisol Hernandez",
        yaer : new Date().getFullYear(),
        title : "Diego Velazquez",
        descr : "Fue un pintor barroco español considerado uno de los máximos exponentes de la pintura española y maestro de la pintura universal."
    });
});

app.get('/tiziano', (req, res)=>{
    res.render('tiziano', {
        autor : "Marisol Hernandez",
        yaer : new Date().getFullYear(),
        title : "Tiziano",
        descr : "Tiziano, Vecellio di Gregorio fue un pintor italiano del Renacimiento, uno de los mayores exponentes de la Escuela veneciana."
    });
});

app.get('/sanzio', (req, res)=>{
    res.render('sanzio', {
        autor : "Marisol Hernandez",
        yaer : new Date().getFullYear(),
        title : "Rafael Sanzio",
        descr : "Raffaello Sanzio, ​también conocido como Rafael de Urbino o simplemente como Rafael, ​​ fue un pintor y arquitecto italiano del Renacimiento."
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando  el puerto 3000');
});