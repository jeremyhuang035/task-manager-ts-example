import { Grid } from '@mui/material';
import Profile from './Profile';
import TaskForm from './form/TaskForm';

const Sidebar = () => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Nala" />
      <TaskForm />
    </Grid>
  );
};

export default Sidebar;
