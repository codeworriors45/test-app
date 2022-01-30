import { Container } from "@mui/material";
import styled from "styled-components";

export const ContainerWrapper = styled(Container)`
  padding: 5px;
  background: #ffffff;
  border-radius: 0px 12px 12px 0px;
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 121px;
    background: #e9e9ff;
    border-radius: 8px;

    .heading-text {
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      color: #070417;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 10px 0px;
    }
  }
  .feedback-heading {
    background: #ffffff;
    box-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0px 12px 0px 0px;
    padding-bottom: 10px;
    padding-left: 5px;

    .feedback-text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
    }
  }
  .form-container {
    text-align: left;
    padding-top: 14px;
    padding-left: 5px;

    .body-lang-label {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: #323c47;
    }

    .body-lang-rating {
      display: flex;

      .rating-input {
        flex: 33.33%;
        padding: 5px;
        width: 37.48px;
        height: 37.52px;
      }
    }
    .body-lang-input {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .reflecting-back-label {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: #323c47;
    }
    .reflecting-input {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .exploratory-que-label {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: #323c47;
    }
    .exploratory-que-rating {
      display: flex;

      .rating-input {
        flex: 33.33%;
        padding: 5px;
        width: 37.48px;
        height: 37.52px;
      }
    }
    .exploratory-que-input {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .additional-comments-label {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: #323c47;
    }
    .additional-comments-input {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .form-submit {
      width: 100%;
      height: 70px;
      padding: 5px 5px;
      
      .submit-btn {
        width: 520px;
        display: flex;
        margin-left: 5px;
        flex-direction: column;
        align-items: center;
        padding: 20px 121px;
        position: absolute;
        background: #8f8fff;
        border-radius: 8px;
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 5px 5px;
      }
    }
  }
`;
