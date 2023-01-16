import { Box, FormControlLabel, Switch, Button } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter = (props: ITaskFooter) => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="warning"
            onChange={(e) => onStatusChange(e)}
          />
        }
        label="In Progess"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
