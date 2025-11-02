"use client"
import React from 'react';
import YouTube from 'react-youtube';

const App = () => {
const videos = [
    'https://www.youtube.com/watch?v=0Mojo706zoQ',
    'youtube.com/watch?feature=shared&v=JJoglLU9qoQ',
    'https://www.youtube.com/watch?v=UMDd0_GdK70',
    'https://www.youtube.com/watch?v=1JBp3PWRBXM',
    'https://www.youtube.com/watch?v=_KCbj-g4_P0',
    'https://www.youtube.com/watch?v=9tbsoUZZaEk',
    'https://www.youtube.com/watch?v=ZgfWbzyItzI',
    'https://www.youtube.com/watch?v=St0uWuQlbMA',
    'https://www.youtube.com/watch?v=4INFJVLcmlg',
    'https://www.youtube.com/watch?v=DBcV_ILLEFE',
    'https://www.youtube.com/watch?v=CbcAivN6FgU',
    'https://www.youtube.com/watch?v=ehEr7dmc4gc',
    'https://www.youtube.com/watch?v=R82vM9vhsLc',
    'https://www.youtube.com/watch?v=KBek_iWGyBU'
];



  return (
    <div className="container mx-auto py-12 px-6 bg-[url('/bg-circle.png')] bg-left bg-cover">
      <h1 className="text-3xl font-bold text-center mb-8">Video updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center items-center">
            <div className="w-full aspect-w-16 aspect-h-9">
              <YouTube videoId={video.substring(video.lastIndexOf('=') + 1)} className="flex justify-center w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
