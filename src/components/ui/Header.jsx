import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import Dropdown from './Dropdown';
import { Settings } from 'lucide-react';
// import './assests/Group 152.png';

function Header () {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    return (
        <div className="p-2 flex justify-between items-center bg-[#EDF4FF]" >
          {/* <h1 className="text-2xl font-bold text-purple-600 w-64">Rboards</h1> */}
          <img src="Group 152.png" alt="rboard" className='pl-6'/>
          <div className="grow flex justify-center item-center">
            <div className="relative w-3/6">
                <Input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-pjctblue text-white">
              Create Project
            </Button>
            <Dropdown options={options} optionTag="a" hasDropIcon={false} placeholder={<Settings className="h-5 w-5" />} />
          </div>
        </div>
    );
}

export default Header;