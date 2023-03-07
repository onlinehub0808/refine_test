import React from "react";

import { Refine } from "@pankod/refine-core";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { HeadlessInferencer } from "@pankod/refine-inferencer/headless"

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      resources = {[
        {
          name:"products",
          list: HeadlessInferencer,
          show: HeadlessInferencer,
          create: HeadlessInferencer,
          edit: HeadlessInferencer,
        }
      ]}
    />
  );
}

export default App;
