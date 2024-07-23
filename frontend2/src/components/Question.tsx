import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Question.module.css";

const Question = ({
  className = "",
  textHeading,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const questionStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={[styles.question, className].join(" ")}
      style={questionStyle}
    >
      <div className={styles.text}>
        <div className={styles.textHeading}>{textHeading}</div>
        <div className={styles.bodyText}>Body text</div>
      </div>
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
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
  textHeading: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Question;
