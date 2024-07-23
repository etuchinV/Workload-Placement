import PropTypes from "prop-types";
import styles from "./InitialScreen.module.css";

const InitialScreen = ({ className = "" }) => {
  return (
    <div className={[styles.vsadSelect, className].join(" ")}>
      <img
        className={styles.screenshot202406261346281}
        alt=""
        src="/screenshot-20240626-134628-1@2x.png"
      />
      <section className={styles.screenshot202406261347101Parent}>
        <img
          className={styles.screenshot202406261347101}
          loading="lazy"
          alt=""
          src="/screenshot-20240626-134710-2@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.workloadPlacementWrapper}>
              <h1 className={styles.workloadPlacement}>Workload Placement</h1>
            </div>
            <div className={styles.headerbodyDividerParent}>
              <img
                className={styles.headerbodyDividerIcon}
                loading="lazy"
                alt=""
              />
              <div className={styles.vsadSelectParent}>
                <div className={styles.vsadSelect1}>
                  <div className={styles.value}>Enter your 4 digit VSAD</div>
                  <img className={styles.xIcon} alt="" src="/x.svg" />
                </div>
                <div className={styles.beginButtonWrapper}>
                  <div className={styles.beginButton}>
                    <div className={styles.stateLayer}>
                      <h3 className={styles.labelText}>
                        Determine Workload Placement
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

InitialScreen.propTypes = {
  className: PropTypes.string,
};

export default InitialScreen;
