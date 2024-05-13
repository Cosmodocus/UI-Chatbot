import {Avatar, Box, Typography} from "@mui/material";
import ReX from "../assets/ReX.png";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import {useTheme} from "@emotion/react";

const ActiveChats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        borderRadius: 32,
        backgroundColor: theme.palette.common.white,
        padding: "24px",
      }}
    >
      <Avatar
        src={ReX}
        sx={{width: 80, height: 80}}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Typography
          variant="h4"
          sx={{fontWeight: 700, fontSize: 18}}
        >
          ReX
        </Typography>
        <Typography
          variant="h6"
          sx={{fontWeight: 500, fontSize: 14, color: theme.palette.grey[700]}}
        >
          Hello Andrew! I&apos;m Rex
        </Typography>
      </Box>
      <CommentRoundedIcon sx={{color: theme.palette.primary.main}} />
    </Box>
  );
};

export default ActiveChats;
