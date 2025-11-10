import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";

const COLOR_PRIMARY = "#954aff";
const COLOR_GRAY_BORDER = "#ddd";

// 페이지 전체 컨테이너
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  min-height: 100vh;
  background-color: white;
`;

// 폼 박스 (720px 너비)
export const MessageFormBox = styled.form`
  width: 720px;
  padding: 40px;
  background-color: white;
`;

// 개별 폼 필드 섹션 (From, 관계, 폰트 등)
export const FormField = styled.div`
  margin-bottom: 32px;
`;

// 필드 제목 (Label 역할)
export const FormLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #1c1c1c;
`;

// 일반 입력 필드 (From. Input)
export const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: ${COLOR_PRIMARY};
  }
`;

// 에러 메시지 스타일 (2단계에서 사용)
export const ErrorMessage = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #ff5050; /* 예시 에러 색상 */
`;

// --- 프로필 이미지 섹션 스타일 ---

export const ProfileWrapper = styled(FormField)`
  /* FormField 스타일 상속 */
`;

export const ProfileSelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 기본 프로필 이미지 박스
export const ProfileDefaultBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 16px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 선택 가능한 이미지 목록 컨테이너
export const SelectableImagesList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  gap: 8px;
`;

// 개별 선택 이미지 아이템
export const SelectableImageItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.isSelected ? COLOR_PRIMARY : "transparent")};
  transition: border 0.2s;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// --- 드롭다운 (Select) 스타일 ---

export const SelectField = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  border-radius: 8px;
  font-size: 16px;
  appearance: none; /* 기본 화살표 제거 */
  background-image: url("data:image/svg+xml;utf8,<svg ...>"); /* 커스텀 화살표 SVG */
  background-repeat: no-repeat;
  background-position: right 16px center;
  &:focus {
    outline: none;
    border-color: ${COLOR_PRIMARY};
  }
`;

// --- 텍스트 에디터 섹션 ---
// (실제 에디터 라이브러리 통합 시 대체될 부분)

export const EditorPlaceholder = styled.div`
  min-height: 200px; /* 에디터가 차지할 최소 공간 */
  border: 1px solid ${COLOR_GRAY_BORDER};
  border-radius: 8px;
  padding: 16px;
  line-height: 1.5;
  color: #888;
  /* 실제 에디터 스타일을 여기서 오버라이드할 수 있습니다 */
`;

// --- 버튼 스타일 ---

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 0;
  margin-top: 40px;
  background-color: ${COLOR_PRIMARY};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #8335f0; /* 살짝 어두운 색 */
  }

  &:disabled {
    background-color: #cccccc; /* 비활성화 색상 */
    cursor: not-allowed;
  }
`;
