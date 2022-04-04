import { Publisher, Subjects, TicketCreatedEvent } from '@abcsepackages/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
