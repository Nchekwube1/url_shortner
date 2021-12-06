import React from "react";

function Loading() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="bg-red-400 w-6 h-6 rounded-full animate-bounce mr-2"></div>
      <div className="bg-blue-400 w-6 h-6 rounded-full animate-bounce mr-2 del-250"></div>
      <div className="bg-green-400 w-6 h-6 rounded-full animate-bounce del-450"></div>
    </div>
  );
}

export default Loading;
