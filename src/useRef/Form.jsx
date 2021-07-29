import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

let Inp = (props, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    value: () => {
      return inputRef.current.value;
    },
    focus: () => {
      inputRef.current.focus();
    },
  }));
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
};

Inp = forwardRef(Inp);

export default Inp;
