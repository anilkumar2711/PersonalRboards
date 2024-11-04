import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CalendarDays, CheckSquare, NotepadText, MoreHorizontal, FlaskConical,Maximize2,Ellipsis } from 'lucide-react';

function HomePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-txtblack">Good morning Divakar</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recents */}
        <Card>
          <div className="flex items-center justify-between space-y-0 pl-6 py-2">
            <span className="text-base font-medium text-txtblack">Recents</span>
            <div className='grow'></div>
            <div className='flex gap-2'>
              <Maximize2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <Ellipsis className="mr-2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckSquare className="mr-2 h-4 w-4 text-txtblack" />
                <span className="text-base font-medium mr-2 text-txtblack">Task: </span>
                <span className="text-base text-txtblack"> Search for soil samples</span>
              </li>
              <li className="flex items-center">
                <FlaskConical className="mr-2 h-4 w-4 text-txtblack" />
                <span className="text-base font-medium mr-2 text-txtblack">Experiment: </span>
                <span className="text-base text-txtblack"> DNA Isolation from soil samples</span>
              </li>
              <li className="flex items-center">
                <NotepadText className="mr-2 h-4 w-4 text-txtblack" />
                <span className="text-base font-medium mr-2 text-txtblack">Survey: </span>
                <span className="text-base text-txtblack"> DNA Isolation from soil samples</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Agenda */}
        <Card>
        <div className="flex items-center justify-between space-y-0 pl-6 py-2">
            <span className="text-base font-medium text-txtblack">Agenda</span>
            <div className='grow'></div>
            <div className='flex gap-2'>
              <Maximize2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <Ellipsis className="mr-2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          {/* <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agenda</CardTitle>
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </CardHeader> */}
          <CardContent className="pt-6">
            <div className="flex justify-center">
              <CalendarDays className="h-24 w-24 text-txtblack" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* LineUp */}
      <Card>
        <CardHeader>
          <CardTitle className="text-txtblack">LineUp</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-txtblack">No upcoming events</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;


