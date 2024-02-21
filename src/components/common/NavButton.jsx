import { Button, Link } from "@chakra-ui/react";

const NavButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <Button variant="solid" mr="4" background="#3FBD41">
        {text}
      </Button>
    </Link>
  );
};

export default NavButton;
