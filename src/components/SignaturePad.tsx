import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ onSave }) => {
  const sigCanvas = useRef(null);

  const saveSignature = () => {
    const dataUrl = sigCanvas?.current?.getTrimmedCanvas().toDataURL("image/png");
    onSave(dataUrl);
  };

  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          width: 500,
          height: 200,
          className: "signature-canvas",
        }}
      />
      <button onClick={saveSignature}>Save</button>
    </div>
  );
};

export default SignaturePad;
