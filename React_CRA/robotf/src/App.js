import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js'
import './App.css'

class App extends Component{
    constructor(){ // constructor用來設定初始狀態，通常會跟super, this.state一起出現//
        super() //先讓父母做事，讓父母初始化，有constructor必須要有super//
        this.state = { //要用this，幾乎必需要有super()，用來定義初始狀態//
            robots: robots, //後面的robots是jsx裡面的const robots//
            searchfield: ''
        }
    }

SChange = (event) => { //在React底下創造一個function，arrow function 需要 SChange = (event) => {} 寫清楚，不可以(event){}
    this.setState({ searchfield: event.target.value }) // 設定searchfield的內容屬性，這邊是要求searchfield要變成輸入什麼值就是什麼，而不是''//
    //console.log(event.target.value); //event.target.value所指的是我們在search box 裡輸入的值，如果直接用event會包含其他event裡面的元素，不只value////
    // console.log(filtered)//
}

    render() {
        const filtered = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //如果在searchfield輸入的東西，是robot所包含的，則return出來
        })
        return(
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.SChange}/> {/*因為是object所以要用this, this 代表App*/}
                {/* <CardList robots = {this.state.robots}/> robots = ... 這個robots是jsx裡定義的const robots */}
                <CardList robots = {filtered}/> {/*把filtered的東西選出來render在網頁上*/}
            </div>
        );
    }
}
export default App;