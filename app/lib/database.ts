import { type GeneratedAlways, Kysely } from 'kysely'
import { PostgresJSDialect } from 'kysely-postgres-js'
import postgres from 'postgres'

interface Database {
  person: {
    id: GeneratedAlways<number>
    first_name: string | null
    last_name: string | null
    age: number
  }
}

const db = new Kysely<Database>({
  dialect: new PostgresJSDialect({
    postgres: postgres({
      database: 'test',
      host: 'localhost',
      max: 10,
      port: 5434,
      user: 'admin',
    }),
  }),
})

const people = await db.selectFrom("person").selectAll().execute();