import Knex from 'knex'

export const knex = new Knex({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'leandro',
      password : 'leandro123$',
      database : 'rifa_teste'
    }
  });