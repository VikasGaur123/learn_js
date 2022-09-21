import React from 'react';
import ReactDOM from 'react-dom/client';
import ShowValue from './showOtherComponent';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // const target = event.target.value;
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("event",this.event);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <>
      <h1>Form </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label><br/><br/>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email}  onChange={this.handleChange} />
        </label><br/><br/>
        <label>
          Phone Number:
          <input type="number" name='number' value={this.state.number} onChange={this.handleChange} />
        </label><br/><br/>
        <label>
          Meassage:
          <textarea name='meassage' value={this.state.meassage} onChange={this.handleChange}  />
        </label><br/><br/>
        <input type="submit" value="Submit" />
      </form>
      <ShowValue name= {this.state.name} email={this.state.email} number={this.state.number} meassage={this.state.meassage} />
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<NameForm />

</>
);