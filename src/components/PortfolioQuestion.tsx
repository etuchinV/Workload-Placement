import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import S from "./S";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./PortfolioQuestion.module.css";

const PortfolioQuestion = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackQuestionArrowClick = useCallback(() => {
    navigate("/vsad-select");
  }, [navigate]);

  return (
    <div className={[styles.portfolioQuestion, className].join(" ")}>
      <img
        className={styles.screenshot202406261346281}
        alt=""
        src="/screenshot-20240626-134628-1@2x.png"
      />
      <div className={styles.cloudQuestionOption}>
        <div className={styles.multiSelectOption2}>
          <div className={styles.text}>
            <div className={styles.textHeading}>{`AI & D`}</div>
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
      <div className={styles.cloudQuestionOption1}>
        <div className={styles.multiSelectOption21}>
          <div className={styles.text1}>
            <div className={styles.textHeading1}>CSG (Corpora-te)</div>
          </div>
          <div className={styles.buttonGroup1}>
            <div className={styles.button4}>
              <img className={styles.starIcon2} alt="" src="/star.svg" />
              <div className={styles.button5}>Button</div>
              <img className={styles.xIcon3} alt="" src="/x.svg" />
            </div>
            <div className={styles.button6}>
              <img className={styles.starIcon3} alt="" src="/star1.svg" />
              <div className={styles.button7}>Button</div>
              <img className={styles.xIcon4} alt="" src="/x1.svg" />
            </div>
          </div>
          <div className={styles.iconButton1}>
            <img className={styles.xIcon5} alt="" src="/x2.svg" />
          </div>
        </div>
      </div>
      <div className={styles.cloudQuestionOption2}>
        <div className={styles.multiSelectOption22}>
          <div className={styles.text2}>
            <div className={styles.textHeading2}>TSGI</div>
          </div>
          <div className={styles.buttonGroup2}>
            <div className={styles.button8}>
              <img className={styles.starIcon4} alt="" src="/star.svg" />
              <div className={styles.button9}>Button</div>
              <img className={styles.xIcon6} alt="" src="/x.svg" />
            </div>
            <div className={styles.button10}>
              <img className={styles.starIcon5} alt="" src="/star1.svg" />
              <div className={styles.button11}>Button</div>
              <img className={styles.xIcon7} alt="" src="/x1.svg" />
            </div>
          </div>
          <div className={styles.iconButton2}>
            <img className={styles.xIcon8} alt="" src="/x2.svg" />
          </div>
        </div>
      </div>
      <div className={styles.cloudQuestionOption3}>
        <div className={styles.multiSelectOption23}>
          <div className={styles.text3}>
            <div className={styles.textHeading3}>VBG (Busine-ss)</div>
          </div>
          <div className={styles.buttonGroup3}>
            <div className={styles.button12}>
              <img className={styles.starIcon6} alt="" src="/star.svg" />
              <div className={styles.button13}>Button</div>
              <img className={styles.xIcon9} alt="" src="/x.svg" />
            </div>
            <div className={styles.button14}>
              <img className={styles.starIcon7} alt="" src="/star1.svg" />
              <div className={styles.button15}>Button</div>
              <img className={styles.xIcon10} alt="" src="/x1.svg" />
            </div>
          </div>
          <div className={styles.iconButton3}>
            <img className={styles.xIcon11} alt="" src="/x2.svg" />
          </div>
        </div>
      </div>
      <div className={styles.cloudQuestionOption4}>
        <div className={styles.multiSelectOption24}>
          <div className={styles.text4}>
            <div className={styles.textHeading4}>VCG (Consu-mer)</div>
          </div>
          <div className={styles.buttonGroup4}>
            <div className={styles.button16}>
              <img className={styles.starIcon8} alt="" src="/star.svg" />
              <div className={styles.button17}>Button</div>
              <img className={styles.xIcon12} alt="" src="/x.svg" />
            </div>
            <div className={styles.button18}>
              <img className={styles.starIcon9} alt="" src="/star1.svg" />
              <div className={styles.button19}>Button</div>
              <img className={styles.xIcon13} alt="" src="/x1.svg" />
            </div>
          </div>
          <div className={styles.iconButton4}>
            <img className={styles.xIcon14} alt="" src="/x2.svg" />
          </div>
        </div>
      </div>
      <section className={styles.screenshot202406261347102Parent}>
        <img
          className={styles.screenshot202406261347102}
          alt=""
          src="/screenshot-20240626-134710-2@2x.png"
        />
        <div className={styles.workloadHeaderWrapper}>
          <div className={styles.workloadHeader}>
            <h2 className={styles.workloadPlacement}>Workload Placement</h2>
            <div className={styles.frameParent}>
              <div className={styles.headerbodyDividerWrapper}>
                <img
                  className={styles.headerbodyDividerIcon}
                  loading="lazy"
                  alt=""
                  src="/headerbody-divider.svg"
                />
              </div>
              <div className={styles.questionOptions}>
                <div className={styles.frameGroup}>
                  <div className={styles.backQuestionArrowWrapper}>
                    <img
                      className={styles.backQuestionArrow}
                      loading="lazy"
                      alt=""
                      src="/back-question-arrow.svg"
                      onClick={onBackQuestionArrowClick}
                    />
                  </div>
                  <div className={styles.questionParent}>
                    <Question
                      textHeading="What portfolio does this application fall under?"
                      propFlex="unset"
                      propMinWidth="unset"
                      propWidth="100%"
                    />
                    <div className={styles.multiSelectOptionsWrapper}>
                      <div className={styles.multiSelectOptions}>
                        <div className={styles.s1Parent}>
                          <S random={`AI & D`} propMinWidth="128px" />
                          <FrameComponent1 random="CISO" />
                          <S random="CSG (Corporate)" propMinWidth="128px" />
                        </div>
                        <div className={styles.s4Parent}>
                          <S random="GTS Security" propMinWidth="128px" />
                          <FrameComponent1
                            random="Network Systems"
                            propMinWidth="132px"
                          />
                          <S random="Non IT" propMinWidth="128px" />
                        </div>
                        <div className={styles.s7Parent}>
                          <S random="TSGI" propMinWidth="128px" />
                          <FrameComponent1
                            random="VBG (Busine-ss)"
                            propMinWidth="132px"
                          />
                          <S random="VCG (Consu-mer)" propMinWidth="128px" />
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
                <div className={styles.dropdownMenuWrapper}>
                  <div className={styles.dropdownMenu}>
                    <div className={styles.selectQuestion}>Select Question</div>
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
        </div>
      </section>
    </div>
  );
};

PortfolioQuestion.propTypes = {
  className: PropTypes.string,
};

export default PortfolioQuestion;
