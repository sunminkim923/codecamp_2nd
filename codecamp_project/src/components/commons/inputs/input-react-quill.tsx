import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import styled from "@emotion/styled";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextAreaQuill(props) {
  return (
    <ReactQuill onChange={props.onChange} placeholder={props.placeholder} />
  );
}
