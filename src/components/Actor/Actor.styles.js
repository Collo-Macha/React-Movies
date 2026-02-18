import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.32));
  border-radius: 14px;
  padding: 10px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(2,6,23,0.6);
  }

  h3 {
    margin: 10px 0 4px;
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: rgba(255,255,255,0.78);
    font-size: 0.9rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid rgba(255,255,255,0.04);
  box-shadow: 0 20px 40px rgba(2,6,23,0.6);
  transition: transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.25s ease;
  background: linear-gradient(180deg, #111, #222);

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 26px 60px rgba(2,6,23,0.7);
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
