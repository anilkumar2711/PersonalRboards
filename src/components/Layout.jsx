import React from 'react';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';

function Layout({ children }) {
  return (<>
    <Header />
    <div className="flex h-in-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col" >

        {/* Page content */}
        <div className="flex-1 p-8 overflow-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  </>

  );
}

export default Layout;


