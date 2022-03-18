import ReactPlayer from 'react-player'

const Video = () => {
	return (
		<div className='video-container'>
			<ReactPlayer
				className={'video-box'}
				url={'https://www.youtube.com/watch?v=IPXIgEAGe4U'}
				muted={true}
				controls={false}
				playing={true}
				width={'100%'}
				height={'100%'}
			/>
		</div>
	)
}

export default Video

