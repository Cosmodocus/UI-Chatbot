import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CreateChat = () => {

  const theme = useTheme();
  return (
    <Link to="/chat">
      <Button
        sx={{
          width: "348px",
          height: "22px",
          padding: "28px 26px",
          gap: "10px",
          borderRadius: "100px",
          backgroundColor: theme.palette.primary.main, // Use primary color from theme
          color: theme.palette.common.white,
          fontSize: "16px",
          textTransform: "none",
          border: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark, // Use dark color from theme
          },
        }}
      >
        Start Another Chat with ReX
      </Button>
    </Link>
  );
};

export default CreateChat;
