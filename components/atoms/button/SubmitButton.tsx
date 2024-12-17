import { FC, memo, ReactNode } from "react";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";


type Props = {
  onClick: () => void;
  children: ReactNode | string;
};

const SubmitButton:FC<Props> = memo((props) => {
  const { onClick, children } = props;

  return (
    <>
      <Button variant="text" type='submit' sx={{backgroundColor:grey[200], color:'#000000DE'}} onClick={onClick}>
        { children }
      </Button>
    </>
  )
});

export default SubmitButton;
SubmitButton.displayName = 'SubmitButton';