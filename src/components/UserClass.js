import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        console.log("constuctor called")
    }
   async componentDidMount(){
        console.log("component did mount called")
    }
    render(){
    const {count} = this.state;
                console.log("render called")
        return(
            <div className="user-card">
                <h2>Data from Class Based Component</h2>
                <h2>{this.props.name}</h2>
                <h3><button onClick={() => {
                    this.setState({
                        count: this.state.count-1
                    })
                }}
                >Decrease</button>
                Count : {count}
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+    1
                    })
                }}
                >Increase</button></h3>
            </div>
        )
    }
}

export default UserClass;