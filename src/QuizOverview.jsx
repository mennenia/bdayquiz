import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";

import intro from "./intro.jpeg";
import bondimg from "./bond.jpeg";
import worrallimg from "./worrall.jpeg";

import { animated, useTransition } from "react-spring";

import { useMediaQuery } from "react-responsive";

export const QuizOverview = ({ thing }) => {
  const [bond, setBond] = useState(0);
  const [worrall, setWorrall] = useState(0);

  const isLaptopOrTablet = useMediaQuery({
    query: "(min-device-width: 768px)"
  });

  const pages = [
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => {
            onClick();
          }}
        >
          <img src={intro} style={{ width: "100%", objectFit: "contain" }} />
          {/* Let's get started */}
        </div>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"On any given day, are you most likely to carry on you: "}
          answerA={"A range of A/V equipment, cables, and SD cards"}
          answerB={"A Rolex watch"}
          answerC={"A Tape Recorder Camera"}
          answerD={"A blue BIC pen"}
          submitCallback={letter => {
            if (letter === "A" || letter === "D") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Your favourite drink is: "}
          answerA={"A martini"}
          answerB={"An old fashioned"}
          answerC={"A mojito"}
          answerD={"A beer"}
          submitCallback={letter => {
            if (letter === "C" || letter === "D") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"The best way out of an unfortunate situation is: "}
          answerA={"A good punchline"}
          answerB={"A jetpack"}
          answerC={"Red bull"}
          answerD={"A gorilla suit"}
          submitCallback={letter => {
            if (letter === "A" || letter === "C") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Your preferred sound is: "}
          answerA={"The shaking of a martini"}
          answerB={"A good drum solo"}
          answerC={"The revving engine of an Aston Martin"}
          answerD={"Crocodiles enjoying lunch that isn’t you"}
          submitCallback={letter => {
            if (letter === "B" || letter === "C") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Your favourite food is:"}
          answerA={"A full English"}
          answerB={"Dressed crab"}
          answerC={"Roast with all the trimmings"}
          answerD={"Prawn cocktail"}
          submitCallback={letter => {
            if (letter === "A" || letter === "C") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Your favourite place to go on holiday is: "}
          answerA={"Venice"}
          answerB={"Monaco"}
          answerC={"Dubai"}
          answerD={"The Grand Canyon"}
          submitCallback={letter => {
            if (letter === "D" || letter === "C") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Your idea of pulling a prank involves: "}
          answerA={"Moving furniture, grass seeds, and patience"}
          answerB={"Playing cards, poker chips, and a martini"}
          answerC={"Submarines, a hot date, and a union jack parachute"}
          answerD={"A dark night, lasers, and security guards"}
          submitCallback={letter => {
            if (letter === "A" || letter === "D") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"You are most often mistaken for: "}
          answerA={"Sean Connery "}
          answerB={"Ed Sheeran"}
          answerC={"Idris Elba"}
          answerD={"Draco Malfoy"}
          submitCallback={letter => {
            if (letter === "B" || letter === "D") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"The most scared you’ve ever been is: "}
          answerA={
            "Dangling off the side of a rollercoaster ride for 20 minutes, patiently awaiting rescue"
          }
          answerB={
            "Pinned down whilst a laser beam slowly heads towards your lower regions"
          }
          answerC={"Controlling an imminently exploding plane"}
          answerD={"Producing a live radio show for the first time"}
          submitCallback={letter => {
            if (letter === "A" || letter === "D") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Being high involves: "}
          answerA={"The 8th floor of the BBC Broadcasting House"}
          answerB={"A great time at university"}
          answerC={"Austrian mountains"}
          answerD={"A spiked drink"}
          submitCallback={letter => {
            if (letter === "A" || letter === "B") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <QuestionCard
          question={"Being a gentleman means: "}
          answerA={"Going in for a kiss on the cheek"}
          answerB={"Ordering her drink (she gets no choice)"}
          answerC={"A surprise roadtrip"}
          answerD={"Saving her from instant death"}
          submitCallback={letter => {
            if (letter === "D" || letter === "C") {
              setWorrall(worrall + 1);
            } else {
              setBond(bond + 1);
            }
            onClick();
          }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <div
          style={{
            width: "100vh",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {bond > worrall ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <img
                src={bondimg}
                alt={"bond"}
                style={{
                  width: isLaptopOrTablet ? "60%" : null,
                  objectFit: "contain",
                  margin: isLaptopOrTablet ? null : 24
                }}
              />
              <div
                style={{
                  marginTop: 16,
                  marginBottom: 16,
                  fontSize: 22,
                  color: "#131313",
                  opacity: 0.8,
                  fontWeight: 600
                }}
              >
                <h2>You are a... Bond</h2>
              </div>
              <div style={{ alignSelf: "center" }}>
                <div
                  style={{
                    color: "#131313",
                    fontSize: isLaptopOrTablet ? 16 : 14,
                    width: isLaptopOrTablet ? 540 : null,
                    margin: isLaptopOrTablet ? null : 24,
                    textAlign: "left",
                    lineHeight: "140%",
                    opacity: 0.6
                  }}
                >
                  Whilst you enjoy frequenting Europe, you’re a true Brit at
                  heart, proudly sporting a Union Jack parachute whilst gliding
                  through the Alps. You live an interesting life, where poker
                  chips, submarines, and crocodiles often intertwine, but with a
                  Martini in one hand, and your unique Rolex in the other, you
                  handle most of ‘em like a champ. On occasion you still need to
                  rely on a gorilla suit though, which can pose an issue with
                  the opposite sex. However, your suave ways of ordering them
                  drinks and of course, saving them from instant death tends to
                  make them swoon regardless of the excess fur.
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <img
                src={worrallimg}
                alt={"worrall"}
                style={{
                  width: isLaptopOrTablet ? "60%" : null,
                  objectFit: "contain",
                  margin: isLaptopOrTablet ? null : 2
                }}
              />
              <div
                style={{
                  marginTop: 16,
                  marginBottom: 16,
                  fontSize: 22,
                  color: "#131313",
                  opacity: 0.8,
                  fontWeight: 600
                }}
              >
                <h2>You are a... Worrall</h2>
              </div>
              <div style={{ alignSelf: "center" }}>
                <div
                  style={{
                    color: "#131313",
                    fontSize: isLaptopOrTablet ? 16 : 14,
                    width: isLaptopOrTablet ? 540 : null,
                    margin: isLaptopOrTablet ? null : 24,
                    textAlign: "left",
                    lineHeight: "140%",
                    opacity: 0.6
                  }}
                >
                  You prefer high environments, much like top floors of media
                  buildings, where more often than not you save the day with a
                  quick joke and speedy edit. You hide your dark past as a
                  prankster by talking about sophisticated trips to The Grand
                  Canyon and Dubai, not to mention your aspirations of owning an
                  Aston Martin. However, you can’t quite let go of your rockstar
                  self and are still partial to drumming along to most songs.
                  BIC pens are particularly good for that, though they often end
                  up strewn across the house and your loved ons fear for ink
                  stains daily. If need be, you sandwich a heavy workday with a
                  Red Bull and a beer. Mojitos are reserved for party time. No
                  gin though. Never gin.
                </div>
              </div>
            </div>
          )}
        </div>
      </animated.div>
    )
  ];

  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 13), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
    trail: 10
  });

  return (
    <div>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
};

const Question = ({ text }) => {
  const isLaptopOrTablet = useMediaQuery({
    query: "(min-device-width: 768px)"
  });
  return (
    <p
      style={{
        fontSize: isLaptopOrTablet ? 18 : 14,
        textAlign: "left",
        color: "#131313"
      }}
    >
      {text}
    </p>
  );
};

const Answer = ({ letter, text, submitCallback }) => {
  const [hoverRef, isHovered] = useHover();

  const isLaptopOrTablet = useMediaQuery({
    query: "(min-device-width: 768px)"
  });

  return (
    <div
      ref={hoverRef}
      onClick={() => {
        submitCallback(letter);
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#C0C0C0",
        borderRadius: 4,
        borderColor: "#131313",
        // borderColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        paddingLeft: 4,
        paddingRight: 8,
        margin: 4,
        opacity: isHovered ? 1 : 0.6
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#131313",
          borderRadius: 4,
          borderColor: "white",
          borderWidth: 1,
          borderStyle: "solid",
          height: 18,
          width: 18,
          padding: 4,
          margin: 4,
          opacity: 0.5,
          fontSize: isLaptopOrTablet ? 18 : 14,
          textAlign: "left",
          color: "white"
        }}
      >
        {letter}
      </div>
      <div>
        <p
          style={{
            fontSize: isLaptopOrTablet ? 18 : 14,
            textAlign: "left",
            color: "#131313"
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const QuestionCard = ({
  question,
  answerA,
  answerB,
  answerC,
  answerD,
  submitCallback
}) => {
  const isLaptopOrTablet = useMediaQuery({
    query: "(min-device-width: 768px)"
  });

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16,
          width: isLaptopOrTablet ? 480 : "100%",
          margin: isLaptopOrTablet ? null : 24
        }}
      >
        <div>
          <Question text={question} />
        </div>
        {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ display: "flex", flexDirection: "column", flexBasis: "50%" }}
        > */}
        <div>
          <Answer text={answerA} letter={"A"} submitCallback={submitCallback} />
        </div>
        <div>
          <Answer text={answerB} letter={"B"} submitCallback={submitCallback} />
        </div>
        {/* </div>
        <div
          style={{ display: "flex", flexDirection: "column", flexBasis: "50%" }}
        > */}
        <div>
          <Answer text={answerC} letter={"C"} submitCallback={submitCallback} />
        </div>
        <div>
          <Answer text={answerD} letter={"D"} submitCallback={submitCallback} />
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

// Hook
function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
