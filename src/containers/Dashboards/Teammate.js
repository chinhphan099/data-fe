import React, { Component } from 'react'
import TeammateUI from '../../components/Layout/Teammate'
import api from '../../api'
import Axios from 'axios'

export default class Teammate extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    await Axios.get(api.users.all).then((response) => {
      let db = response.data.sort(function(a, b) {
        if(a.email < b.email) {
          return -1;
        }
        else if(a.email > b.email) {
          return 1;
        }
        return 0;
      });
      this.setState({ users: db });
    });
  }

  render() {
    const {
      state: { users }
    } = this;

    return <TeammateUI users={users} />
  }
}
