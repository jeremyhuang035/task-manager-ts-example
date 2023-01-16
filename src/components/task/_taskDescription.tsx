import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription = ({
  description = 'Enter your description',
}: ITaskDescription) => {
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;
