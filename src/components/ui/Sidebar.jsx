import React from 'react';
import { Button } from './button';
import { Home, PanelsLeftBottom, BriefcaseBusiness} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar () {
    const location = useLocation();
    return (<div className="w-64 bg-white p-4 flex flex-col border">
        <nav className="flex-grow">
            <Link to="/" className={`flex items-center text-txtblack py-2 px-4 rounded ${location.pathname === '/' ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-200'}`}>
                <Home className="mr-2 h-5 w-5 text-txtblack" />
                Home
            </Link>
            <Link to="/projects" className={`flex items-center py-2 px-4 rounded ${location.pathname === '/projects' ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-200'}`}>
                <BriefcaseBusiness className="mr-2 h-5 w-5 text-txtblack" />
                Projects
            </Link>
            <a href="javascript:void(0)" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
                <PanelsLeftBottom className="mr-2 h-5 w-5 text-txtblack" />
                Boards
            </a>
        </nav>
        <Button className="mt-auto bg-golerly hover:bg-purple-600 text-white">
            Get goals early
        </Button>
    </div>)
}

export default Sidebar;