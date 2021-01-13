const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {

    res.render('index',{
        title: 'Главная',
        group: 'ПИвЮ-9 1-18',
        name: 'Бекназар'
    });
});
router.get('/about', async (req, res) => {

    res.render('about',{
        title: 'О мне',
        group: 'ПИвЮ-9 1-18',
        name: 'Бекназар',
        lastname: 'Бекташов',
    })
})
router.get('/contacts', async (req, res) => {

    res.render('contacts',{
        title: 'Мои контакты',
        tel: '+996700841114',
        email: 'bektashev2003@mail.ru'
    })
})

module.exports = router
