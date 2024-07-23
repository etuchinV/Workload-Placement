import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent1 = ({ className = "", random, propMinWidth }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.s2Wrapper, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.s2}>
        <div className={styles.multiSelectOption2}>
          <div className={styles.text}>
            <div className={styles.random}>{random}</div>
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

FrameComponent1.propTypes = {
  className: PropTypes.string,
  random: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
