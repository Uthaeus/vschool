import React, { Component } from 'react';

class MemeGenerator extends Component {
    state = {
        topText: '',
        bottomText: '',
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes    
                });
            });
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        name="topText" 
                        type="text" 
                        placeholder="Top Text" 
                        value={this.state.topText}
                        onChange={this.handleChange} 
                    />
                    <input 
                        name="bottomText" 
                        type="text" 
                        placeholder="Bottom Text" 
                        value={this.state.bottomText}
                        onChange={this.handleChange} 
                    />
                    <button>Gen</button>
                </form>
            </div>
        );
    }
}

export default MemeGenerator;