import React from 'react';
import {CheckCircleIcon} from '@heroicons/react/solid';

const Benefits = (props) => {
    console.log(props);
    return (
       
              <p className="flex items-center ml-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2"></CheckCircleIcon> 
                {props.benifit}
                </p>
       
    );
};

export default Benefits;