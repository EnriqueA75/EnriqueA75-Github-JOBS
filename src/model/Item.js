import AsyncStorage from '@react-native-async-storage/async-storage';

export class Item {
  static key = 'DATABASE_JOBS';

  static async init() {
    await AsyncStorage.setItem(Item.key, JSON.stringify([]));
  }

  static async createInsert(item) {
    const items = [item, ...(await Item.getAll())];
    await AsyncStorage.setItem(Item.key, JSON.stringify(items));
  }
  static async create(item) {
    const itemStore = await Item.getById(item.id);
    if (!itemStore) {
      await Item.createInsert(item);
    } else {
      await Item.deleteById(item.id);
    }
  }

  static async deleteById(id) {
    const items = (await Item.getAll()).filter((item) => item.id !== id);
    await AsyncStorage.setItem(Item.key, JSON.stringify(items));
  }

  static async getAll() {
    const data = JSON.parse(await AsyncStorage.getItem(Item.key));
    return data || [];
  }

  static async getById(id) {
    const [item = null] = (await Item.getAll()).filter(
      (item) => item.id === id
    );
    return item;
  }
}
