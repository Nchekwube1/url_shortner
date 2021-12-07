import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import Popup from "../components/Popup";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Popup"), {
  ssr: false,
});

const App = () => {
  const [url, setUrl] = useState("");
  const [err, setErr] = useState(false);
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [urlId, seturId] = useState("");
  const setModalF = () => {
    setModal(false);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (url === "") {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    } else {
      const postObj = { full: url };
      setModal(true);
      axios.post("http://localhost:3000/api/shorten", postObj).then((res) => {
        if (res.status === 201) {
          console.log(res);
          let id = res.data.id;
          let loc = window.location.href;
          seturId(loc + id);
          setLoaded(true);
        } else {
          console.log("an error occured");
        }
      });
      setUrl("");
    }
  }

  return (
    <div className="relative body">
      <Head>
        <title>Next-url</title>
        <meta name="description" content="Nexturl --link shortener" />
        <link rel="icon" />
      </Head>

      <div className="relative flex justify-start items-center py-3 flex-col w-full h-full">
        {modal ? <Popup id={urlId} modal={setModalF} data={loaded} /> : null}
        <div className="relative py-4 flex justify-center items-center flex-col w-full">
          <div className="relative w-full py-2 flex justify-center items-center">
            <h1 className="text-3xl color capitalize">create short links!</h1>
          </div>
          <div className="relative flex justify-center items-center w-full py-2 px-3">
            <h1 className="text-xl capitalize">
              <span className="color inline comforter">
                psy<span className="text-black">link</span>
              </span>{" "}
              is the best url shortening service availble completely free which
              is easily accessible and customisable{" "}
            </h1>
          </div>
        </div>

        <div className="py-2 my-3 flex justify-center items-center w-2/3 lg:w-2/5 rounded-sm shadow-md h-40 relative">
          <form
            className="flex justify-center items-center  w-full h-full relative"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className={
                err
                  ? "relative outline-none bg-red-200 h-11 rounded-sm text-base pl-1 w-3/5 capitalize "
                  : "relative outline-none back-opa h-11 rounded-sm text-base pl-1 w-3/5 capitalize "
              }
              value={url}
              placeholder="input a url to shorten"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <button className="relative ml-2 back rounded-sm py-2 px-2 text-white">
              shorten
            </button>
          </form>
        </div>
        <div className="relative text-base capitalize">
          <h1 className="text-base">
            <span className="color">urls,</span> when shorter are better
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
