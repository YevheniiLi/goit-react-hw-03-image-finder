import { Component } from 'react';
import Modal from '../components/Modal';

export class App extends Component {

    state ={
        showModal: false,
    }


    // Создание метода по открытию и закрытию модалки 
        toggleModal = () =>{
            this.setState(({showModal}) =>({
                showModal: !showModal,
            }));
        };

  render() {

    const {showModal} = this.state;


    // Логический оператор AND ( && ) true в противном случае false
    return (
      <>
      <button type='button'onClick={this.toggleModal}>
        Открыть модалку
        </button>
    
        
      {showModal && (
      <Modal onClose={this.toggleModal} > 
        <h1>Privet ya modalka</h1>
        <p>qweqweqwe</p>
        <button type='button' onClick={this.toggleModal}>
          Закрыть модалку
          </button>
      </Modal> 
      
      )}
        
      </>
    );
  }
}
