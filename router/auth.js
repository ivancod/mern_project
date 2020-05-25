const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const User = require('../model/User')
const bkr = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')


const router = Router()
// /api/auth/register
router.post('/register', 
    [
        check('email', 'no emaii').isEmail().normalizeEmail(),
        check('password', 'min 6').isLength({ min: 6 }).exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req) 

            if(!errors.isEmpty()){
                return res.status(400).json({ 
                    errors: errors.array(),
                    message: 'Регистрация не пройдена! no valid data' 
                })
            }

            const { email, password } = req.body

            const isUser = await User.findOne({ email })
            if(isUser) return res.status(400).json({ message: 'Такой юзер уже есть' })

            const hashPass = await bkr.hash(password, 12)
            const user = new User({ email, hashPass })

            await user.save()

            res.status(201).json({ message: 'Регистрация пройдена!' })
        } catch(e) {
            res.status(500).json({ message: 'Регистрация не пройдена!' })
        }
    }
)

// /api/auth/login
router.post('/login', 
    [
        check('email', 'no emaii').isEmail().normalizeEmail(),
        check('password', 'min 6').isLength({ min: 6 }).exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req) 

            if(!errors.isEmpty()){
                return res.status(400).json({ 
                    errors: errors.array(),
                    message: 'Авторизация не пройдена! no valid data' 
                })
            }
            
            const { email, password } = req.body

            const user = await User.findOne({ email })
            if(!user)  return res.status(400).json({ message: 'Пользователь не найден!' })

            const isMatch = await bkr.compare(password, user.password)
            if(!isMatch) return res.status(400).json({ message: 'Неверный пароль!' })

            const token = jwt.sign(
                { userId: user.id },
                config.get("jwtSecret"),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch(e) {
            res.status(500).json({ message: 'авторизация не пройдена!' })
        }
    }
)



module.exports = router