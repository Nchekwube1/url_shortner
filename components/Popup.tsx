import Image from "next/image";
import React from "react";
import icon from "../public/cancel.svg";
import Loading from "./Loading";
interface prop {
  id: string;
  modal: () => void;
  data: boolean;
}
function Popup({ id, modal, data }: prop) {
  return (
    <div className="absolute modal top-0 right-0 w-full h-full flex flex-col justify-center items-center z-40">
      <div className="relative w-2/3 h-1/3 py-2 bg-white shadow-md rounded-md flex flex-col justify-start items-center z-50">
        <div className="w-full relative mb-7 flex flex-row justify-end items-center px-2 py-2">
          <button
            onClick={() => {
              modal();
            }}
            className="relative w-7 h-7"
          >
            <Image src={icon} alt="cancel button" />
          </button>
        </div>

        {data ? (
          <div className=" relative py-3 flex justify-center items-center">
            <h1 className="relative inline">Your url is: {id}</h1>{" "}
            <button
              className="relative inline ml-4 back rounded px-2 py-2 text-white"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(id);
                  alert("Link copied to clipboard!");
                } catch {
                  alert("Could not copy link");
                }
              }}
            >
              copy
            </button>{" "}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Popup;
