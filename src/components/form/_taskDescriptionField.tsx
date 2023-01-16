import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField = ({
  disabled = false,
  onChange = (e) => console.log(e.target.value),
}: ITextField) => {
  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="description"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TaskDescriptionField;
