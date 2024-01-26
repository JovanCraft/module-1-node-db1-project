const router = require('express').Router()
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware')
const Accounts = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Accounts.getAll()
    res.status(200).json(accounts)
  }catch(err){
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Accounts.getById(req.params.id)
    res.json(account)
  }catch(err){
    next(err)
  }
})

router.post('/', checkAccountNameUnique, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: POST NEW ACCOUNT`)
  }catch(err){
    next(err)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: UPDATE ACCOUNT BY ID`)
  }catch(err){
    next(err)
  }
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: DELETE ACCOUNT BY ID`)
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = router;
