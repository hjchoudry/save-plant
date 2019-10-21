import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Banner, Heading, Videos, GridStyle, AddPhotos } from "./gallerystyle";
import video1 from "./image/video1.mp4";
import video2 from "./image/video2.mp4";
import video3 from "./image/video3.mp4";
import video4 from "./image/video4.mp4";
//images
import image1 from "./image/New/image1.jpg";
import image2 from "./image/New/image2.jpg";
import image3 from "./image/New/image3.jpg";
import image4 from "./image/New/image4.jpg";
import image5 from "./image/New/image5.jpeg";
import image6 from "./image/New/image6.jpg";
import image7 from "./image/New/image7.jpg";
import image8 from "./image/New/image8.jpg";
import image9 from "./image/New/image9.jpg";
import image10 from "./image/New/image10.jpg";
import image11 from "./image/New/image11.jpg";
import image12 from "./image/New/image12.jpg";
import image13 from "./image/New/image13.jpeg";
import image14 from "./image/New/image14.jpg";
import image15 from "./image/New/image15.jpg";
import image16 from "./image/New/image16.jpg";
import image17 from "./image/New/image17.jpg";
import image18 from "./image/New/image18.jpg";
import image19 from "./image/New/image19.jpeg";
import image20 from "./image/New/image20.png";
import image21 from "./image/New/image21.jpg";
import image22 from "./image/New/image22.jpg";
import image23 from "./image/New/image23.jpg";
import image24 from "./image/New/image24.jpg";
import image25 from "./image/New/image25.jpg";
import image26 from "./image/New/image26.jpg";
import image27 from "./image/New/image27.jpg";
import image28 from "./image/New/image28.jpg";
import image29 from "./image/New/image29.jpg";
import image30 from "./image/New/image30.jpg";
import image31 from "./image/New/image31.jpg";
import image32 from "./image/New/image32.jpg";
import image33 from "./image/New/image33.jpg";
import image34 from "./image/New/image34.jpg";
import image35 from "./image/New/image35.jpg";
import image36 from "./image/New/image36.jpg";
import image37 from "./image/New/image37.jpg";
import image38 from "./image/New/image38.jpg";
import image39 from "./image/New/image39.jpg";
import image40 from "./image/New/image40.jpg";
import image41 from "./image/New/image41.jpg";
import image42 from "./image/New/image42.jpg";
import image43 from "./image/New/image43.jpg";
import image44 from "./image/New/image44.jpg";
import image45 from "./image/New/image45.jpg";
import image46 from "./image/New/image46.jpg";
import image47 from "./image/New/image47.jpg";
import image48 from "./image/New/image48.jpg";
import image49 from "./image/New/image49.jpg";
import image50 from "./image/New/image50.webp";
import image51 from "./image/New/image51.jpeg";
import image52 from "./image/New/image52.jpg";
import image53 from "./image/New/image53.jpg";
import image54 from "./image/New/image54.jpg";
import image55 from "./image/New/image55.jpg";
import image56 from "./image/New/image56.jpg";
import image57 from "./image/New/image57.jpg";
import image58 from "./image/New/image58.jpg";
import image59 from "./image/New/image59.jpg";
import image60 from "./image/New/image60.jpg";
import image61 from "./image/New/image61.jpg";
import image62 from "./image/New/image62.jpg";
import image63 from "./image/New/image63.jpg";
import image64 from "./image/New/image64.jpg";
import image65 from "./image/New/image65.jpg";
import image66 from "./image/New/image66.jpg";
import image67 from "./image/New/image67.jpg";
import image68 from "./image/New/image68.jpg";
import image69 from "./image/New/image69.jpg";
import image70 from "./image/New/image70.jpg";
import image71 from "./image/New/image71.jpg";
import image72 from "./image/New/image72.jpg";
import image73 from "./image/New/image73.jpg";
import image74 from "./image/New/image74.jpg";
import image75 from "./image/New/image75.jpg";
import image76 from "./image/New/image76.jpg";
import image77 from "./image/New/image77.jpg";
import image78 from "./image/New/image78.jpg";
import image79 from "./image/New/image79.jpg";
import image80 from "./image/New/image80.jpg";
import image81 from "./image/New/image81.jpg";
import image82 from "./image/New/image82.jpg";
import image83 from "./image/New/image83.jpg";
import image84 from "./image/New/image84.jpg";
import image85 from "./image/New/image85.jpg";
import image86 from "./image/New/image86.jpg";
import image87 from "./image/New/image87.jpg";
import image88 from "./image/New/image88.jpg";
import image89 from "./image/New/image39.jpg";
import image90 from "./image/New/image90.jpg";
import image91 from "./image/New/image91.jpg";
import image92 from "./image/New/image92.jpg";
import image93 from "./image/New/image93.jpg";
import image94 from "./image/New/image94.jpg";
import image95 from "./image/New/image95.jpg";
import image96 from "./image/New/image96.jpg";
import image97 from "./image/New/image97.jpg";
import image98 from "./image/New/image98.jpg";
import image99 from "./image/New/image99.jpg";
import image100 from "./image/New/image101.jpg";
import image101 from "./image/New/image101.jpg";
import image102 from "./image/New/image102.jpg";
import image103 from "./image/New/image103.jpg";
import image104 from "./image/New/image104.jpg";
import image105 from "./image/New/image105.jpg";
import image106 from "./image/New/image106.jpg";
import image107 from "./image/New/image107.jpg";
import image108 from "./image/New/image108.jpg";
import image109 from "./image/New/image109.jpg";
import image110 from "./image/New/image110.jpg";
import image111 from "./image/New/image111.jpg";
import image112 from "./image/New/image112.jpg";
import image113 from "./image/New/image103.jpg";
import image114 from "./image/New/image104.jpg";
import image115 from "./image/New/image105.jpg";
import image116 from "./image/New/image106.jpg";
import image117 from "./image/New/image107.jpg";
import image118 from "./image/New/image108.jpg";
import image119 from "./image/New/image109.jpg";
import image120 from "./image/New/image110.jpg";

