import React from "react";
import { IconButton } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

const PlatformIcon = ({ logo, url }) => {
  return (
    <IconButton
      component="a"
      href={url}
      target="_blank"
      sx={{ width: 30, height: 30, padding: 0, boxShadow: "none" }}
    >
      {logo && <GatsbyImage image={logo} alt="Platform Icon"/>}
    </IconButton>
  );
};

export default PlatformIcon;
