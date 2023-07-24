import React from "react";
import styled, { css, keyframes } from "styled-components";
import { media } from "libs/styles/media";

function SkeletonMainPageCard() {
  return (
    <React.Fragment>
      <CardWrapper>
        {[...Array(10)].map((_, index) => (
          <Container key={index}>
            <Thumbnail>
              <div></div>
            </Thumbnail>
            <Content>
              <Title></Title>
              <Description></Description>
              <Time></Time>
            </Content>
            <User></User>
          </Container>
        ))}
      </CardWrapper>
    </React.Fragment>
  );
}

export default SkeletonMainPageCard;

const shimmerAnimation = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const shimmerAnimationRule = css`
  ${shimmerAnimation}
`;

const CardWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: -1rem;
`;

const Container = styled.div`
  width: 20rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0.625rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  ${media.tablet} {
    width: calc(50% - 2rem);
  }

  ${media.mobildL} {
    width: 100%;
    margin: 2rem 0px;
  }
`;

const Thumbnail = styled.div`
  padding-top: 52%;
  width: 100%;
  position: relative;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-right: 16px;
  animation: ${shimmerAnimationRule} 1s infinite linear forwards;

  & div {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    padding: 1rem;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 1rem 0rem;
  background-size: 200% 100%;
`;

const Title = styled.div`
  width: 80%;
  height: 16px;
  background: linear-gradient(
    to right,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0
  );
  background-size: 300% 100%;
  background-position: 0% 50%;
  animation: ${shimmerAnimationRule} 1s infinite linear forwards;
`;

const Description = styled.div`
  width: 60%;
  height: 12px;
  margin: 10px 0;
  background: linear-gradient(
    to right,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0
  );
  background-size: 300% 100%;
  background-position: 0% 50%;
  animation: ${shimmerAnimationRule} 1s infinite linear forwards;
`;

const Time = styled.div`
  width: 40px;
  height: 12px;
  margin: 10px 0;
  background: linear-gradient(
    to right,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0
  );
  background-size: 300% 100%;
  background-position: 0% 50%;
  animation: ${shimmerAnimationRule} 1s infinite linear forwards;
`;

const User = styled.div`
  width: 120px;
  height: 16px;
  margin: 10px 0;
  background: linear-gradient(
    to right,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0,
    #f0f0f0,
    #e0e0e0
  );
  background-size: 300% 100%;
  background-position: 0% 50%;
  animation: ${shimmerAnimationRule} 1s infinite linear forwards;
`;
