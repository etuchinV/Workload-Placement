import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent = ({
  className = "",
  backQuestionArrow,
  textHeading,
  star,
  x,
  star1,
  x1,
  x2,
  starIconWidth,
  onBackQuestionArrowClick,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: starIconWidth,
    };
  }, [starIconWidth]);

  return (
    <div
      className={[styles.s1Wrapper, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.s1}>
        <div className={styles.multiSelectOption2}>
          <div className={styles.text}>
            <div className={styles.random}>The workload is new</div>
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
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  backQuestionArrow: PropTypes.string,
  textHeading: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,
  star1: PropTypes.string,
  x1: PropTypes.string,
  x2: PropTypes.string,

  /** Style props */
  starIconWidth: PropTypes.any,

  /** Action props */
  onBackQuestionArrowClick: PropTypes.func,
};

export default FrameComponent;
