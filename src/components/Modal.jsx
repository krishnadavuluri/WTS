
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../styles/styling.css';
export function Example() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="popup"
          aria-labelledby="example-custom-modal-styling-title"
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  