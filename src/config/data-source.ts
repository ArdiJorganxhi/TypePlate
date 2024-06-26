import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": process.env.HOST,
    "port": 5432,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "synchronize": true,
    "logging": true,
    "entities": ['src/entities/**/*.entity.ts'],
    "migrations": ['src/migrations/**/*.ts'],
    "subscribers": ['src/subscribers/**/*.subscriber.ts']

});