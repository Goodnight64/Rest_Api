const express = require('express');
const router = express.Router();


//retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: ' Usando o GET dentro da rota'
    });

});

//incere todos os produtos
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o post dentro da rota de produtos'
    })
});

//retorna um produto especifico
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto;
    
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



module.exports = router;