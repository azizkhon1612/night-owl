import { FunctionComponent, useState } from "react";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Title from "../components/Common/Title";
import { useCurrentViewportView } from "../hooks/useCurrentViewportView";

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
            src="https://github.com/azizkhon1612/night-owl/blob/master/public/Marvel%20Studios'%20Doctor%20Strange%20in%20the%20Multiverse%20of%20Madness%20_%20Official%20Trailer%20(online-video-cutter.com)%20(1).mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div className="md:bg-black/80 bg-dark min-h-screen">
        {!isSignIn && <SignUp setIsSignIn={setIsSignIn} isSignIn={isSignIn} />}
        {isSignIn && <SignIn setIsSignIn={setIsSignIn} isSignIn={isSignIn} />}
      </div>
    </>
  );
};

export default Auth;
