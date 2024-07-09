import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="flex justify-around items-center p-4">
          <h1 className="text-lg font-bold">{call.name} is calling:</h1>
          <button
            onClick={answerCall}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
