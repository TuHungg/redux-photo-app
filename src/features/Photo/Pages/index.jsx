import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import NotFound from "../../../components/NotFound";
import AddEditPage from "./AddEdit";
import MainPage from "./Main";

const Photo = (Props) => {
  const match = useRouteMatch();
  //   console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Photo;
