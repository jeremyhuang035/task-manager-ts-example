import { Box } from '@mui/material';
import { Priority } from '../form/enums/Priority';
import { Status } from '../form/enums/Status';
import { ITask } from './interfaces/ITask';
import { priorityBorderColor } from './utils/priorityBorderColor';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import TaskHeader from './_taskHeader';

const Task = (props: ITask) => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'test',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: priorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} />
    </Box>
  );
};

export default Task;
