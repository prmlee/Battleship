import styled from "styled-components";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .board-wrapper {
    opacity: 0.4;
    display: flex;
    flex-direction: column;
    counter-reset: row column;
    font-size: 1rem;
    font-weight: 700;

    .board-row {
      display: flex;
      flex-direction: row;
      counter-increment: row;
      justify-content: flex-end;

      &:last-child {
        .board-tile {
          counter-increment: column;
          margin-bottom: 1.2rem;

          &::after {
            position: absolute;
            top: 110%;
            content: counter(column, upper-latin);
          }
        }
      }

      &::before {
        margin-right: 0.4rem;
        content: counter(row);
      }

      .board-tile {
        position: relative;
        width: calc(1.4rem + 1vw);
        height: calc(1.4rem + 1vw);
        background-color: ${({ theme }) => theme.colors.gridBackground};
        border: 2px solid ${({ theme }) => theme.colors.tile_border};
      }

      .ship-not-hit {
        background-color: ${({ theme }) => theme.colors.ship};
        cursor: pointer;
      }

      .ship-hit {
        &::before {
          content: url(./assets/Hit.png);
          position: absolute;
          left: 50%;
          top: 60%;
          transform: translate(-50%, -50%);
        }
      }

      .ship-sunk {
        background-color: #bbbbbb;

        &::before {
          content: url(./assets/Hit.png);
          position: absolute;
          left: 50%;
          top: 60%;
          transform: translate(-50%, -50%);
        }
      }

      .missed {
        background-color: #bce6eb;

        &::before {
          content: url(./assets/Miss.png);
          position: absolute;
          left: 50%;
          top: 60%;
          transform: translate(-50%, -50%);
        }
      }

      .marked {
        background-color: ${({ theme }) => theme.colors.marked};
      }

      .marked-origin {
        background-color: ${({ theme }) => theme.colors.marked};

        &::before {
          content: url(./assets/Origin.png);
          position: absolute;
          left: 50%;
          top: 60%;
          transform: translate(-50%, -50%);
        }
      }

      .valid {
        background-color: ${({ theme }) => theme.colors.valid};
      }

      .valid-origin {
        background-color: ${({ theme }) => theme.colors.valid};
      }

      .invalid {
        background-color: ${({ theme }) => theme.colors.invalid};
      }

      .invalid-origin {
        background-color: ${({ theme }) => theme.colors.invalid};
      }
    }
  }

  .active {
    opacity: 0.8;

    .board-row {
      .board-tile {
        &:hover {
          border: 2px solid #878891;
          cursor: pointer;
        }
      }
    }
  }
`;

const Header = styled.h4`
  margin-top: 0.6rem;
  font-weight: 500;
  font-size: 1.3rem;
`;

export { BoardContainer, Header };
