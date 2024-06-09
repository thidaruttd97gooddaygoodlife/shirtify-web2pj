import { connectToDatabase } from './mongo';

export async function createUser(username: string, password: string) {
  const { db } = await connectToDatabase();
  const result = await db.collection('users').insertOne({ username, password });
  return result;
}

export async function loginUser(username: string, password: string) {
  const { db } = await connectToDatabase();
  const user = await db.collection('users').findOne({ username });

  if (!user || user.password !== password) {
    return { error: { field: 'uname', message: 'Invalid username or password' } };
  }

  return { success: true };
}
