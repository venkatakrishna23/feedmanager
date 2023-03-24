import React, { useState } from 'react';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import PollSharpIcon from '@mui/icons-material/PollSharp';
import InsertInvitationSharpIcon from '@mui/icons-material/InsertInvitationSharp';
import '../StylesSheet/PostCreationCard.css';

function PostCreationCard(props) {
  
    const [input, setInput] = useState('');
   
    return (
        <div className='card'>
            <div className="messageSender">
                <div className="messageSender__top">
                <div className="messageSender__bottom">
                    <div className="messageSender__option verti" onClick={props.openPostsPopUp}>
                        <EditSharpIcon style={{ color: '#04AA6D' }} />
                        <h3>Post</h3>
                    </div>
                    <div className="messageSender__option verti">
                        <HelpOutlineSharpIcon style={{ color: '#04AA6D' }} />
                        <h3>Ask question</h3>
                    </div>
                    <div className="messageSender__option verti">
                        <PollSharpIcon style={{ color: '#04AA6D' }} />
                        <h3>Poll</h3>
                    </div>

                    <div className="messageSender__option verti-right">
                        <InsertInvitationSharpIcon style={{ color: '#04AA6D' }} />
                        <h3>Events</h3>
                    </div>
                </div>
               
                   
                </div>
                <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            className="messageSender__input"
                            placeholder={`What's on your mind, ?`}
                        />
                       
                    </form>
            </div>
        </div>
    )
}

export default PostCreationCard
