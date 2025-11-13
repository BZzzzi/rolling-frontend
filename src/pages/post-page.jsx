import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";
import Toggle from "@/components/common/toggle";
import { useState } from "react";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  gap: 58px;

  ${media.small`
    width: calc(100% - 40px);
  `}

  ${media.medium`
    width: calc(100% - 48px);
  `}
`;

const InputSection = styled.div`
  width: 100%;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

const InputSectionTitle = styled.p`
  ${font.bold24};
  color: ${colors.gray[900]};
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 360px;
  height: 50px;
  border: 1px solid ${colors.gray[300]};
  border-radius: 8px;
  ${font.regular18};
  color: ${colors.gray[500]};
  padding: 12px 16px;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  ${font.bold18};
  background-color: ${colors.purple[600]};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 12px;
  border: 0;
  cursor: pointer;

  ${media.small`
    width: 100%;
  `}

  ${media.medium`
    width: 100%;
  `}
`;

export default function PostPage() {
  const [name, setName] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  return (
    <Container>
      <InputSection>
        <InputSectionTitle>To.</InputSectionTitle>
        <Input
          value={name}
          onChange={handleInputName}
          placeholder="받는 사람 이름을 입력해 주세요"
        />
      </InputSection>
      <Toggle />
      <Button>생성하기</Button>
    </Container>
  );
}
