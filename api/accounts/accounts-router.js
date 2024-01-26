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
  // try {
  //   const account = await Accounts.getById(req.params.id)
  //   res.json(account)
  // }catch(err){
  //   next(err)
  // }
  res.json(req.account)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await Accounts.create({ name: req.body.name.trim(), budget: req.body.budget})
    res.status(201).json(newAccount)
  }catch(err){
    next(err)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  const updated = await Accounts.updateById(req.params.id, req.body)
  res.json(updated)
  try {
    res.json(`get account: UPDATE ACCOUNT BY ID`)
  }catch(err){
    next(err)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await Accounts.deleteById(req.params.id)
    res.json(req.account)
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = router;
