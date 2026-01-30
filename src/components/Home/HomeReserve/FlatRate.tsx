import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const FlatRate = () => {
 

    return(
         <div className='flex flex-col gap-4'>

            <FormControl fullWidth>
                <InputLabel id="route-select-label">Select Route</InputLabel>
                <Select
                     labelId="route-select-label"
                     label="Select Route"
                     defaultValue=""
                >
                    <MenuItem value="airport-downtown">Airport to Downtown ($75)</MenuItem>
                    <MenuItem value="downtown-airport">Downtown to Airport ($75)</MenuItem>
                    <MenuItem value="city-tour">City Tour ($150)</MenuItem>
                </Select>
           </FormControl>
            <div className="flex  flex-col lg:flex-row gap-2 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Pick Up date" />
                    <TimePicker label="Pick Up time"/>
            </LocalizationProvider>
        </div>
        </div>
    
    )
}

export default FlatRate