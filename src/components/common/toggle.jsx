import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";
import { useState } from "react";

const ToggleSection = styled.div`
  width: 100%;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const ToggleTitle = styled.p`
  ${font.bold24};
  color: ${colors.gray[900]};
  margin: 0;
`;

const ToggleTitleSmall = styled.p`
  ${font.regular16};
  color: ${colors.gray[600]};
  margin: 0;
`;

const ToggleButtonContainer = styled.div`
  width: 224px;
  height: 40px;
  background-color: ${colors.gray[100]};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const ToggleButton = styled.div`
  width: 122px;
  height: 40px;
  background-color: ${(props) => (props.$active ? "transparent" : "#ffffff")};
  color: ${(props) => (props.$active ? colors.gray[900] : colors.purple[600])};
  border: ${(props) =>
    props.$active ? null : `2px solid ${colors.purple[600]}`};
  ${(props) => (props.$active ? `${font.regular16}` : `${font.bold16}`)};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleButtonDisable = styled.div`
  width: 122px;
  height: 40px;
  background-color: ${(props) => (props.$active ? "transparent" : "#ffffff")};
  color: ${(props) => (props.$active ? colors.gray[900] : colors.purple[600])};
  border: ${(props) =>
    props.$active ? null : `2px solid ${colors.purple[600]}`};
  ${(props) => (props.$active ? `${font.regular16}` : `${font.bold16}`)};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`;

const ToggleDiv = styled.div`
  width: 168px;
  height: 168px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-color: ${(props) => props.$bgColor};
  cursor: pointer;

  ${media.small`
    flex: 1 1 40%; 
  `}

  ${media.medium`
    flex: 1 1 40%;
  `}
`;

const ToggleImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`;

const ToggleImg = styled.div`
  width: 168px;
  height: 168px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-image: url(./src/assets/images/img-car.webp);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: pointer;

  ${media.small`
    flex: 1 1 40%; 
  `}

  ${media.medium`
    flex: 1 1 40%;
  `}
`;

const ImgSelect = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(./src/assets/images/select-circle.webp);
  background-repeat: no-repeat;
  background-size: 44px 44px;
  background-position: center;
`;

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <ToggleSection>
        <ToggleTitle>배경화면을 선택해 주세요.</ToggleTitle>
        <ToggleTitleSmall>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </ToggleTitleSmall>
        <ToggleButtonContainer onClick={handleToggle}>
          <ToggleButton $active={toggle}>컬러</ToggleButton>
          <ToggleButtonDisable $active={!toggle}>이미지</ToggleButtonDisable>
        </ToggleButtonContainer>
        {toggle === false ? (
          <ToggleDivContainer>
            <ToggleDiv $bgColor={colors.beige[200]}>
              <ImgSelect></ImgSelect>
            </ToggleDiv>
            <ToggleDiv $bgColor={colors.purple[200]}></ToggleDiv>
            <ToggleDiv $bgColor={colors.blue[200]}></ToggleDiv>
            <ToggleDiv $bgColor={colors.green[200]}></ToggleDiv>
          </ToggleDivContainer>
        ) : (
          <ToggleImgContainer>
            <ToggleImg>
              <ImgSelect></ImgSelect>
            </ToggleImg>
            <ToggleImg></ToggleImg>
            <ToggleImg></ToggleImg>
            <ToggleImg></ToggleImg>
          </ToggleImgContainer>
        )}
      </ToggleSection>
    </>
  );
}
