import { GetStaticProps } from "next";
import React from "react";

const OtherServicesPage = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};

export default OtherServicesPage;
