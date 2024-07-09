import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <header className="bg-white rounded-xl my-8 mx-24 p-4 flex flex-row justify-center items-center w-96 md:w-full md:max-w-2xl lg:max-w-4xl border-2 border-black">
        <h2 className="text-4xl text-center">Video Chat</h2>
      </header>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
