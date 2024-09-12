import React from 'react';
import Card from './Card';

const cardlist = ({robots}) => {
    return (
        <div className='tc'>
            {
                robots.map((user, i) => { //user是自定義的代表robots裡面的所有東西，i是索引//
                    return( //因為要return很多行，所以加括號，JSX只能處理一個component//
                <Card 
                    key = {i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />
                    );    
                })    
            }
        </div>
    );
}

export default cardlist;