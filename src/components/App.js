import { Component } from 'react';
import Modal from '../components/Modal';

export class App extends Component {

    state ={
        showModal: false
    }



        toggleModal = () =>{
            this.setState(({showModal}) =>({
                showModal: !showModal
            }))
        }









  render() {

    const {showModal} = this.state;

    return (
      <>
      <button type='button'onClick={this.toggleModal}>Открыть модалку</button>
      {showModal && <Modal>
        <h1>Privet ya modalka</h1>
        <p>qweqweqwe</p>
        <button type='button' onClick={this.toggleModal}>Закрыть модалку</button>
      </Modal> }
        
      </>
    );
  }
}
