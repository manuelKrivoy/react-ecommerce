import { Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const NavButton = ({ text, href }) => {
  return (
    <Link to={href}>
      <Button variant="solid" mr="4" background="#3FBD41">
        {text}
      </Button>
    </Link>
  );
};
