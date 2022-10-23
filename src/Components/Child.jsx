import { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h4>Child Component</h4>
                Name : {this.props.eleValue}
            </div>
        )
    }
}

export default Child