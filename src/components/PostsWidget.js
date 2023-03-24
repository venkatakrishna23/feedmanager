import React, { useState } from 'react';
import moment from 'moment';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { IconButton } from '@material-ui/core';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import '../StylesSheet/PostsWidget.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function PostsWidget(props) {
    const [openDelete, setopenDelete] = useState(false);
    const [testTopic, settestTopic] = useState('');
    const [timeDiff, settimeDiff] = useState('');

    const deletePost = () => {
        setopenDelete(true)

    }

    const closeDeletePopUp = () => {
        setopenDelete(false)
    }

    const confirmDeletePost = () => {
        closeDeletePopUp()
        props.handleDeletePost(props.index)
    }
    React.useEffect(() => {

        if (props.post.tagsList) {
            let topicList = '', tagsList = [...props.post.tagsList]

            for (let tag of tagsList) {
                if (topicList !== '') {
                    topicList = topicList + " ," + tag
                }
                else {
                    topicList = tag
                }

            }
            settestTopic(topicList)
        }

        let now = moment(), time_Diff = ""
        if (props.post.createdOn) {
            let seconds = now.diff(props.post.createdOn, "seconds")
            let minutes = now.diff(props.post.createdOn, "minutes")
            let hours = now.diff(props.post.createdOn, "hours")
            let days = now.diff(props.post.createdOn, "days")
            if (days) {
                time_Diff = `${days} days ago`
            } else if (hours) {
                time_Diff = `${hours} hours ago`
            }
            else if (minutes) {
                time_Diff = `${minutes} minutes ago`
            } else if (seconds) {
                time_Diff = `${seconds} seconds ago`
            }
            settimeDiff(time_Diff)
        }

    }, [props.post])




    return (
        <div className="card individual-post">
            <div>
                <div style={{ color: 'gray', paddingLeft: "1%", paddingTop: "2%" }}>

                    <div><h4>TEST TOPIC - {testTopic}  <span style={{ float: 'right', paddingRight: "3%" }}>{timeDiff}</span></h4>


                    </div>

                </div>

                <div className='profileIcon'>
                    <IconButton>
                        <AccountCircleSharpIcon fontSize="large" style={{ height: '50px', width: '50px' }} />
                    </IconButton>
                </div>
                <div style={{ float: "right" }}>
                    <div className="w3-dropdown-hover">
                        <IconButton >
                            <MoreVertSharpIcon fontSize="small" />
                        </IconButton>
                        <div className="w3-dropdown-content w3-bar-block w3-border">
                            <button href="#" className="w3-bar-item w3-button" onClick={deletePost}>Delete</button>

                        </div>
                    </div>

                </div>
            </div>


            <div class="container">
                <h4 style={{ color: 'gray' }}><b>Vamsi Krishna</b></h4>
                <p style={{ color: '#04AA6D', fontSize: "12px", marginLeft: '2px' }}> <b>Current User</b></p>
                <div>{props.post.uploadedImg && props.post.uploadedImg !== '' ? <img src={props.post.uploadedImg} alt="uploaded img" style={{ height: "250px", width: "250px", margin: '3%', align: 'center' }} /> : null}
                </div>
                <p>{props.post.postMsg ? props.post.postMsg : ""}</p>
            </div>
            <Modal open={openDelete}
                onClose={closeDeletePopUp} center

            >
                <h2>Are you sure, you want to delete this post ?</h2>
                <div style={{ marginTop: "2%", overflow: 'hidden', clear: 'both' }}>
                    <button style={{ backgroundColor: '#04aa6d', color: '#ffffff', fontSize: '25px', float: "right" }}

                        onClick={confirmDeletePost}
                    ><span >Yes</span> </button>
                </div>
            </Modal>
        </div>
    )
}

export default PostsWidget
