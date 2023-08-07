import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Modall = ({title, children, showModal, handleClose, handleSave}) => {

    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modall;