import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MapPin} from 'lucide-react';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Distance = () => {

  
    return(
        <div className="flex flex-col gap-4">
            <div className="relative">
                <input type="text" placeholder="Pick up address" className='w-full p-2 border-b border-gray-200 focus:outline-none focus:border-black transition-colors pl-8' />
                <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="relative">
                <input type="text" placeholder="Drop Off Address" className='w-full p-2 border-b border-gray-200 focus:outline-none focus:border-black transition-colors pl-8' />
                <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="relative ">
                 <FormControl fullWidth>
                <InputLabel id="route-select-label">Trip type</InputLabel>
                <Select
                     labelId="route-select-label"
                     label="Trip type"
                >
                    <MenuItem value="one-way">One Way</MenuItem>
                    <MenuItem value="round-trip">Round Trip</MenuItem>
                </Select>
           </FormControl>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Pick Up date" />
                <TimePicker label="Pick Up time"  />              
            </LocalizationProvider>
            </div>
         
               
        </div>
    )
}

export default Distance