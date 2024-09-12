import React from "react";
import 'tachyons'

const SearchBox = ({searchfield, searchChange}) => { //searchChange是我在App這個父親那邊建立的，這邊這個function是指，每當觸發//
    return (
        <div className = 'tc pa2'> {/*pa2 是tachyons的style*/}
            <input
            className="pa3 ba b--light-red bg-lightest-blue"
            type='search' 
            placeholder="search robots" 
            onChange = {searchChange} //onChange是React裡面的一個功能，javascript是onchange, 在search box裡面輸入的時候，觸發searchChange來改變//
            /> {/*placeholder是搜尋input裡的文字*/}
        </div>
    )
}

export default SearchBox; //輸出//