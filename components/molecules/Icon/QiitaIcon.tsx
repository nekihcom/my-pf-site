import { FC, memo } from "react";

import Image from "@/components/atoms/image/Image";

const QiitaIcon:FC = memo(() => {
  return (
    <>
      <Image alt={"Qiita"} src={"/icon/qiita-icon.png"} width={36} />
    </>
  )
});
export default QiitaIcon;