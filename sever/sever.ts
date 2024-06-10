import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // If you see a TypeScript error about 'useNewUrlParser', you can safely ignore it
} as any);

// Define a Mongoose Schema and Model for testing
const testSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const YourModel = mongoose.model('YourModel', testSchema);

// Test endpoint to check DB connectivity
app.get('/test-db', async (req: Request, res: Response) => {
  try {
    // Perform a sample CRUD operation
    const testItem = { name: 'Test Item', description: 'This is a test item' };

    // Create
    const createdItem = await YourModel.create(testItem);

    // Read
    const foundItem = await YourModel.findById(createdItem._id);

    // Update
    if (foundItem) {
      foundItem.description = 'Updated description';
      await foundItem.save();
    }

    // Delete
    if (foundItem) {
      await YourModel.deleteOne({ _id: foundItem._id });
    }

    res.status(200).json({ message: 'Database connectivity test successful' });
  } catch (error: any) {
    console.error('Error testing database connectivity:', error);
    res.status(500).json({ message: 'Failed to test database connectivity', error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
