import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CloudQuestionOption from "./CloudQuestionOption";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./DataRegulationCheckScreen.module.css";

const DataRegulationCheckScreen = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVSADSelectTextClick = useCallback(() => {
    navigate("/vsad-select");
  }, [navigate]);

  return (
    <div className={[styles.dataRegulationCheckScreen, className].join(" ")}>
      <img
        className={styles.screenshot202406261346281}
        alt=""
        src="/screenshot-20240626-134628-1@2x.png"
      />
      <img
        className={styles.greenCheck1Icon}
        loading="lazy"
        alt=""
        src="/greencheck-1@2x.png"
      />
      <img
        className={styles.crossRedCirclesvg1Icon}
        loading="lazy"
        alt=""
        src="/cross-red-circlesvg-1@2x.png"
      />
      <div className={styles.questionButton}>
        <div className={styles.vsadSelect} onClick={onVSADSelectTextClick}>
          VSAD Select
        </div>
      </div>
      <div className={styles.initialQuestion}>
        <div className={styles.initialQuestion1}>Initial Question</div>
      </div>
      <img
        className={styles.screenshot202406261346282}
        alt=""
        src="/screenshot-20240626-134628-1@2x.png"
      />
      <section className={styles.content}>
        <img
          className={styles.screenshot202406261347102}
          alt=""
          src="/screenshot-20240626-134710-2@2x.png"
        />
        <div className={styles.optionsWrapper}>
          <div className={styles.options}>
            <h2 className={styles.workloadPlacement}>Workload Placement</h2>
            <img
              className={styles.headerbodyDividerIcon}
              loading="lazy"
              alt=""
            />
            <div className={styles.questionContainer}>
              <div className={styles.options1}>
                <div className={styles.cloudQuestion}>
                  <div className={styles.selection}>
                    <div className={styles.inputContainer}>
                      <div className={styles.backQuestionArrowWrapper}>
                        <img
                          className={styles.backQuestionArrow}
                          loading="lazy"
                          alt=""
                          src="/back-question-arrow.svg"
                        />
                      </div>
                      <div className={styles.question}>
                        <div className={styles.text}>
                          <div className={styles.textHeading}>
                            Does the data associated with this workflow require
                            special handling/restrictions for regulation
                            (FISMA/PCI/...)
                          </div>
                          <div className={styles.bodyText}>Body text</div>
                        </div>
                        <div className={styles.buttonGroup}>
                          <div className={styles.button}>
                            <img
                              className={styles.starIcon}
                              alt=""
                              src="/star.svg"
                            />
                            <div className={styles.button1}>Button</div>
                            <img className={styles.xIcon} alt="" src="/x.svg" />
                          </div>
                          <div className={styles.button2}>
                            <img
                              className={styles.starIcon1}
                              alt=""
                              src="/star1.svg"
                            />
                            <div className={styles.button3}>Button</div>
                            <img
                              className={styles.xIcon1}
                              alt=""
                              src="/x1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.iconButton}>
                          <img className={styles.xIcon2} alt="" src="/x2.svg" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.multiSelectWrapper}>
                      <div className={styles.multiSelect}>
                        <CloudQuestionOption
                          star="/star.svg"
                          x="/x.svg"
                          star1="/star1.svg"
                          x1="/x1.svg"
                          x2="/x2.svg"
                          propFlex="1"
                          propMinWidth="196px"
                          propWidth="unset"
                          propMargin="unset"
                          propPosition="unset"
                          propBottom="unset"
                          propLeft="unset"
                          propHeight="unset"
                        />
                        <CloudQuestionOption
                          star="/star.svg"
                          x="/x.svg"
                          star1="/star1.svg"
                          x1="/x1.svg"
                          x2="/x2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <FrameComponent propMinWidth="502px" />
                </div>
                <div className={styles.footer}>
                  <h2 className={styles.pleaseSelectTo}>
                    Please Select To Continue
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

DataRegulationCheckScreen.propTypes = {
  className: PropTypes.string,
};

export default DataRegulationCheckScreen;