const MyVideo = ({ video1, video2, video3, video4 }) => {
  const videoRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ];
  return (
    <div>
      <video
        src={video1}
        controls
        ref={videoRefs[0]}
        onPlay={e => {
          videoRefs[1].current.pause();
          videoRefs[2].current.pause();
          videoRefs[3].current.pause();
          videoRefs[0].current.play();
        }}
      />
      <video
        src={video2}
        controls
        ref={videoRefs[1]}
        onPlay={e => {
          videoRefs[3].current.pause();
          videoRefs[2].current.pause();
          videoRefs[0].current.pause();
          videoRefs[1].current.play();
        }}
      />
      <video
        src={video3}
        controls
        ref={videoRefs[2]}
        onPlay={e => {
          videoRefs[3].current.pause();
          videoRefs[1].current.pause();
          videoRefs[0].current.pause();
          videoRefs[2].current.play();
        }}
      />
      <video
        src={video4}
        controls
        ref={videoRefs[3]}
        onPlay={e => {
          videoRefs[2].current.pause();
          videoRefs[1].current.pause();
          videoRefs[0].current.pause();
          videoRefs[3].current.play();
        }}
      />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {}
}));

const useStyle = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
const tileData = [
  { img: image1, cols: 2 },
  { img: image2, cols: 2 },
  { img: image3, cols: 2 },
  { img: image4, cols: 2 },
  { img: image5, cols: 2 },
  { img: image6, cols: 2 },
  { img: image7, cols: 2 },
  { img: image8, cols: 2 },
  { img: image9, cols: 2 },
  { img: image10, cols: 2 },
  { img: image11, cols: 2 },
  { img: image12, cols: 2 },
  { img: image13, cols: 2 },
  { img: image14, cols: 2 },
  { img: image15, cols: 2 },
  { img: image16, cols: 2 },
  { img: image17, cols: 2 },
  { img: image18, cols: 2 },
  { img: image19, cols: 2 },
  { img: image20, cols: 2 },
  { img: image21, cols: 2 },
  { img: image22, cols: 2 },
  { img: image23, cols: 2 },
  { img: image24, cols: 2 },
  { img: image25, cols: 2 },
  { img: image26, cols: 2 },
  { img: image27, cols: 2 },
  { img: image28, cols: 2 },
  { img: image29, cols: 2 },
  { img: image30, cols: 2 },
  { img: image31, cols: 2 },
  { img: image32, cols: 2 },
  { img: image33, cols: 2 },
  { img: image34, cols: 2 },
  { img: image35, cols: 2 },
  { img: image36, cols: 2 },
  { img: image37, cols: 2 },
  { img: image38, cols: 2 },
  { img: image39, cols: 2 },
  { img: image40, cols: 2 },
  { img: image41, cols: 2 },
  { img: image42, cols: 2 },
  { img: image43, cols: 2 },
  { img: image44, cols: 2 },
  { img: image45, cols: 2 },
  { img: image46, cols: 2 },
  { img: image47, cols: 2 },
  { img: image48, cols: 2 },
  { img: image49, cols: 2 },
  { img: image50, cols: 2 },
  { img: image51, cols: 2 },
  { img: image52, cols: 2 },
  { img: image53, cols: 2 },
  { img: image54, cols: 2 },
  { img: image55, cols: 2 },
  { img: image56, cols: 2 },
  { img: image57, cols: 2 },
  { img: image58, cols: 2 },
  { img: image59, cols: 2 },
  { img: image60, cols: 2 },
  { img: image61, cols: 2 },
  { img: image62, cols: 2 },
  { img: image63, cols: 2 },
  { img: image64, cols: 2 },
  { img: image65, cols: 2 },
  { img: image66, cols: 2 },
  { img: image67, cols: 2 },
  { img: image68, cols: 2 },
  { img: image69, cols: 2 },
  { img: image70, cols: 2 },
  { img: image71, cols: 2 },
  { img: image72, cols: 2 },
  { img: image73, cols: 2 },
  { img: image74, cols: 2 },
  { img: image75, cols: 2 },
  { img: image76, cols: 2 },
  { img: image77, cols: 2 },
  { img: image78, cols: 2 },
  { img: image79, cols: 2 },
  { img: image80, cols: 2 },
  { img: image81, cols: 2 },
  { img: image82, cols: 2 },
  { img: image83, cols: 2 },
  { img: image84, cols: 2 },
  { img: image85, cols: 2 },
  { img: image86, cols: 2 },
  { img: image87, cols: 2 },
  { img: image88, cols: 2 },
  { img: image89, cols: 2 },
  { img: image90, cols: 2 },
  { img: image91, cols: 2 },
  { img: image92, cols: 2 },
  { img: image93, cols: 2 },
  { img: image94, cols: 2 },
  { img: image95, cols: 2 },
  { img: image96, cols: 2 },
  { img: image97, cols: 2 },
  { img: image98, cols: 2 },
  { img: image99, cols: 2 },
  { img: image100, cols: 2 },
  { img: image101, cols: 2 },
  { img: image102, cols: 2 },
  { img: image103, cols: 2 },
  { img: image104, cols: 2 },
  { img: image105, cols: 2 },
  { img: image106, cols: 2 },
  { img: image107, cols: 2 },
  { img: image108, cols: 2 },
  { img: image109, cols: 2 },
  { img: image110, cols: 2 },
  { img: image111, cols: 2 },
  { img: image112, cols: 2 },
  { img: image113, cols: 2 },
  { img: image114, cols: 2 },
  { img: image115, cols: 2 },
  { img: image116, cols: 2 },
  { img: image117, cols: 2 },
  { img: image118, cols: 2 },
  { img: image119, cols: 2 },
  { img: image120, cols: 2 }
];

export default () => {
  const classes = useStyles();
  const classe = useStyle();

  const mobileView = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <Banner>
        {" "}
        <h1>LET US! </h1> <h2>Join hands for our planet.</h2>
      </Banner>
      <Heading>
        These are some photos from our tree planting projects around the world
        add your own photos!
      </Heading>
      <Videos>
        <MyVideo
          video1={video1}
          video2={video2}
          video3={video3}
          video4={video4}
        ></MyVideo>
      </Videos>
      <GridStyle>
        <div className={classes.root}>
          <GridList
            cellHeight={mobileView ? 130 : 250}
            className={classes.gridList}
            cols={mobileView ? 6 : 10}
          >
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img
                  src={tile.img}
                  width="100%"
                  alt={tile.title}
                  onClick={e => {
                    document.location = tile.img;
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </GridStyle>
      <AddPhotos>
        <h2>Add your own plants photos:</h2>
        <input
          accept="image/*"
          className={classe.input}
          id="contained-button-file"
          multiple
          type="file"
        />

        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            className={classe.button}
          >
            Upload
          </Button>
        </label>
      </AddPhotos>
    </div>
  );
};
