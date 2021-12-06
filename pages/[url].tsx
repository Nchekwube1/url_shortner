import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
type UrlParams = {
  id: string;
};
function Url({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { id } = router.query;
  // const { id } = useParams<UrlParams>();
  // useEffect(() => {
  //   axios.post(`http://localhost:5000/urls/${id}`).then((res) => {
  //     let newUrl = res.data;
  //     window.location.replace(newUrl);
  //   });
  // }, [id]);
  return (
    <>
      <Head>
        <title>Redirect</title>
        <meta name="description" content="Psylink Redirectiing..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data === null ? (
        <h1>
          Invalid url<a href="/"> go to home</a>
        </h1>
      ) : (
        <Loading />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data;
  const { url } = context.query;

  try {
    data = null;

    return {
      props: { data: JSON.stringify(data), url: url },
    };
  } catch (error) {
    data = null;
    return {
      props: { data: JSON.stringify(data), url: url },
      //       redirect: {
      //   destination: data !== "null" ? data.url : "",
      //   permanent: false,
      // },
    };
  }
};

export default Url;
