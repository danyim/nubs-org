import * as React from 'react';
import styled from 'styled-components';

import GlobalStyle from 'Components/global-style';

const color = 'rgb(237, 40, 40)';
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  color: ${color};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center;
  background: linear-gradient(
    ${({ angle }) => angle}deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(237, 40, 40, 0.6) 100%
  );
`;
const Line = styled.div`
  --size: 140px;

  color: ${color};
  font-size: var(--size);
  line-height: calc(0.72 * var(--size));
  letter-spacing: calc(-0.04 * var(--size));

  box-shadow: 0px 0px 0px rgba
    ${({ outline }) =>
      outline
        ? `
    color: transparent;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${color};
  `
        : ''};
`;
const Footer = styled.div`
  text-align: right;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -0.15rem;
  color: ${color};
`;

const Index = () => {
  const [mpos, setMpos] = React.useState([0, 0]);
  const [rect, setRect] = React.useState([0, 0]);
  const [angle, setAngle] = React.useState(0);

  const ref = React.createRef();

  const calcAngle = (cx: number, cy: number, ex: number, ey: number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    return theta;
  };

  const onMouseMove = (e: MouseEvent) => {
    setMpos([e.pageX, e.pageY]);
    if (ref.current) {
      const { top, left, width, height } = ref.current.getBoundingClientRect();
      const [centerX, centerY] = [left + width / 2, top + height / 2];
      // Sets the client rect if it hasn't been set already
      if (rect[0] !== centerX && rect[1] !== centerY) {
        setRect([centerX, centerY]);
      }
      const angle = calcAngle(mpos[0], mpos[1], rect[0], rect[1]);
      setAngle(Number(angle.toFixed()));
    }
  };

  return (
    <Container angle={angle} ref={ref} onMouseMove={onMouseMove}>
      <GlobalStyle />
      <div>
        <Line outline>NUBSDOTORG</Line>
        <Line outline>NUBSDOTORG</Line>
        <Line>NUBSDOTORG</Line>
        <Line outline>NUBSDOTORG</Line>
        <Line outline>NUBSDOTORG</Line>
        <Footer outline>&copy; {new Date().getFullYear()}</Footer>
      </div>
    </Container>
  );
};

export default Index;
