import { useRef, useEffect, useState } from "react";

import style from "./fileItem.module.scss";

interface IServiceCard {
  img: any;
}

const FileItem = ({ img }: IServiceCard) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [filesItemMaxWidth, setfilesItemMaxWidth] = useState<string | number>();

  console.log(filesItemMaxWidth);

  useEffect(() => {
    setfilesItemMaxWidth(imgRef?.current?.clientWidth || "700px");
    console.log(filesItemMaxWidth);
  });

  return (
    <article
      className={style.filesItem}
      style={{ maxWidth: filesItemMaxWidth }}
    >
      <img ref={imgRef} src={img} alt="document" />
    </article>
  );
};

export default FileItem;
