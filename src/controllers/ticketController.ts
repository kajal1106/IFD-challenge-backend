import { RequestHandler } from 'express';
import Ticket from '../models/ticket';

export const getTickets = async (req : any, res : any) => {
  try {
    const tickets = await Ticket.find().sort({ deadline: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tickets' });
  }
};

export const createTicket: RequestHandler = async (req, res) => {
  const { client, issue, status, deadline } = req.body;
  try {
    const ticket = await Ticket.create({ client, issue, status, deadline });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create ticket' });
  }
};

export const updateTicket: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update ticket' });
  }
};