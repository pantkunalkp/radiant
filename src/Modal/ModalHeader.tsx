import * as React from "react";
import Typography from "../Typography/Typography";
import Box from "../Box/Box";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Close from "../internal/svg-icons/Close";

const ModalHeader = ({
  title = "hii",
  onClose,
  HeaderIcon,
  CloseIcon = <Close />,
}: any) => {
  return (
    <Box sx={{ height: "72px !important" }}>
      {HeaderIcon}
      <Button>Click me</Button>
      <Typography>{title}</Typography>
      <IconButton color="primary" size="sm" onClick={onClose}>
        {CloseIcon}
      </IconButton>
    </Box>
  );
};

export default ModalHeader;
