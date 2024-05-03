import React from 'react';

const Title = ({value}) => {
    return (
        <div className="flex items-center mb-8 ml-[15%]">
          <h2 className="text-lightSlate text-3xl">{value}</h2>
          <div className="ml-6 w-[25vw] border-t-[1px] border-lightSlate"></div>
        </div>
    );
};

export default Title;