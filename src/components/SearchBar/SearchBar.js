import { Component } from 'react';
// import { toast } from 'react-toastify';
import {Formik, Form, Field} from 'formik';


export class SearchForm extends Component {
  state = {
    searchName: '',
  };

    // обновление формы при каждом вводе в инпут
  handleNameChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Запрет пустой строки 
    if (this.state.searchName.trim() === '') {
      alert('Введите название');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <Formik>
        <Form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span className="button-label">Search</span>
          </button>

          <Field
            name="searchName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleNameChange}
          />
        </Form>
        </Formik>
    );
  }
}