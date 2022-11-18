import React, { Component, useContext } from 'react';
import VideoPlayer from 'react-video-js-player';
import video from './video/VID-20210320-WA0000.mp4'
import { useNavigate } from 'react-router-dom';
import AuthContext from './context';

function VideoApp(){
	const navigate=useNavigate()
	const authContext=useContext(AuthContext)
	const user=authContext.user
	return (
					<div>
						<p>Welcome {user.name}</p>
												
						<video src={video} width='750' height={500} controls
						></video>
						{user.isAdmin?(<><button onClick={()=>navigate('/Videoinput')}  >Upload Your Vedio</button>
						<button onClick={()=>navigate('/Addplan')} >Add Plan</button></>):null}
						
					</div>
				);
}


export default VideoApp;
