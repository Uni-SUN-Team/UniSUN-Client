import { GetStaticProps } from "next";
import React from "react";

const ArticlePage = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};

export default ArticlePage;