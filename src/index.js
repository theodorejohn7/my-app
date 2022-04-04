import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 


// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {
   
   
// }

// function tick() {
//   root.render(<Clock date={new Date()} />);
//   // root.render(<Clock />);

// }

// setInterval(tick, 1000);


// class Test extends React.Component {    
//   constructor() {    
//       this.state = {      
//           id: 1,      
//           name: "test"    
//       };  
//   }    
  
//   render() {    
//       return (      
//           <div>        
//             <p>{this.state.id}</p>        
//             <p>{this.state.name}</p>      
//           </div>    
//       );  
//   }
// }
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));


reportWebVitals();
