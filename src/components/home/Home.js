import { Box, TextField } from "@mui/material";
import { ContainerWrapper } from "./Home.style.js";
import { ReactComponent as LikeDeActive } from "../../assets/img/likeDeActive.svg";
import { ReactComponent as LikeActive } from "../../assets/img/likeActive.svg";
import Happy from "../../assets/img/happy.png";
import Neutral from "../../assets/img/neutral.png";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                <LikeActive height="37.52" width="37.48" />
                <LikeActive height="37.52" width="37.48" />
                <LikeDeActive height="37.52" width="37.48" />
                <LikeDeActive height="37.52" width="37.48" />
                <LikeDeActive height="37.52" width="37.48" />
              </div>
            </div>
            <div className="body-lang-input">
              <TextField
                style={{ textAlign: "left" }}
                multiline
                rows={2}
                fullWidth
              />
            </div>
            <b className="reflecting-back-label">Reflecting Back</b>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1, mt: 2 }}
              alignItems="center"
            >
              <img src={Happy} alt="test" />
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleChange}
              />
              <img src={Neutral} alt="test" />
            </Stack>
            <div className="reflecting-input">
              <TextField
                style={{ textAlign: "left" }}
                multiline
                rows={2}
                fullWidth
              />
            </div>
            <b className="exploratory-que-label">Exploratory Questions</b>
            <div className="exploratory-que-rating">
              <div className="rating-input">
                <LikeActive height="37.52" width="37.48" />
                <LikeActive height="37.52" width="37.48" />
                <LikeDeActive height="37.52" width="37.48" />
                <LikeDeActive height="37.52" width="37.48" />
                <LikeDeActive height="37.52" width="37.48" />
              </div>
            </div>
            <div className="exploratory-que-input">
              <TextField
                style={{ textAlign: "left" }}
                multiline
                rows={2}
                fullWidth
              />
            </div>
            <b className="additional-comments-label">Additional Comments</b>
            <div className="additional-comments-input">
              <TextField
                style={{ textAlign: "left" }}
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
