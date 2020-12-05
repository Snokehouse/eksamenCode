import React from 'react';

import PropTypes from 'prop-types';

const Modal = ({ setModal, addKategori }) => {
  Modal.propTypes = {
    setModal: PropTypes.func,
    addKategori: PropTypes.func,
  };
  let kategoriValue = '';
  const handleSubmit = (event) => {
    // TODO: Prevent default form handeling
    event.preventDefault();
    addKategori(kategoriValue);
  };
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    kategoriValue += inputValue;
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <section id="modal">
      <section className="modal_inner_wrapper">
        <header>
          <h3>New todo</h3>
          <button type="button" onClick={() => handleClose()}>
            X
          </button>
        </header>
        <form id="todo_form" onSubmit={handleSubmit}>
          <label htmlFor="txtKategori">Kategori: </label>
          <input
            id="txtKategori"
            name="kategori"
            value={kategoriValue}
            onChange={updateValue}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Modal;
