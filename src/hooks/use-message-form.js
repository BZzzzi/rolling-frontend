import { useState, useMemo } from "react";
import { useProfileImage } from "./use-profile-image";

export const RELATIONSHIP_OPTIONS = [
  { value: "지인", label: "지인" },
  { value: "친구", label: "친구" },
  { value: "가족", label: "가족" },
  { value: "동료", label: "동료" },
];

export const FONT_OPTIONS = [{ value: "Noto Sans", label: "Noto Sans" }];

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (isTouched && e.target.value.trim() !== "") {
      setHasError(false);
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    if (value.trim() === "") {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return {
    value,
    hasError,
    handleChange,
    handleBlur,
    isTouched,
    isValid: value.trim() !== "",
    reset: () => {
      setValue(initialValue);
      setHasError(false);
      setIsTouched(false);
    },
  };
};

export const useMessageForm = () => {
  const fromInput = useInput("");

  const [relationship, setRelationship] = useState(
    RELATIONSHIP_OPTIONS[0].value
  );
  const relationshipDropdown = {
    value: relationship,
    handleChange: (e) => setRelationship(e.target.value),
  };

  const [font, setFont] = useState(FONT_OPTIONS[0].value);
  const fontDropdown = {
    value: font,
    handleChange: (e) => setFont(e.target.value),
  };

  const [editorContent, setEditorContent] = useState("");

  const {
    selectedProfileImageId,
    handleImageSelect,
    selectableImages,
    isLoading,
    error,
  } = useProfileImage();

  const isFormValid = useMemo(() => {
    const isFromValid = fromInput.isValid;
    const isContentValid = editorContent.trim().length > 0;

    return isFromValid && isContentValid;
  }, [fromInput.isValid, editorContent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fromInput.handleBlur();

    if (isFormValid) {
      const formData = {
        from: fromInput.value,
        relationship: relationship,
        font: font,
        content: editorContent,
        profileImageId: selectedProfileImageId,
      };

      console.log("Form Submitted:", formData);
    } else {
      console.log("Form validation failed.");
    }
  };

  return {
    fromInput,
    relationshipDropdown,
    fontDropdown,
    editorContent,
    setEditorContent,
    selectedProfileImageId,
    handleImageSelect,
    selectableImages,
    isLoading,
    error,
    isFormValid,
    handleSubmit,
    RELATIONSHIP_OPTIONS,
    FONT_OPTIONS,
  };
};
