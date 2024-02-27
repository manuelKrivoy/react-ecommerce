import { Button, Link } from "@chakra-ui/react";

export const NavButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <Button variant="solid" mr="4" background="#3FBD41">
        {text}
      </Button>
    </Link>
  );
};
