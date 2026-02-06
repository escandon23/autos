import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Hourly = () => {
 

    return ( 
        <div className='flex flex-col gap-4'> 
        
             <FormControl fullWidth>
                <InputLabel id="route-select-label">Select Duration</InputLabel>
                <Select
                     labelId="route-select-label"
                     label="Select Duration"
                >
                    <MenuItem value="2 hrs">2 hrs</MenuItem>
                    <MenuItem value="3 hrs">3 hrs</MenuItem>
                    <MenuItem value="four-hrs">4 hrs</MenuItem>
                    <MenuItem value="five-plus-hrs">5+ hrs</MenuItem>

                </Select>
           </FormControl>

            <div className="flex  flex-col lg:flex-row gap-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Pick Up date"/>
                        <TimePicker label="Pick Up time" />
                  
                </LocalizationProvider>
            </div>
        </div>

    )
}

export default Hourly