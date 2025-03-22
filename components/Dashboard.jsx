import Image from 'next/image';
import React from 'react';

function Dashboard() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Image
        src="/dashboard.png" 
        alt="Dashboard Image"
        width={1000} 
        height={500}  
        className="rounded-lg
         shadow-lg
          mx-auto"
      />
    </div>
  );
}

export default Dashboard;

