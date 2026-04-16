const authService = require('../services/authService')
class authController {
    async  registorUser(req, res) {
        let ret = await authService.registorUser(req.body);
        if (typeof (ret) === 'string') {
            res.json({ 
                status: 'error',
                message: 'problem in registration'
            })
        } else {
            
        }
    }
}   