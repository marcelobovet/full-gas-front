
import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import BloqueCarro from "../../components/BloqueCarro";
import MyContext from "../../MyContext";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const Items = ({ currentItems }) => {
  return (
    <div>
      {
        currentItems && currentItems.map((cart, i) => (
          <div className="justify-content-center align-item-start" > <BloqueCarro key={i} item={cart} /></div>
        ))
      }
    </div>

  )
}

const Carro = () => {
  const navigate = useNavigate();

  const { cart, cartResume, currencyFormatter, user, createPurchase } = useContext(MyContext);
  const [resume, setResume] = useState({ total: 0, quantity: 0 })

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => { setShowModal(!showModal) }

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = cart.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cart.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cart.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const getPurchase = () => {
    const purchase = cart.map(({ quantity, post }) => {
      return {
        publicaciones_id: post.id,
        cantidad: quantity
      }
    })
    return purchase;
  }


  const onSubmit = async () => {
    const purchase = getPurchase();
    await createPurchase(purchase);
    navigate('/home');
  }

  useEffect(() => {
    console.log(cart)
    const summary = cartResume();
    setResume(summary)
  }, [cartResume, cart])

  return (
    <Layout>
      <Modal
        showModal={showModal} handleClose={handleShowModal} title={'Realizar Compra'} handleSave={onSubmit} successText={'Aceptar'}>
        ¿Desea realizar la compra de estos productos?
      </Modal>
      <div className="container d-grid justify-content-center">
        {cart &&
          <div>
            <Items currentItems={currentItems} />
            <div className=" d-flex justify-content-center mt-3">
              <ReactPaginate
                nextLabel="Siguiente >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Anterior"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        }
        {cart.length !== 0 &&
          <div className="d-flex flex-column fixed-bottom px-5 bg-dark border-top" style={{ marginBottom: '3rem' }}>
            <div className="d-flex justify-content-sm-end gap-5 pt-2 text-light">
              <p>Articulos: {resume.quantity}</p>
              <p>Total: {currencyFormatter.format(resume.total)} </p>
            </div>
            <div className="d-flex justify-content-end pb-5 ">
              {user ? <button className="btn btn-success rounded-pill" style={{ paddingLeft: '6rem', paddingRight: '6rem' }} onClick={handleShowModal}>Pagar</button> :
                <button className="btn btn-warning rounded-pill" style={{ paddingLeft: '4rem', paddingRight: '4rem' }} onClick={() => { navigate('/login') }}>Iniciar Sesión</button>
              }
            </div>
          </div>
        }
        {!cart.length && <div><p>No hay elementos en el carro</p></div>}
      </div>


    </Layout >)
}






export default Carro;


