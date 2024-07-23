import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import FrameComponent from "./FrameComponent";
import S from "./S";
import PropTypes from "prop-types";
import styles from "./ExistingCompsInCloud.module.css";

const ExistingCompsInCloud = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackQuestionArrowClick = useCallback(() => {
    navigate("/portfolio-question");
  }, [navigate]);

  return (
    <div className={[styles.workloadDescription, className].join(" ")}>
      <img
        className={styles.screenshot202406261346281}
        alt=""
        src="/screenshot-20240626-134628-1@2x.png"
      />
      <section className={styles.screenshot202406261347102Parent}>
        <img
          className={styles.screenshot202406261347102}
          loading="lazy"
          alt=""
          src="/screenshot-20240626-134710-2@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.workloadPlacementParent}>
              <h2 className={styles.workloadPlacement}>Workload Placement</h2>
              <div className={styles.frameGroup}>
                <div className={styles.headerbodyDividerWrapper}>
                  <img
                    className={styles.headerbodyDividerIcon}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className={styles.optionContent}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.backQuestionArrowWrapper}>
                          <img
                            className={styles.backQuestionArrow}
                            loading="lazy"
                            alt=""
                            src="/back-question-arrow.svg"
                            onClick={onBackQuestionArrowClick}
                          />
                        </div>
                        <Question textHeading="Which of the following best describes your workload?" />
                      </div>
                    </div>
                    <div className={styles.frameParent2}>
                      <FrameComponent />
                      <S random="The workload is an existing one" />
                      <S
                        random="The workload is a new component of an existing app"
                        propMinWidth="226px"
                      />
                    </div>
                  </div>
                  <div className={styles.dropdownMenuWrapper}>
                    <div className={styles.dropdownMenu}>
                      <div className={styles.selectQuestion}>
                        Select Question
                      </div>
                      <div className={styles.dropdownMenuInner}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pleaseSelectToContinueWrapper}>
              <h2 className={styles.pleaseSelectTo}>
                Please Select To Continue
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ExistingCompsInCloud.propTypes = {
  className: PropTypes.string,
};

export default ExistingCompsInCloud;
