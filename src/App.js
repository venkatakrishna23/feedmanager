import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProfileWidget from "./components/ProfileWidget";
import PostCreationCard from "./components/PostCreationCard";
import DisplayFeed from "./components/DisplayFeed";
import PostsList from "./components/PostsList";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import PollSharpIcon from '@mui/icons-material/PollSharp';
import InsertInvitationSharpIcon from '@mui/icons-material/InsertInvitationSharp';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import ImageSharpIcon from '@mui/icons-material/ImageSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ErrorBoundary from './ErrorBoundary';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './StylesSheet/PostCreationCard.css';
import './StylesSheet/DisplayFeed.css';
import './App.css';

const feedList = ['News', 'Food', 'Lifestyle', 'Technology', 'Interest']


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default class AppComponent extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      openPostsModal: false,
      open: false,
      input: "",
      selectedFeed: [],
      uploadedImg: '',
      filterFeed: "",
      postsList: [{
        id: 0,
        postMsg: `feeling happy`,
        uploadedImg: '',
        tagsList: ['Interest'],
        createdOn: "4-03-2022"
      }]
    }
  }


  componentDidMount = () => {

    let storedPostsList = localStorage.getItem("postsList")
    if (storedPostsList) {
      let postsList = JSON.parse(storedPostsList)
      this.setState({ postsList })
    }
  }

  openPostsPopUp = () => {
    this.setState({ openPostsModal: true })
  }
  setFilterFeed = (feed) => {
    this.setState({ filterFeed: feed })
  }
  closePostsPopUp = () => {
    this.setState({ openPostsModal: false })
    this.clearInputFields()
  }

  handleFeedSelect = (feed) => {

    let feeds = [...this.state.selectedFeed]
    if (!feeds.includes(feed)) {
      feeds.push(feed)
      this.setState({ selectedFeed: feeds })
    }

  }

  removeTag = (feed) => {

    let feeds = [...this.state.selectedFeed]
    let index = feeds.indexOf(feed);
    if (index > -1) {
      feeds.splice(index, 1);
      this.setState({ selectedFeed: feeds })
    }
  }

  handleMessage = (e) => {

    this.setState({ input: e.target.value })
  }

  createPost = () => {
    if (this.state.selectedFeed && this.state.selectedFeed.length > 0 && this.state.input && this.state.input !== "") {
      let postsList = [...this.state.postsList],
        postObj = {
          id: postsList.length,
          postMsg: this.state.input,
          uploadedImg: this.state.uploadedImg,
          tagsList: [...this.state.selectedFeed],
          createdOn: new Date()
        }

      postsList.unshift(postObj)
      this.setState({ postsList }, () => {
        this.clearInputFields()
        localStorage.setItem('postsList', JSON.stringify(this.state.postsList))
      })
    } else {
      this.setState({ open: true })
    }

  }

  clearInputFields = () => {
    this.setState({ input: "", openPostsModal: false, selectedFeed: [], uploadedImg: '', open: false })
  }

  uploadImage = (e) => {

    let [file] = e.target.files, imgSrc = ''
    if (file) {
      imgSrc = URL.createObjectURL(file)
    }
    this.setState({ uploadedImg: imgSrc })
  }

  handleDeletePost = (index) => {

    let postsList = [...this.state.postsList]
    //let elementPos = postsList.map(function (x) { return x.id; }).indexOf(post.id);
    if (index > -1) {

      postsList.splice(index, 1)
      this.setState({ postsList }, () => {
        localStorage.setItem('postsList', JSON.stringify(this.state.postsList))
      })
    }

  }


  handleClose = () => {
    this.setState({ open: false })
  }
  render() {

    return (

      <div className="Header">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>

        <div>
          <div className="side-components">
            <ErrorBoundary>
              <ProfileWidget />
            </ErrorBoundary>
            <hr style={{ marginLeft: '15px', marginTop: '10px' }} />
            <ErrorBoundary>
              <Sidebar />
            </ErrorBoundary>
          </div>
          <div className='create-posts'>

            <ErrorBoundary>
              <PostCreationCard
                openPostsPopUp={this.openPostsPopUp}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <DisplayFeed
                feedList={feedList}
                filterFeed={this.state.filterFeed}
                setFilterFeed={this.setFilterFeed}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <PostsList
                postsList={this.state.postsList}
                handleDeletePost={this.handleDeletePost}
                filterFeed={this.state.filterFeed}
              />
            </ErrorBoundary>
            <ErrorBoundary>

              <Modal open={this.state.openPostsModal}
                onClose={this.closePostsPopUp} center
                classNames={{
                  overlay: 'customOverlay',
                  modal: 'customModal',
                }}
              >
                <div className="messageSender">
                  <div className="messageSender__top">
                    <div className="messageSender__bottom">
                      <div className="messageSender__option verti" onClick={this.openPostsPopUp}>
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
                      value={this.state.input}
                      onChange={this.handleMessage}
                      type="text"
                      className="messageSender__input"
                      placeholder={`Write something...`}
                    />


                  </form>

                  <div>

                    <div style={{ marginLeft: '90%', marginTop: "5px" }} >
                      <AddLocationAltSharpIcon style={{ color: '#808080', cursor: "pointer", marginLeft: '1%' }} />
                      <label for="uploadBannerImage">
                        <ImageSharpIcon style={{ color: '#808080', cursor: "pointer", marginRight: '1%' }} />

                      </label>


                      <input type='file' id="uploadBannerImage" onChange={this.uploadImage} accept="image/*" />

                    </div>

                  </div>

                </div>
                <div>{this.state.uploadedImg && this.state.uploadedImg !== '' ? <img src={this.state.uploadedImg} alt="uploaded img" style={{ height: "50px", width: "50px", margin: '3%' }} /> : null}
                </div>
                <div style={{ color: "#04AA6D", fontSize: "18px", fontWeight: "400", marginTop: "10px" }}>Add topics that describe your post</div>

                <div style={{ marginTop: "2%" }}>

                  {
                    feedList.map((feed, index) => {

                      if (this.state.selectedFeed.includes(feed)) {

                        return <button key={index}
                          style={{ backgroundColor: '#808080', color: '#ffffff', fontSize: '20px', borderRadius: "50px", marginRight: "5px" }}
                          className='display-feed'

                        >{feed}  <CloseSharpIcon style={{ color: '#ffffff' }} onClick={() => this.removeTag(feed)} /> </button>

                      } else {
                        return <button key={index} style={{ color: '#04AA6D', fontSize: '20px', borderRadius: "50px", marginRight: "5px" }}
                          className='display-feed'
                          onClick={() => this.handleFeedSelect(feed)}
                        ><span >{feed}</span> </button>

                      }

                    })
                  }



                </div>
                <div style={{ marginTop: "2%" }}>
                  <button style={{ backgroundColor: '#04aa6d', color: '#ffffff', fontSize: '25px', float: "right", width: "200px" }}

                    onClick={this.createPost}
                  >Post</button>
                </div>
              </Modal>
            </ErrorBoundary>
            <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
              <Alert severity="error" sx={{ width: '100%' }} onClose={this.handleClose}>
                Select atleast one tag and write something..
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    );
  }
}