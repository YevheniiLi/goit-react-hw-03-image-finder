import { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount ');
  }

  render() {
    return (
      <ModalBackdrop >
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>
    );
  }
}
