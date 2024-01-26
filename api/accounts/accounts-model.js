const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
  //select * from accounts
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()
  //select * from accounts where id = whatever
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account)
  return getById(id)
  //insert into accounts (name, budget) values ('someName, 1000)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
