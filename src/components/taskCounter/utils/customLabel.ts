import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../form/enums/Status';

export const customLabel = (status: TaskCounterStatusType) => {
  switch (status) {
    case Status.todo:
      return 'Todos';
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
    default:
      throw new Error('status type not found');
  }
};
