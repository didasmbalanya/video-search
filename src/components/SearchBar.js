import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    term: "",
  };
  componentDidMount() {
    this.props.onSubmit("typescript");
  }
  render() {
    return (
      <div className="ui segment">
        <form
          className="search-bar ui form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.term);
          }}
        >
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={({ target: { value } }) =>
                this.setState({ term: value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
