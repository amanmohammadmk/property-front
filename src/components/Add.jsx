import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { addProperty } from '../service/allapi';



function Add() {



    const [createproperty, setCreateProperty] = useState({
      pname: '',
      plocation: '',
      pnumber: '',
      pfor: '',
      pfacility: [],
      ptype: '',
      pincludes: '',
      pyear: '',
      pimage: null,
    });
  
    const setInput = (e) => {
      const { name, value, type, checked, files } = e.target;
  
      setCreateProperty((prevData) => {
        if (type === 'checkbox') {
          const updatedFacility = checked
            ? [...prevData.pfacility, value]
            : prevData.pfacility.filter((facility) => facility !== value);
  
          return { ...prevData, [name]: updatedFacility };
        } else if (type === 'file') {
          return { ...prevData, [name]: files[0] };
        } else {
          return { ...prevData, [name]: value };
        }
      });
    };
  
    const handleCreate = async (e) => {
      e.preventDefault();
  
      try {
        const propertyId = {
          ...createproperty,
        };
  
        await addProperty(propertyId);
        toast.success('Your property added successfully.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
  
      } catch (error) {
        console.error('Error submitting the form:', error);
        toast.error('Error in adding. Please try again.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    };

    return (
        <>


            <form onSubmit={handleCreate}>
                <div className="container p-5 border rounded d-flex flex-column justify-content-center gap-4">



                    <TextField id="outlined-basic" label="Property Name" name='pname' variant="outlined" onChange={setInput} />


                    <div className='d-flex gap-5 flex-wrap' >
                        <TextField id="outlined-basic" label="Property Location" name='plocation' variant="outlined" onChange={setInput} />
                        <TextField id="outlined-basic" label="Property Number" name='pnumber' variant="outlined" onChange={setInput} />
                    </div>

                    <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='me-5'>Property for </FormLabel>
                        <RadioGroup
                            row
                            onChange={setInput}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="pfor"
                        >
                            <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                            <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className='d-flex flex-row flex-wrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='me-5'>Facility </FormLabel>
                        <FormControlLabel control={<Checkbox />} name='pfacility' value='Wifi' label="Wifi" onChange={setInput} />
                        <FormControlLabel control={<Checkbox />} name='pfacility' value='Water' label="Water" onChange={setInput} />
                        <FormControlLabel control={<Checkbox />} name='pfacility' value='Main-Road' label="Main Road" onChange={setInput} />
                    </FormControl>

                    <div className='d-flex gap-5' >


                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        
                            <InputLabel >Property Type</InputLabel>
                            <Select
                                name='ptype'
                                value={createproperty.ptype}
                                onChange={setInput}
                            >
                                <MenuItem value="residential">Residential</MenuItem>
                                <MenuItem value="commercial">Commercial</MenuItem>
                            </Select>
                        </FormControl>

                        {createproperty.ptype && (
                            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                                <InputLabel >Property Inculdes</InputLabel>
                                <Select
                                    label="Property Inculdes"
                                    value={createproperty.pincludes}
                                    name="pincludes"
                                    onChange={setInput}
                                >
                                    <MenuItem value="play ground">Play Ground</MenuItem>
                                    <MenuItem value="prayer hall">Prayer Hall</MenuItem>
                                </Select>
                            </FormControl>
                        )}

                    </div>

                    <FormControl className='d-flex flex-row flex-wrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='me-5'>Property Year </FormLabel>
                        <input type="date" name='pyear' style={{ padding: "10px" }} className='rounded' onChange={setInput} />
                    </FormControl>

                    <FormControl className='d-flex flex-row flex-wrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='me-5'>Property Image </FormLabel>

                        <input type="file" style={{ padding: "10px" }} className='rounded' onChange={setInput} />

                    </FormControl>


                    <div className="text-center">
                   
                    <Link to="/view"><button type="submit" className="btn btn-primary">Submit</button></Link>
            
                        
                    </div>
                </div>
            </form>



            

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </>
    );
}

export default Add;

