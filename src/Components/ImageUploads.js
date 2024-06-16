import React from "react";
import { useState } from "react";
const ImageUpload = ({ onImageUpload }) => {
  const [base64Data, setBase64Data] = useState(null);

  const onChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsDataURL(file);
    }
  };

  const handleReaderLoaded = (e) => {
    let base64String = e.target.result;
    setBase64Data(base64String);
    onImageUpload(base64String);
  };
  return (
    <div>
      <input
        type="file"
        name="image"
        id="file"
        accept=".jpg,.jpeg,.png"
        onChange={onChange}
      />
      <p>{base64Data ? "Upload Photo:" : "Upload Photo:"}</p>
    </div>
  );
};

export default ImageUpload;
