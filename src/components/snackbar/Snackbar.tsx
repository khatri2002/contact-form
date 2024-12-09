import styles from "./Snackbar.module.scss";
import SuccessCheck from "../../assets/images/icon-success-check.svg";
import { SnackbarProps } from "../../types";
import classNames from "classnames";
import { useEffect } from "react";

const Snackbar = ({
  title,
  description,
  show,
  close,
  duration,
}: SnackbarProps) => {
  const DEFAULT_DURATION = 3000;

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        close();
      }, duration || DEFAULT_DURATION);
    }
  }, [close, duration, show]);

  return (
    <div
      className={classNames({ [styles.snackbar]: true, [styles.show]: show })}
    >
      <div className={styles.header}>
        <img src={SuccessCheck} alt="success-check" />
        <span>{title}</span>
      </div>
      <span className={styles.desc}>{description}</span>
    </div>
  );
};

export default Snackbar;
