import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./AppTeamReady.module.css";

const AppTeamReady = ({ className = "" }) => {
  return (
    <div className={[styles.workloadScability, className].join(" ")}>
      <img
        className={styles.screenshot202406261346281}
        alt=""
        src="/screenshot-20240626-134628-1@2x.png"
      />
      <section className={styles.screenshot202406261347102Parent}>
        <img
          className={styles.screenshot202406261347102}
          alt=""
          src="/screenshot-20240626-134710-2@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.workloadPlacementParent}>
            <b className={styles.workloadPlacement}>Workload Placement</b>
            <div className={styles.dividerContainerParent}>
              <div className={styles.dividerContainer}>
                <img
                  className={styles.headerbodyDividerIcon}
                  loading="lazy"
                  alt=""
                  src="/headerbody-divider.svg"
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.backQuestionArrowWrapper}>
                  <img
                    className={styles.backQuestionArrow}
                    loading="lazy"
                    alt=""
                    src="/back-question-arrow.svg"
                  />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.questionContainerParent}>
                      <div className={styles.questionContainer}>
                        <div className={styles.question}>
                          <div className={styles.text}>
                            <div className={styles.textHeading}>
                              Will your workload need to be scalable or require
                              a variable number of instances at different times
                              throughout the day/week/year? (Scalable yes,
                              static no)
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
                              <img
                                className={styles.xIcon}
                                alt=""
                                src="/x.svg"
                              />
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
                            <img
                              className={styles.xIcon2}
                              alt=""
                              src="/x2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.yesParent}>
                        <div className={styles.yes}>
                          <div className={styles.cloudQuestionOption}>
                            <div className={styles.multiSelectOption2}>
                              <div className={styles.text1}>
                                <div className={styles.textHeading1}>Text</div>
                              </div>
                              <div className={styles.buttonGroup1}>
                                <div className={styles.button4}>
                                  <img
                                    className={styles.starIcon2}
                                    alt=""
                                    src="/star.svg"
                                  />
                                  <div className={styles.button5}>Button</div>
                                  <img
                                    className={styles.xIcon3}
                                    alt=""
                                    src="/x.svg"
                                  />
                                </div>
                                <div className={styles.button6}>
                                  <img
                                    className={styles.starIcon3}
                                    alt=""
                                    src="/star1.svg"
                                  />
                                  <div className={styles.button7}>Button</div>
                                  <img
                                    className={styles.xIcon4}
                                    alt=""
                                    src="/x1.svg"
                                  />
                                </div>
                              </div>
                              <div className={styles.iconButton1}>
                                <img
                                  className={styles.xIcon5}
                                  alt=""
                                  src="/x2.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.greenCheck1Icon}
                            loading="lazy"
                            alt=""
                            src="/greencheck-1@2x.png"
                          />
                        </div>
                        <div className={styles.no}>
                          <div className={styles.cloudQuestionOption1}>
                            <div className={styles.cloudQuestionOption2}>
                              <div className={styles.multiSelectOption21}>
                                <div className={styles.text2}>
                                  <div className={styles.textHeading2}>
                                    Text
                                  </div>
                                </div>
                                <div className={styles.buttonGroup2}>
                                  <div className={styles.button8}>
                                    <img
                                      className={styles.starIcon4}
                                      alt=""
                                      src="/star.svg"
                                    />
                                    <div className={styles.button9}>Button</div>
                                    <img
                                      className={styles.xIcon6}
                                      alt=""
                                      src="/x.svg"
                                    />
                                  </div>
                                  <div className={styles.button10}>
                                    <img
                                      className={styles.starIcon5}
                                      alt=""
                                      src="/star1.svg"
                                    />
                                    <div className={styles.button11}>
                                      Button
                                    </div>
                                    <img
                                      className={styles.xIcon7}
                                      alt=""
                                      src="/x1.svg"
                                    />
                                  </div>
                                </div>
                                <div className={styles.iconButton2}>
                                  <img
                                    className={styles.xIcon8}
                                    alt=""
                                    src="/x2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.crossRedCirclesvg1Icon}
                            loading="lazy"
                            alt=""
                            src="/cross-red-circlesvg-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.pleaseSelectToContinueWrapper}>
                      <div className={styles.pleaseSelectTo}>
                        Please Select To Continue
                      </div>
                    </div>
                  </div>
                  <FrameComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AppTeamReady.propTypes = {
  className: PropTypes.string,
};

export default AppTeamReady;
