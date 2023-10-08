
import Container from "../container/container";

export default function Section({
  children,
  style,
  styleContainer,
  id,
  title,
  span,
}) {

  return (
    <section
      id={id}
      className={style}
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
