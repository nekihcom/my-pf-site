import { FC, memo } from "react";
import { Box } from "@mui/material";

type Props = {
  src: string;
};

const Icon:FC<Props> = memo((props) => {
  const { src } = props;
  return (
    <>
      <Box component={"img"} alt="Qiita" src={src} />
    </>
  )
});
export default Icon;