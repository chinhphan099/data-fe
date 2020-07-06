import React, { Component } from 'react'
import TeammateUI from '../../components/Layout/GetSImages'
import api from '../../api'
import Axios from 'axios'

export default class GetSImages extends Component {
  state = {
    images: [],
  }

  getQueryParameter = (param) => {
    let href = '';
    if (window.location.href.indexOf('?')) {
        href = window.location.href.substr(window.location.href.indexOf('?'));
    }

    const value = href.match(new RegExp('[?&]' + param + '=([^&]*)(&?)', 'i'));
    return value ? '?folder=' + value[1] : '';
  }

  async componentDidMount() {
    await Axios.get(api.aws.getsimages + this.getQueryParameter('folder')).then((response) => {
      let db = response.data;

      this.setState({ images: db });
    });
  }

  render() {
    const {
      state: { images }
    } = this;

    return <TeammateUI images={images} />
  }
}
