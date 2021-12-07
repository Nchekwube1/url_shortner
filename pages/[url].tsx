import React from "react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { dbConnect } from "../util/connection";
import Loading from "../components/Loading";
function Url({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Redirect</title>
        <meta name="description" content="Psylink Redirectiing..." />
        <link rel="icon" href="" />
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
  const { url } = context.params;

  try {
    const { db } = await dbConnect();
    data = await db.collection("urls").findOne({ short: url });
    return {
      props: { data: JSON.stringify(data), url: url },
      redirect: {
        destination: data !== "null" ? data.full : "",
        permanent: false,
      },
    };
  } catch (error) {
    data = null;
    return {
      props: { data: JSON.stringify(data), url: url },
    };
  }
};

export default Url;
