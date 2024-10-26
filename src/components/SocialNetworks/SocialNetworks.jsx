import React from "react";
import { Facebook, Github, Google, Linkedin } from "react-bootstrap-icons";
import Button from "../Buttons/Button";

import { socialNetworks } from "./SocialNetworks.module.css";

const SocialNetworks = () => {
  return (
    <div className={`${socialNetworks} mb-3 mt-4`}>
      <Button>
        <Google />
      </Button>
      <Button>
        <Facebook />
      </Button>
      <Button>
        <Github />
      </Button>
      <Button>
        <Linkedin />
      </Button>
    </div>
  );
};

export default SocialNetworks;
