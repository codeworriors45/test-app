import { Box, TextField } from "@mui/material";
import { ContainerWrapper } from "./Home.style.js";
import { default as likedeactive } from "../../assets/img/likeDeActive.svg";
import { default as likeactive } from "../../assets/img/likeActive.svg";
import Happy from "../../assets/img/happy.png";
import Neutral from "../../assets/img/neutral.png";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const initialFormData = {
  bodyLangAndToneRating: 0,
  bodyLangAndTone: "",
  reflectingBackRange: 0,
  reflectingBack: "",
  exploratoryQuestionRating: 0,
  exploratoryQuestion: "",
  additionalComments: "",
};

const Home = () => {
  const [formData, setFormData] = useState(initialFormData);
  const ratingArray = [1, 2, 3, 4, 5];

  const onChangeForm = (event) => {
    const { value, id } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRating = (propertyName, index) => {
    setFormData({ ...formData, [propertyName]: index });
  };

  return (
    <>
      <ContainerWrapper maxWidth="sm">
        <Box sx={{ height: "100vh", textAlign: "center" }}>
          <div className="heading">
            <h1 className="heading-text"> Today’s Subject </h1>
          </div>
          <div className="feedback-heading">
            <h5 className="feedback-text"> Feedback to support your pod </h5>
          </div>
          <div className="form-container">
            <b className="body-lang-label">Body Language and Tone</b>
            <div className="body-lang-rating">
              <div className="rating-input">
                {ratingArray.map((item) => {
                  return (
                    <img
                      src={
                        formData.bodyLangAndToneRating >= item
                          ? likeactive
                          : likedeactive
                      }
                      onClick={() =>
                        handleRating(
                          "bodyLangAndToneRating",
                          formData.bodyLangAndToneRating >= item
                            ? item - 1
                            : item
                        )
                      }
                      className="rating-icon"
                      alt="likeicon"
                      key={item}
                      width="37.52"
                      height="37.52"
                    />
                  );
                })}
              </div>
            </div>
            <div className="body-lang-input">
              <TextField
                id="bodyLangAndTone"
                value={formData.bodyLangAndTone}
                multiline
                rows={2}
                fullWidth
                onChange={onChangeForm}
              />
            </div>
            <b className="reflecting-back-label">Reflecting Back</b>
            <Stack
              id="bodyLangAndTone"
              spacing={2}
              direction="row"
              sx={{ mb: 1, mt: 2 }}
              alignItems="center"
            >
              <img src={Happy} alt="test" />
              <Slider
                min={0}
                max={10}
                aria-label="Volume"
                value={formData.reflectingBackRange}
                onChange={(event, newValue) =>  setFormData({ ...formData, reflectingBackRange: newValue })}
              />
              <img src={Neutral} alt="test" />
            </Stack>
            <div className="reflecting-input">
              <TextField
                id="reflectingBack"
                value={formData.reflectingBack}
                multiline
                rows={2}
                fullWidth
                onChange={onChangeForm}
              />
            </div>
            <b className="exploratory-que-label">Exploratory Questions</b>
            <div className="exploratory-que-rating">
              <div className="rating-input">
              {ratingArray.map((item) => {
                  return (
                    <img
                      src={
                        formData.exploratoryQuestionRating >= item
                          ? likeactive
                          : likedeactive
                      }
                      onClick={() =>
                        handleRating(
                          "exploratoryQuestionRating",
                          formData.exploratoryQuestionRating >= item
                            ? item - 1
                            : item
                        )
                      }
                      className="rating-icon"
                      alt="likeicon"
                      key={item}
                      width="37.52"
                      height="37.52"
                    />
                  );
                })}
              </div>
            </div>
            <div className="exploratory-que-input">
              <TextField
                id="exploratoryQuestion"
                value={formData.exploratoryQuestion}
                onChange={onChangeForm}
                multiline
                rows={2}
                fullWidth
              />
            </div>
            <b className="additional-comments-label">Additional Comments</b>
            <div className="additional-comments-input">
              <TextField
                id="additionalComments"
                value={formData.additionalComments}
                onChange={onChangeForm}
                multiline
                rows={2}
                fullWidth
              />
            </div>
            <div className="form-submit">
              <input type="button" className="submit-btn" value="Submit" />
            </div>
          </div>
        </Box>
      </ContainerWrapper>
    </>
  );
};
export default Home;
