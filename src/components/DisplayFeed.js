import React from 'react';
import { displayFeedUnselected, displayFeedSelected } from '../helper'
import '../StylesSheet/DisplayFeed.css';

function DisplayFeed(props) {
    return (
        <div style={{ marginTop: "2%" }}>

            <button style={props.filterFeed === "" ? displayFeedSelected : displayFeedUnselected}
                onClick={() => props.setFilterFeed("")}
                className='display-feed'
            >All Post</button>
            {props.feedList.map(feed => <button style={props.filterFeed === feed ? displayFeedSelected : displayFeedUnselected}
                onClick={() => props.setFilterFeed(feed)}
                className='display-feed'
            >{feed}</button>

            )}

        </div>
    )
}

export default DisplayFeed
