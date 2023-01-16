import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from './taskCounter/TaskCounter';
import { Status } from './form/enums/Status';
import Task from './task/Task';

const TaskArea = () => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of Your Tasks As On {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} />
          <TaskCounter status={Status.inProgress} />
          <TaskCounter status={Status.completed} />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
