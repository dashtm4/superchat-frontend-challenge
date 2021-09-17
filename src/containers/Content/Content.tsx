import React from "react";
import { Route, Switch } from "react-router-dom";
import clsx from "clsx";

import Services from "@/containers/Services";

import "./Content.scss";

interface IProps {
  className?: string;
}

function Content({ className: wrapperStyle }: IProps) {
  return (
    <div className={clsx(wrapperStyle, "content--wrapper")}>
      <Switch>
        <Route>
          <Services />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
