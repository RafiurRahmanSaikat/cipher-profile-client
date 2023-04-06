import React from "react";
import ReactTooltip from "react-tooltip";

import GitHubCalendar from "react-github-calendar";

const Home = () => {
  return (
    <div className="p-10 m-10 mx-auto max-w-screen-lg">
      <GitHubCalendar
        children={<ReactTooltip html />}
        username="RafiurRahmanSaikat"
      />
    </div>
  );
};

export default Home;
