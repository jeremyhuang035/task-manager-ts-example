import { Box, Typography, Chip } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import format from 'date-fns/format';

const TaskHeader = (props: ITaskHeader) => {
  const { title = 'Default Title', date = new Date() } = props;

  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PPP')} />
      </Box>
    </Box>
  );
};

export default TaskHeader;
