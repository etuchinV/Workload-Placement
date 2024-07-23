import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./S.module.css";

const S = ({ className = "", random, propMinWidth }) => {
  const s2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.s2, className].join(" ")} style={s2Style}>
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
  );
};

S.propTypes = {
  className: PropTypes.string,
  random: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default S;
