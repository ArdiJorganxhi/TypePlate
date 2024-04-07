import jwt, { JwtPayload } from 'jsonwebtoken';
import { IdentityUser } from '../types/auth/identity.user';
import dotenv from 'dotenv';

dotenv.config();

export async function generateToken(user: IdentityUser): Promise<String> {
    return jwt.sign({...user}, 'secret', {expiresIn: '1h'})
}

export async function verifyToken(token: string): Promise<Object> {
    return jwt.verify(token, 'secret');
    
}