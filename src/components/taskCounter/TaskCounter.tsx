import { Box, Avatar, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { borderColor } from './utils/borderColor';
import { customLabel } from './utils/customLabel';

const TaskCounter = (props: ITaskCounter) => {
  const { status, count = 0 } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: `${borderColor(status!)}`,
        }}
      >
        <Typography color="#fff" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography color="#fff" variant="h5" fontWeight="bold" fontSize="20px">
        {customLabel(status!)}
      </Typography>
    </Box>
  );
};

export default TaskCounter;
