import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ $backdrop }) =>
    $backdrop
      ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${$backdrop})`
      : "#000"};
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  min-height: 520px;
  display: flex;
  align-items: center;
  animation: animateMovieInfo 0.9s ease both;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.6));
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 20px 60px rgba(2,6,23,0.6);
  border: 1px solid rgba(255,255,255,0.06);
  transform: translateY(-40px);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-42px);
    box-shadow: 0 30px 80px rgba(2,6,23,0.7);
  }

  > div:first-child {
    flex: 0 0 300px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    img {
      border-radius: 12px;
      box-shadow: 0 30px 60px rgba(2,6,23,0.6);
      width: 100%;
      height: auto;
      object-fit: cover;
      border: 4px solid rgba(255,255,255,0.03);
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 18px;
    transform: translateY(0);
  }
`;

export const Text = styled.div`
  padding: 6px 12px;
  color: var(--white);
  overflow: hidden;
  width: 100%;

  h1 {
    margin: 0 0 10px;
    font-size: var(--fontSuperBig);
    letter-spacing: 1px;
    line-height: 1.1;
    color: #fff;
    text-shadow: 0 8px 30px rgba(0,0,0,0.6);
  }

  h3 {
    margin: 8px 0;
    color: rgba(255,255,255,0.75);
    font-size: 0.9rem;
    letter-spacing: 2px;
  }

  p {
    color: rgba(255,255,255,0.9);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 18px;
  }

  .rating-directors {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .score {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #ffd700, #ff8a00);
    color: #111;
    font-weight: 900;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 8px;
    box-shadow: 0 8px 24px rgba(255, 168, 0, 0.4);
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.08);
      box-shadow: 0 12px 32px rgba(255, 168, 0, 0.6);
    }
  }

  .director {
    flex: 1;
    min-width: 20px;

    .director-header {
      h3 {
        margin: 0 0 12px 0;
        color: rgba(255,255,255,0.9);
        font-size: 0.9rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 8px;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ffa800, transparent);
        }
      }
    }

    p {
      margin: 6px 0;
      color: rgba(255,255,255,0.85);
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ffa800;
      }
    }
  }

  .year {
    flex: 0 0 auto;
    min-width: 120px;

    h3 {
      margin: 0 0 12px 0;
      color: rgba(255,255,255,0.9);
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 8px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, #ffa800, transparent);
      }
    }

    > div {
      font-size: 1.8rem;
      font-weight: 800;
      color: #ffa800;
      text-shadow: 0 4px 12px rgba(255, 168, 0, 0.3);
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;

    .rating-directors {
      justify-content: center;
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }

    .score {
      margin-left: 0;
      margin-top: 8px;
      min-width: 50px;
      height: 50px;
      font-size: 0.95rem;
    }

    .director {
      min-width: 100%;

      .director-header h3::after,
      .year h3::after {
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .year {
      min-width: 100%;

      > div {
        font-size: 1.5rem;
      }
    }

    h1 {
      font-size: 1.6rem;
    }
  }
`;

