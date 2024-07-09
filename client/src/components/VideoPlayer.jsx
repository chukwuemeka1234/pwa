import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="flex justify-center flex-wrap">
      {stream && (
        <div className="p-2 border-2 border-black m-2">
          <div className="w-full md:w-1/2">
            <h5 className="text-xl mb-2">{name || 'Name'}</h5>
            <video playsInline muted ref={myVideo} autoPlay className="max-w-lg md:max-w-xs" />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="p-2 border-2 border-black m-2">
          <div className="w-full md:w-1/2">
            <h5 className="text-xl mb-2">{call.name || 'Name'}</h5>
            <video playsInline ref={userVideo} autoPlay className="max-w-lg md:max-w-xs" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
