import { Component } from 'react';
import { SearchForm } from 'components/SearchBar/SearchBar';
import { ToastContainer } from 'react-toastify';
// import Modal from '../components/Modal';
// import * as API from 'services/api'



export class App extends Component {

  state ={
    showModal: false,
    searchName: '',
    gallery: [],
    image:'',
}



    // async addGallery(values){
    //   const images = await API.addGallery(values);
    //   console.log(images);
    // }



   
    // Создание метода по открытию и закрытию модалки 
        toggleModal = () =>{
            this.setState(({showModal}) =>({
                showModal: !showModal,
            }));
        };

     // Метод добавления формы onSubmit
        handleSearchFormSubmit = searchName => {
          this.setState({searchName});
          console.log(searchName);
        }



  render() {

    // const {showModal} = this.state;


    
    return (
      <>
      <SearchForm onSubmit={this.handleSearchFormSubmit} />



      {/* <button type='button'onClick={this.toggleModal}>
        Открыть модалку
        </button> */}
{/* // Логический оператор AND ( && ) true в противном случае false     */}
      {/* {showModal && (
      <Modal onClose={this.toggleModal} > 
        <h1>Privet ya modalka</h1>
        <p>qweqweqwe</p>
        <button type='button' onClick={this.toggleModal}>
          Закрыть модалку
          </button>
      </Modal> 
       )} */}
        

        <ToastContainer autoClose={3000}/>
      </>
    );
  }
}
