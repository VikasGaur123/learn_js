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
    // console.log("value=",event.target.value);
    const name = event.target.name;
    // console.log("name=",name);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
   console.log("event",this.state.email);
   let n=this.state.name;
   let e=this.state.email;
   let m=this.state.meassage;
   let ph=this.state.number;
   console.log(typeof ph);
   let Echack=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
   if(n.length!=0 && n.length>=5){
     console.log("ok hai");
     document.getElementById('NE').innerHTML='';
   }
   else{
    document.getElementById('NE').innerHTML='Enter valid Name';
   }
   if(ph>0){
    document.getElementById('PH').innerHTML='';

   }else{
    document.getElementById('PH').innerHTML='Enter valid phone';

   }
   if(e!='' && Echack.test(e))
   {
    document.getElementById('EM').innerHTML='';
   }else{
    document.getElementById('EM').innerHTML='Enter Valid Email';
   }
   if(m==undefined){
    document.getElementById('MA').innerHTML='Enter Valid Meassage';
   }else{
    document.getElementById('MA').innerHTML='';
   }
  //  // alert('A name was submitted: ' + this.state.value);
  // let [name]=event.target.name.value;
  //  console.log(name);
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
        </label><b><span className="error" id="NE"> </span></b><br/><br/>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email}  onChange={this.handleChange} />
        </label><b><span id="EM"> </span></b><br/><br/>
        <label>
          Phone Number:
          <input type="number" name='number' value={this.state.number} onChange={this.handleChange} />
        </label><b><span id="PH"> </span></b><br/><br/>
        <label>
          Meassage:
          <textarea name='meassage' value={this.state.meassage} onChange={this.handleChange}  />
        </label><b><span id="MA"> </span></b><br/><br/>
        <input type="submit"  value="Submit" />
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