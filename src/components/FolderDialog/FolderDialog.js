import React, { useState } from "react";
import "./FolderDialog.style.css";
import Button from "../buttons/Button";

import SoundWave from "../SoundWave";

const FolderDialog = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    console.log(event.target.files[0]);
  };

  const handleSubmission = () => {};

  return (
    <div class="cards">
      <div>
        <h5>Select File:</h5>
        <p>Choose the sound file you want to run through the visualizer.</p>
        {isFilePicked && <SoundWave />}
        {!isFilePicked ? (
          <input type="file" name="file" onChange={changeHandler} />
        ) : (
          <Button title="Convert File" handleSubmission={handleSubmission} />
        )}
      </div>
    </div>
  );
};
export default FolderDialog;
