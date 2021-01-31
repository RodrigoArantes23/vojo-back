import * as mongoose from 'mongoose';

export const JobSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: [String] },
    requirements: { type: String },
    totalSpots: { type: Number },
    information: { type: String },
    education: { type: String },
    company: { type: String },
    compensation: {
      currency: { type: String },
      amount: { type: Number },
      recurrency: { type: String },
      isVariable: { type: Boolean },
    },
    location: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: 'jobs' },
);
