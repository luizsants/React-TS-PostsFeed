import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProp extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder, ...props }: AvatarProp) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithBorder}
      {...props}
    />
  );
}
