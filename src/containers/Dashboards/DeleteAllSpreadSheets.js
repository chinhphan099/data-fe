import React, { Component } from 'react'
import DeleteAllSpreadSheetsUI from '../../components/Layout/DeleteAllSpreadSheets'
import api from '../../api'
import Axios from 'axios'

export default class DeleteAllSpreadSheets extends Component {
  state = {
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    let enteredValue = window.prompt('Enter your Secret Key to Delete All Data');
    await Axios.post(api.spreadsheet.deleteAllSpeadSheets, {
      secretKey: enteredValue
    })
    .then(function (response) {
      alert(response.data.message);
      if(!!response.data.deleted) {
        window.location.href = "/";
      }
    });
  }

  render() {
    const {
      handleFormSubmit
    } = this
    return <DeleteAllSpreadSheetsUI
      onClick={handleFormSubmit}
      />
  }
}
