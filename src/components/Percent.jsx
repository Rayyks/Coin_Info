import styled from "styled-components";

const Percent = styled.p`
  color: ${(props) =>
    props.data === 0
      ? props.theme.colors.fontAccent
      : props.data > 0
      ? props.theme.colors.gain
      : props.theme.colors.loss};
`;

export { Percent };
