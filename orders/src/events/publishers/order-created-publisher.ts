import { Publisher, OrderCreatedEvent, Subjects } from '@abcsepackages/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
