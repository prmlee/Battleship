import styled, { css } from "styled-components";

const ShipsContainer = styled.div<{ player: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  top: 1rem;
  ${({ player }) =>
    player === "player" &&
    css`
      align-items: flex-end;
      right: 95%;
    `};
  ${({ player }) =>
    player === "computer" &&
    css`
      left: 95%;
    `};

  @media (max-width: 1150px) {
    display: none;
  }
  @media (max-width: 1035px) {
    display: flex;
  }
  @media (max-width: 570px) {
    display: none;
  }
`;

const ShipWrapper = styled.div<{
  sunk: boolean;
  length: number;
  index: number;
}>`
  width: ${(props) => props.length * 1.5}rem;
  height: 100%;
  visibility: ${(props) => (props.sunk ? "hidden" : "show")};
`;

export { ShipsContainer, ShipWrapper };
