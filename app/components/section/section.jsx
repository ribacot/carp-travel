"use client";

import Container from "../container/container";
import { useHeaderHeigth } from "../heightContext/heigthContext";

export default function Section({
  children,
  style,
  styleContainer,
  id,
  title,
  span,
  padding = false,
}) {
  const { heigth } = useHeaderHeigth();

  return (
    <section
      id={id}
      className={style}
      style={{ paddingTop: padding && `${heigth + 36}px` }}
    >
      <Container className={styleContainer}>
        {title && (
          <h2>
            {title}
            <span> {span}</span>
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}
