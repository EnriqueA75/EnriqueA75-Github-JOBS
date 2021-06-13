import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Favorito extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase({ name: 'JobsDatabse.db' })
  }

  static get tableName() {
    return 'favoritos'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      title: {type: types.TEXT, not_null: true},
      time:{type: types.TEXT, not_null: true},
      place: {type: types.TEXT, not_null: true},
      url:{type: types.TEXT, not_null: true},
      logo: {type: types.TEXT, not_null: true},
      description:{type: types.TEXT, not_null: true},
      apply: {type: types.TEXT, not_null: true}
    }
  }
}
