import mongoose from 'mongoose';

export async function removeAllCollections(): Promise<void> {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection =
      mongoose.connection.collections[collectionName];
    await collection.deleteMany(); // todo: need to fix this
  }
}

afterEach(async () => {
  await removeAllCollections();
});
