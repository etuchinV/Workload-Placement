import { FunctionComponent } from "react";
import styles from "./TextResponse.module.css";

export type TextResponseType = {
  className?: string;
};

const TextResponse: FunctionComponent<TextResponseType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.textResponse, className].join(" ")}>
      <section className={styles.multiSelectOption6}>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star.svg" />
            <div className={styles.button1}>Button</div>
            <img className={styles.xIcon} alt="" src="/x.svg" />
          </div>
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star1.svg" />
            <div className={styles.button3}>Button</div>
            <img className={styles.xIcon1} alt="" src="/x1.svg" />
          </div>
        </div>
        <div className={styles.iconButton}>
          <img className={styles.xIcon2} alt="" src="/x2.svg" />
        </div>
      </section>
      <div className={styles.text}>
        <div className={styles.other}>{`Other: `}</div>
      </div>
      <div className={styles.beginButton}>
        <div className={styles.stateLayer}>
          <b className={styles.label}>Done</b>
        </div>
      </div>
    </div>
  );
};

export default TextResponse;
