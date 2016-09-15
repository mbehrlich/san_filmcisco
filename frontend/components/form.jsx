import React from 'react';
import { isEqual } from 'lodash';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      release_year: "",
      director: "",
      actor: "",
      writer: "",
      company: "",
      distributor: ""
    };
    setInterval(() => {
      this.timer++;
      if (this.timer > 1000000000) {
        this.timer = 0;
      }
    }, 5);
    this.handleClear = this.handleClear.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      title: "",
      release_year: "",
      director: "",
      actor: "",
      writer: "",
      company: "",
      distributor: ""
    });
    this.props.clearFilters();
    this.timer = 0;

  }

  updateField(e) {
    let key = e.target.name;
    let updates = {};
    updates[key] = e.target.value;
    this.setState(updates, () => {
      // if (this.timer < 20) {
        this.timer = 0;
        setTimeout(() => {
          if (this.timer > 40) {
            let testState = {
              title: "",
              release_year: "",
              director: "",
              actor: "",
              writer: "",
              company: "",
              distributor: ""
            }
            if (isEqual(this.state, testState)) {
              this.props.clearFilters();
            } else {
              this.props.updateFilters(this.state);
            }
          }
        }, 210)
      // } else {
        // this.props.updateFilters(this.state);
      // }
    });
  }

  render() {
    return (
      <div className="form-container">
        <form className="form">
          <label className="form-label">
            Search by Title:
            <input name="title" type="text" value={this.state.title} onChange={this.updateField} />
          </label>
          <label className="form-label">
            Search by Release Year:
            <input name="release_year" type="number" value={this.state.release_year} onChange={this.updateField} />
          </label>
          <label className="form-label">
            Search by Director:
            <input name="director" type="text" value={this.state.director} onChange={this.updateField} />
          </label>
          <label className="form-label">
            Search by Actor:
            <input name="actor" type="text" value={this.state.actor} onChange={this.updateField} />
          </label>
          <label className="form-label">
            Search by Writer:
            <input name="writer" type="text" value={this.state.writer} onChange={this.updateField} />
          </label>
          <label className="form-label">
            Search by Production Company:
            <input name="company" type="text" value={this.state.company} onChange={this.updateField} />
          </label>
          <label className="form-label">
            Search by Distributor:
            <input name="distributor" type="text" value={this.state.distributor} onChange={this.updateField} />
          </label>
          <button onClick={this.handleClear}>Clear Filters</button>
        </form>
      </div>
    );
  }
}

export default Form;
