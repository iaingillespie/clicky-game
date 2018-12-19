import React, { Component } from 'react';
import CharacterCard from '../CharacterCard'
import './Wrapper.css'
var shuffle = require('shuffle-array')
const characterList = [{key: 1, img: "https://cdnb.artstation.com/p/assets/images/images/001/452/685/large/ernest-jan-vincent-munoz-totoro-square.jpg?1446673397"},{key: 2, img: "https://resizing.flixster.com/FeWYji_2OdoD0VoZw-ZG7W_zYG0=/300x300/v1.aDsyMzk5O2o7MTc5MTA7MTIwMDs2NTI7MzUy"},{key: 3, img: "https://i.gifer.com/8Xsd.gif"},{key: 4, img: "https://i.pinimg.com/564x/8b/49/a5/8b49a568bc1710d8f8420abe6f9f99b0--howls-moving-castle-studio-ghibli.jpg"}, {key: 5, img: "https://www.laughingplace.com/w/wp-content/uploads/2014/08/witch2.jpg"}, {key: 6, img: "https://i.pinimg.com/236x/03/81/e2/0381e2de2f72415d7e07ab0a50f88d1d.jpg"}, {key: 7, img: "https://i.pinimg.com/236x/06/6d/d7/066dd7d62d5fbe61479ffad1c9da8cff--hayao-miyazaki-sen.jpg"}, {key: 8, img: "https://img1.ak.crunchyroll.com/i/spire2/add66b119051c5870bf857d06740e3201538677168_large.jpg"}, {key: 9, img: "http://rs97.pbsrc.com/albums/l236/wonkalumps/Anime%20gifs/Spirited%20Away/spiritedaway-babymorph.gif~c200"}, {key: 10, img: "https://cdn.myanimelist.net/s/common/uploaded_files/1445575453-0d2dcd8a693013ab06a6060478cd5093.jpeg"}, {key: 11, img: "https://img1.ak.crunchyroll.com/i/spire1/1e759204c760a9906dc7aed673056fbf1381495584_large.jpg"}, {key: 12, img: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2014/08/p22-martin-art-of-princess-mononoke-b-WEB-20140803-200x200.jpg"} ]

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
    return (<div className="wrapper"> 

            {
                this.state.characters.map( (element, index) => {
                    return <CharacterCard id={element.key} handleClick={this.handleClick} img={element.img} />
                })
            }

    </div>)
    }

}

export default Wrapper