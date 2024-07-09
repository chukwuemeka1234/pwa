import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="w-full md:w-3/5 mx-auto my-8 p-0">
      <div className="p-4 border-2 border-black shadow-lg">
        <form className="flex flex-col" noValidate autoComplete="off">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="p-4 w-full md:w-1/2">
              <h6 className="text-lg font-medium mb-2">Account Info</h6>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full px-3 py-2 border rounded"
              />
              <CopyToClipboard text={me}>
                <button
                  type="button"
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center"
                >
                  <span className="material-icons mr-2">assignment</span> Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="p-4 w-full md:w-1/2">
              <h6 className="text-lg font-medium mb-2">Make a call</h6>
              <input
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="ID to call"
                className="w-full px-3 py-2 border rounded"
              />
              {callAccepted && !callEnded ? (
                <button
                  type="button"
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded flex items-center justify-center"
                  onClick={leaveCall}
                >
                  <span className="material-icons mr-2">Hang up</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-4 w-full bg-green-500 text-white py-2 rounded flex items-center justify-center"
                  onClick={() => callUser(idToCall)}
                >
                  <span className="material-icons mr-2">phone</span> Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
