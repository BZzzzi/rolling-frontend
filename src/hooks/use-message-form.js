import { useState } from "react";
import useDropdown from "@/hooks/use-dropdown";
import useFormInput from "@/hooks/use-from-input";

const RELATIONSHIP_OPTIONS = [
  { label: "지인", value: "지인" },
  { label: "친구", value: "친구" },
  { label: "동료", value: "동료" },
  { label: "가족", value: "가족" },
];
const FONT_OPTIONS = [{ label: "Noto Sans", value: "Noto Sans" }];

export function useMessageForm() {
  const fromInput = useFormInput("");
  const relationshipDropdown = useDropdown(RELATIONSHIP_OPTIONS[0].value);
  const fontDropdown = useDropdown(FONT_OPTIONS[0].value);
  const [editorContent, setEditorContent] = useState("");

  const isContentValid =
    editorContent.trim().length > 0 && editorContent !== "<p><br></p>";
  const isFormValid = fromInput.value.trim().length > 0 && isContentValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("모든 필수 항목을 입력해 주세요.");
      return;
    }

    const formData = {
      from: fromInput.value,
      relationship: relationshipDropdown.value,
      content: editorContent,
      font: fontDropdown.value,
    };

    console.log("✅ 폼 데이터 제출 성공:", formData);
    alert(` 메시지가 성공적으로 생성되었습니다.`);

    // TODO: 서버 API 호출 로직 구현
  };

  return {
    fromInput,
    relationshipDropdown,
    fontDropdown,
    editorContent,
    setEditorContent,
    isFormValid,
    handleSubmit,
    RELATIONSHIP_OPTIONS,
    FONT_OPTIONS,
  };
}
