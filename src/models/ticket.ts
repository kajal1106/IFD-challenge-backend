import mongoose, { Document } from 'mongoose';

export interface Ticket extends Document {
  client: string;
  issue: string;
  status: 'open' | 'closed';
  deadline: Date;
}

const ticketSchema = new mongoose.Schema<Ticket>({
  client: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], required: true },
  deadline: { type: Date, required: true },
});

export default mongoose.model<Ticket>('Ticket', ticketSchema);