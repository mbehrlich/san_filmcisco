import React from 'react';
// import Autocomplete from 'react-autocomplete';
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
    this.displayAutocomplete = this.displayAutocomplete.bind(this);
    this.removeAutocomplete = this.removeAutocomplete.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
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
        }, 210);
      // } else {
        // this.props.updateFilters(this.state);
      // }
    });
  }

  displayAutocomplete(e) {
    document.getElementById(e.target.name).className = "display-auto";
  }

  removeAutocomplete(e) {
    e.persist();
    setTimeout(() => {
      document.getElementById(e.target.name).className = "nodisplay-auto";
    }, 20);
  }

  selectLocation(e) {
    let key = e.target.className;
    let updates = {};
    updates[key] = e.target.innerHTML;
    this.setState(updates, () => {
      this.props.updateFilters(this.state);
    });
  }

  render() {
    let titles = this.props.locations.map((location, idx) => (
      <li name={location.title} key={"title" + idx} onClick={this.selectLocation} className="title">{location.title}</li>
    ));
    let directors = this.props.locations.map((location, idx) => (
      <li name={location.director} key={"director" + idx} onClick={this.selectLocation} className="director">{location.director}</li>
    ));
    let writers = this.props.locations.map((location, idx) => (
      <li name={location.writer} key={"writer" + idx} onClick={this.selectLocation} className="writer">{location.writer}</li>
    ));
    let actors = this.props.locations.map((location, idx) => {
      let act = new RegExp(`${this.state.actor}`, "i")
      if (act.test(location.actor1)) {
        return (<li name={location.actor1} key={"actor1" + idx} onClick={this.selectLocation} className="actor">{location.actor1}</li>)
      } else if (act.test(location.actor2)) {
        return (<li name={location.actor2} key={"actor2" + idx} onClick={this.selectLocation} className="actor">{location.actor2}</li>)
      } else if (act.test(location.actor3)) {
        return (<li name={location.actor3} key={"actor3" + idx} onClick={this.selectLocation} className="actor">{location.actor3}</li>)
      }
    });
    let companies = this.props.locations.map((location, idx) => (
      <li name={location.company} key={"company" + idx} onClick={this.selectLocation} className="company">{location.company}</li>
    ));
    let distributors = this.props.locations.map((location, idx) => (
      <li name={location.distributor} key={"distributor" + idx} onClick={this.selectLocation} className="distributor">{location.distributor}</li>
    ));

    return (
      <div className="form-container">
        <form className="form">
          <label className="form-label">
            Search by Title:
            <input name="title" type="text" value={this.state.title} onChange={this.updateField} onFocus={this.displayAutocomplete} onBlur={this.removeAutocomplete} />
            <ul id="title" className="nodisplay-auto">
              {titles}
            </ul>
          </label>
          <label className="form-label">
            Search by Release Year:
            <input name="release_year" type="number" value={this.state.release_year} onChange={this.updateField} />

          </label>
          <label className="form-label">
            Search by Director:
            <input name="director" type="text" value={this.state.director} onChange={this.updateField} onFocus={this.displayAutocomplete} onBlur={this.removeAutocomplete} />
            <ul id="director" className="nodisplay-auto">
              {directors}
            </ul>
          </label>
          <label className="form-label">
            Search by Actor:
            <input name="actor" type="text" value={this.state.actor} onChange={this.updateField} onFocus={this.displayAutocomplete} onBlur={this.removeAutocomplete} />
            <ul id="actor" className="nodisplay-auto">
              {actors}
            </ul>
          </label>
          <label className="form-label">
            Search by Writer:
            <input name="writer" type="text" value={this.state.writer} onChange={this.updateField} onFocus={this.displayAutocomplete} onBlur={this.removeAutocomplete}/>
            <ul id="writer" className="nodisplay-auto">
              {writers}
            </ul>
          </label>
          <label className="form-label">
            Search by Production Company:
            <input name="company" type="text" value={this.state.company} onChange={this.updateField} onFocus={this.displayAutocomplete} onBlur={this.removeAutocomplete}/>
            <ul id="company" className="nodisplay-auto">
              {companies}
            </ul>
          </label>
          <label className="form-label">
            Search by Distributor:
            <input name="distributor" type="text" value={this.state.distributor} onChange={this.updateField} onFocus={this.displayAutocomplete} onBlur={this.removeAutocomplete}/>
            <ul id="distributor" className="nodisplay-auto">
              {distributors}
            </ul>
          </label>
          <button onClick={this.handleClear}>Clear Filters</button>
        </form>
      </div>
    );
  }
}

export default Form;
