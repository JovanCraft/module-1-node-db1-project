const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: GET ALL`)
  }catch(err){
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: GET BY ID`)
  }catch(err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: POST NEW ACCOUNT`)
  }catch(err){
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(`get account: UPDATE ACCOUNT BY ID`)
  }catch(err){
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
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
