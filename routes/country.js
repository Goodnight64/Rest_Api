const express = require('express');
const router = express.Router();


//retorna todos os produtos
router.get('/', (req, res, next) => {

    const country = {
        portugueseName: req.body.portugueseName,
        englishName: req.body.englishName,
        imagemLink: req.body.imagemLink,
        image: req.body.image

    };


    res.status(200).send({
        mensagem: ' Usando o GET dentro de country',
        countryFound: country
    });

});

//incere todos os produtos
router.post('/', (req, res, next) =>{

    const country = {
        portugueseName: req.body.portugueseName,
        englishName: req.body.englishName,
        imagemLink: req.body.imagemLink,
        image: req.body.image
    };


    res.status(201).send({
        mensagem: 'Usando o post dentro da rota de country',
        countryCreated: country
    })
});

//retorna um produto especifico
router.get('/:id_country', (req, res, next) =>{
    const id = req.params.id_country;
    
    if (id == 'especial'){
    
        res.status(200).send({
          mensagem: "você descobriu o id especial",
          id: id
        });

    } else {
        res.status(200).send({
            mensagem: 'você descobriu um id',
            id: id
        });

    }


})

//altera um pais
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando o patch da aplicaçao',
    });
});

//apaga um pais
router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'usando o delete da aplicaçao',
    })
})



module.exports = router;