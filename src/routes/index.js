const router = require('express').Router()

const CustomersController = require('../controllers/customers')

//routes 
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo de teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
})

router.post('/register/addNewUser', CustomersController.addNewUser)

module.exports = router