import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import YearPlan from "../components/YearPlan";
export const Head = () => <Seo routename={"Year Plan"} />;
export default function yearplan() {
  return (
    <Layout>
        <YearPlan/>
    </Layout>
  );
}

