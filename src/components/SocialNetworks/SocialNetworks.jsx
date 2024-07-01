import React from "react";
import { Facebook, Github, Google, Twitter } from "react-bootstrap-icons";
import Button from "../Buttons/Button";
import { socialNetworks } from "./SocialNetworks.module.css";
import {
  signInWithGoogle,
  signInWithGithub,
  signInWithFacebook,
} from "../../firebase/auths";

const SocialNetworks = () => {
  return (
    <div className={`${socialNetworks} mb-3 mt-4`}>
      <Button>
        <Google onClick={signInWithGoogle} />
      </Button>
      <Button click={signInWithFacebook}>
        <Facebook />
      </Button>
      <Button click={signInWithGithub}>
        <Github />
      </Button>
      <Button>
        <Twitter />
      </Button>
    </div>
  );
};

export default SocialNetworks;
