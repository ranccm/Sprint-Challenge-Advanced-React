import React from 'react';
import axios from 'axios';

class Players extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        axios
            .get('http://localhost:5000/api/players')
            .then(res => { console.log(res.data); 
            this.setState({ players: res.data });
            });
        }

    render() {
        return (
            <div className="playerList">
                    {this.state.players.map((item) => 
                    <p key={item.id}>{item.name}</p>)}
            </div>
        );
    }
}

export default Players;