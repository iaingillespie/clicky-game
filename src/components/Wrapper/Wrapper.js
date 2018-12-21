import React, { Component } from 'react';
import CharacterCard from '../CharacterCard'
import Header from "../Header"
import './Wrapper.css'
var shuffle = require('shuffle-array')
const characterList = [{key: 1, img: "https://cdnb.artstation.com/p/assets/images/images/001/452/685/large/ernest-jan-vincent-munoz-totoro-square.jpg?1446673397"},{key: 2, img: "https://resizing.flixster.com/FeWYji_2OdoD0VoZw-ZG7W_zYG0=/300x300/v1.aDsyMzk5O2o7MTc5MTA7MTIwMDs2NTI7MzUy"},{key: 3, img: "https://i.gifer.com/8Xsd.gif"},{key: 4, img: "https://i.pinimg.com/564x/8b/49/a5/8b49a568bc1710d8f8420abe6f9f99b0--howls-moving-castle-studio-ghibli.jpg"}, {key: 5, img: "data:image/jpeg;base64,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"}, {key: 6, img: "https://i.pinimg.com/236x/03/81/e2/0381e2de2f72415d7e07ab0a50f88d1d.jpg"}, {key: 7, img: "https://i.pinimg.com/236x/06/6d/d7/066dd7d62d5fbe61479ffad1c9da8cff--hayao-miyazaki-sen.jpg"}, {key: 8, img: "https://img1.ak.crunchyroll.com/i/spire2/add66b119051c5870bf857d06740e3201538677168_large.jpg"}, {key: 9, img: "http://rs97.pbsrc.com/albums/l236/wonkalumps/Anime%20gifs/Spirited%20Away/spiritedaway-babymorph.gif~c200"}, {key: 10, img: "https://cdn.myanimelist.net/s/common/uploaded_files/1445575453-0d2dcd8a693013ab06a6060478cd5093.jpeg"}, {key: 11, img: "https://img1.ak.crunchyroll.com/i/spire1/1e759204c760a9906dc7aed673056fbf1381495584_large.jpg"}, {key: 12, img: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2014/08/p22-martin-art-of-princess-mononoke-b-WEB-20140803-200x200.jpg"} ]

class Wrapper extends Component {
    state = {
        characters: characterList,
        clicked: [],
        score: 0,
        topScore: 0
    }

    handleClick = (key) => {

        console.log("id:" + key )
        
        if (this.state.clicked.includes(key)){
            alert("Game Over");
            this.setState({score: 0})
            this.setState({clicked: []})
            if(this.state.score > this.state.topScore){
                // this.setState({topScore: score})
                // console.log("Top Score:" + topScore)
            }
            return
        }
        else if (this.state.score > 11){
            alert("You Got the max Score !")
            this.setState({score: 0})
            this.setState({clicked: []})
            return
        }

        else{
            this.setState({clicked: [...this.state.clicked, key]  });
            this.setState({score: this.state.score + 1}, function(){console.log(this.state.score)})
            this.setState({characters: shuffle(this.state.characters)});

        }

    
        this.setState({clicked: [...this.state.clicked, key]})
    }

    render(){
    return (<div> 
            <Header />

            <div className="wrapper">
            {
                this.state.characters.map( (element, index) => {
                    return <CharacterCard id={element.key} handleClick={this.handleClick} img={element.img} />
                })
            }
            </div>

    </div>)
    }

}

export default Wrapper