import { useRef } from 'react';

import * as tf from '@tensorflow/tfjs';
import * as facemeshModel from '@tensorflow-models/facemesh';
import Webcam from 'react-webcam';
import {drawMesh} from './utilities'

function FaceMesh() {
  //setup refrences
  const webCamRef = useRef(null);
  const canvasRef = useRef(null);

  //Load Facemesh
  const runFaceMesh = async() => {
    const net = await facemeshModel.load({inputResolution: {width: 640, height: 480}, scale:0.8});
    setInterval(() => {
      detect(net)
    }, 100);
  }

  //Detect Function
  const detect = async(net) => {
    if(typeof webCamRef.current != 'undefined' && webCamRef.current != null && webCamRef.current.video.readyState === 4){
      // Get Video Properties
        const video = webCamRef.current.video;
        const videoWidth = webCamRef.current.video.videoWidth;
        const videoHeight = webCamRef.current.video.videoHeight
      // Set video width
        webCamRef.current.video.width = videoWidth;
        webCamRef.current.video.height = videoHeight;
      // Set canvas width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
      // Make detections
        const face = await net.estimateFaces(video);
        // console.log(face)
      // Get canvas detections for drawing
        const ctx = canvasRef.current.getContext("2d");
        drawMesh(face, ctx)
    }
  }

  runFaceMesh();
  return (
    <div>
      <h2>This is FaceMesh Model</h2>
      <div>
        <Webcam
          ref={webCamRef}
          style={
            {
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 9,
              width: 640,
              height: 480
            }
          }
        />
        <canvas
          ref={canvasRef}
          style={
            {
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 9,
              width: 640,
              height: 480
            }
          }
        />

      </div>
    </div>
  );
}

export default FaceMesh;