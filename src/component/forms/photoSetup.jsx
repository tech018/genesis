import React from "react";
import Webcam from "react-webcam";
import { Grid, Avatar, Container } from "@mui/material";
import { updatePhoto } from "../../store/application";
import { useDispatch } from "react-redux";
const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

const PhotoSetup = ({ photoSrc, setPhotoSrc }) => {
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhotoSrc(imageSrc);
    dispatch(updatePhoto(imageSrc));
  }, [webcamRef, setPhotoSrc, dispatch]);

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Webcam
              audio={false}
              height={300}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={300}
              style={{
                borderRadius: "10px",
                border: "5px solid #b9f6ca",
                margin: "0px 0px 0px 130px",
              }}
              imageSmoothing={true}
              videoConstraints={videoConstraints}
            />
          </Grid>
          <Grid item xs={6}>
            <Avatar
              variant="square"
              alt="Remy Sharp"
              src={photoSrc}
              sx={{
                width: 300,
                height: 300,
                margin: "auto",
                borderRadius: "10px",
                border: "5px solid #b9f6ca",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <button
              style={{ color: "white", margin: "0px 10px 10px 205px" }}
              className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-k2rdow-MuiButtonBase-root-MuiButton-root"
              onClick={capture}
            >
              Capture photo
            </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PhotoSetup;
