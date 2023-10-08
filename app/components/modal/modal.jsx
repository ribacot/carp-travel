import Container from "../container/container";
import css from "./modal.module.css";
export default function Modal({ children, onClose }) {
  return (
    <div className={css.backdrop}>
      <Container>
        <div className={css.decor}> 
          <button type="button" className={css.btnClose} onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </Container>
    </div>
  );
}
