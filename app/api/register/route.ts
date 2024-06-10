<<<<<<< Updated upstream
// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function POST(req: NextRequest) {
    try {
        const { name, uname, email, password } = await req.json();
        
        await client.connect();
        const database = client.db('Shirtify_database');
        const users = database.collection('users');
        
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
        }

        const newUser = {
            name,
            username: uname,
            email,
            password,
        };

        await users.insertOne(newUser);

        return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while registering the user.' }, { status: 500 });
    } finally {
        await client.close();
    }
}
=======
import { NextRequest, NextResponse } from 'next/server';

interface MyRequest extends NextRequest {
  json(): Promise<any>;
}
export async function POST(req: MyRequest) {
    try {
        const { name, email, password } = await req.json();

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Password: ", password);

        } catch(error) {
            return NextResponse.json({ message: "An error occured while registrating the user."}, { status: 500});
        }
    }
>>>>>>> Stashed changes
