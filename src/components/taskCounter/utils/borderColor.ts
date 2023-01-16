import { Status } from '../../form/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const borderColor = (status: TaskCounterStatusType) => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
    default:
      throw new Error('status type not found');
  }
};
