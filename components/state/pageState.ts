import { atom } from "recoil";

const pageState = atom({
  key: "pageState", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});

export default pageState;
