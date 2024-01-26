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

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts').where('id', id).update(account)
  return getById(id)
  //update accountsset name='SomeName' budget=1000 where id=whatever
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).del()
  // delete from accounts where id = whatever
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
