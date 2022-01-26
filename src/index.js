import React from "react";
import ReactDom from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>longitude:</div>;
// };
// class App extends React.Component {
//constructor is the first fn called when instance of the class is created
// constructor(props) {
//   //extending the component base class constructor
//   super(props);
//   //initializing state
//   this.state = {
//     lat: null,
//     errorMessage: "",
//   };
//   // window.navigator.geolocation.getCurrentPosition(
//   (position) => {
//     this.setState({ lat: position.coords.latitude });
//   },
//   (err) => {
//     this.setState({ errorMessage: err.message });
//   }
// );
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("my component rendered");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("my component is updated");
  }

  //required render function for a class
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude:{this.state.lat}</div>;
    }
    return <div>loading</div>;
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
