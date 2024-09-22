import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '2px solid grey', height:'800px' }}>
            {props.children} {/*props.children 代表可以針對<Scroll></Scroll>裡的東西應用這個function*/}
        </div>
    ); 
}

export default Scroll;
