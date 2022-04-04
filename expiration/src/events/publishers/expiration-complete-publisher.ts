import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@abcsepackages/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
