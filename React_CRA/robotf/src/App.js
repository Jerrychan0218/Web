import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots.js'
import './App.css'

//所有React 都會順應Lifecycle of component來執行順序，Mounting, Updating, Unmounting.//
// Mounting 是指把元素放入Dom//
//constructor(), getDerivedStateFromProps(),render(),componentDidMount()//

class App extends Component{ //代表App是從component延伸出來的React 元件//
    constructor(){ // constructor用來設定初始狀態，通常會跟super, this.state一起出現//
        super() //先讓父母做事，讓父母初始化，有constructor必須要有super//
        this.state = { //要用this，幾乎必需要有super()，用來定義初始狀態//
            robots: [ ], //現實中其實不太可能直接有一份自己整理的檔案，
            //robots: robots, //後面的robots是jsx裡面的const robots//
            searchfield: ''
        }
    } //constructor是mounting之一，所以會先跑//

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));   
}

SChange = (event) => { //在React底下創造一個function，arrow function 需要 SChange = (event) => {} 寫清楚，不可以(event){}
    this.setState({ searchfield: event.target.value }) // 設定searchfield的內容屬性，這邊是要求searchfield要變成輸入什麼值就是什麼，而不是''//
    //console.log(event.target.value); //event.target.value所指的是我們在search box 裡輸入的值，如果直接用event會包含其他event裡面的元素，不只value////
    // console.log(filtered)//
}

    render() {
        const filtered = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //如果在searchfield輸入的東西，是robot所包含的，則return出來
        })
        return(
            <div className = 'tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.SChange}/> {/*因為是object所以要用this, this 代表App*/}
                {/* <CardList robots = {this.state.robots}/> robots = ... 這個robots是jsx裡定義的const robots */}
                <Scroll>
                  <CardList robots = {filtered}/> {/*把filtered的東西選出來render在網頁上*/}
                </Scroll>
                
            </div>
        );
    }
}
export default App;