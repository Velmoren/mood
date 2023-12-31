import styled from "styled-components";

export const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
` 
   
export const ToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

export const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: darkblue;
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: lightblue;
    border-radius: 50%;
    transition: 0.3s;
}

${ToggleInput}:checked + & {
  background-color: gold;

  &:before {
    transform: translateX(29px);
  }
}
`;
export const ToggleStrong = styled.strong`
    position: absolute;
    left: 100%;
    width: max-content;
    line-height: 30px;
    margin-left: 10px;
    cursor: pointer;
`

