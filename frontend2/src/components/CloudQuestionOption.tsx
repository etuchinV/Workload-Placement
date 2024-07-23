import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CloudQuestionOption.module.css";

const CloudQuestionOption = ({
  className = "",
  textHeading,
  star,
  x,
  star1,
  x1,
  x2,
  propFlex,
  propMinWidth,
  propWidth,
  propMargin,
  propPosition,
  propBottom,
  propLeft,
  propHeight,
  onMultiSelectOptionClick,
}) => {
  const cloudQuestionOptionStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      bottom: propBottom,
      left: propLeft,
      height: propHeight,
    };
  }, [
    propFlex,
    propMinWidth,
    propWidth,
    propMargin,
    propPosition,
    propBottom,
    propLeft,
    propHeight,
  ]);

  return (
    <div
      className={[styles.cloudQuestionOption, className].join(" ")}
      style={cloudQuestionOptionStyle}
    >
      <div
        className={styles.multiSelectOption2}
        onClick={onMultiSelectOptionClick}
      >
        <div className={styles.text}>
          <div className={styles.textHeading}>{textHeading}</div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.starIcon} alt="" src={star} />
            <div className={styles.button1}>Button</div>
            <img className={styles.xIcon} alt="" src={x} />
          </div>
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src={star1} />
            <div className={styles.button3}>Button</div>
            <img className={styles.xIcon1} alt="" src={x1} />
          </div>
        </div>
        <div className={styles.iconButton}>
          <img className={styles.xIcon2} alt="" src={x2} />
        </div>
      </div>
    </div>
  );
};

CloudQuestionOption.propTypes = {
  className: PropTypes.string,
  textHeading: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,
  star1: PropTypes.string,
  x1: PropTypes.string,
  x2: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,

  /** Action props */
  onMultiSelectOptionClick: PropTypes.func,
};

export default CloudQuestionOption;
