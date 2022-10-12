import { FunctionComponent, useState } from "react";

import Title from "../components/Common/Title";
import { useCurrentViewportView } from "../hooks/useCurrentViewportView";

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {

  const { isMobile } = useCurrentViewportView();
  return (
    <>
      <Title value={"Sign In | NightOwl"} />

      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="fixed md:-top-[130px] -top-[155px] object-cover left-0 h-[135vh] w-full -z-10"
        >
          <source
            src="https://raw.githubusercontent.com/fuocy/video/master/endgame.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div className="md:bg-black/80 bg-dark min-h-screen">
      </div>
    </>
  );
};

export default Auth;
