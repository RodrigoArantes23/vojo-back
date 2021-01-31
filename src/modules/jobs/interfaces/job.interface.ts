import { Document } from 'mongoose';

export interface IJob extends Document {
  id: string;
  title: string;
  description: Array<string>;
  requirements: string;
  totalSpots: number;
  information: string;
  education: string;
  company: string;
  compensation: {
    currency: string;
    amount: number;
    recurrency: string;
    isVariable: boolean;
  };
  location: { city: string; state: string; country: string };
}
