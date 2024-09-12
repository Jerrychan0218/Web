import React from 'react';

const Card = ({name, email, id}) => { //先參考row 4 再看這行，可以在簡化成這樣
    // const {name, email,id} = props; // 這行打完，後面所有有用到props的都無需打props
    return(
        <div className='tc bg-washed-blue dib br3 pa3 ma2 grow bw1 shadow-5'> {/*className裡面的tc. 是tachyons裡面的syntax*/}
            <h1>{'#'+id}</h1>
            <img alt='photo' src={`https://robohash.org/${id}?200x200`}/> 
            <div>
                <h2>{name}</h2> {/*本來是props.name*/}
                <p>{email}</p> 
            </div>
        </div>
    );
}
// row 7 src 後面是用了`${}` 的寫法，可以在字串裡加入引用的內容。
export default Card;