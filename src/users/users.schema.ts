import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  date: String,
  month: String,
  years: String,
  gender: String,
});

export interface Users extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  date: string;
  month: string;
  years: string;
  gender: string;
}
