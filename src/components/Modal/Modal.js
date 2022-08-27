import { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

// Рут для модалки
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // Монтирование модалки
  componentDidMount() {
    console.log('Modal componentDidMount');

    // Закрытие модалки по кнопке ESC
    window.addEventListener('keydown', this.handleKeyDown);
  }



  // Метод для подчистки за собой
  // Размонтирование модалки
  componentWillUnmount() {
    console.log('Modal componentWillUnmount ');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, закрыть модалку');

      this.props.onClose();
    }
  };

  // Закрытие от клика в бэкдроп

  handleBackdropClick = e => {
    // console.log('Клик в backdrop');
    // console.log('currentTarget :', e.currentTarget); // на чём сработал обработчик события
    // console.log("target", e.target); // то на что мы кликнули

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };


  
  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
