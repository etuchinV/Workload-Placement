import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "", propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.dropdownMenuWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.dropdownMenu}>
        <div className={styles.selectQuestion}>Select Question</div>
        <div className={styles.dropdownMenuInner}>
          <img className={styles.frameChild} alt="" src="/icon.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent;
