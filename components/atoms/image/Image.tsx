import { FC, memo } from "react";
import { Box } from "@mui/material";

type Props = {
  alt?: string;
  src: string;
  width?: number;
  height?: number;
};

const Image:FC<Props> = memo((props) => {
  const { alt, src, width, height } = props;
  return (
    <>
      <Box component={"img"} alt={alt} src={src} width={width} height={height} />
    </>
  )
});
export default Image;