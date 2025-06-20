"use client";

import Button from "@/app/_components/Button";
import { Loader, Loader2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MediaUpload = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [audioPreviewUrl, setAudioPreviewUrl] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus(""); // Clear previous status

      // Create a URL for audio preview
      const audioUrl = URL.createObjectURL(file);
      setAudioPreviewUrl(audioUrl);
    } else {
      setSelectedFile(null);
      setAudioPreviewUrl(null);
    }
  };

  useEffect(() => {
    if (selectedFile) handleUpload();
  }, [selectedFile]);

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select an audio file first.");
      return;
    }

    setUploadStatus("Uploading...");

    const formData = new FormData();
    formData.append("audioFile", selectedFile); // 'audioFile' is the name your backend will expect

    try {
      // Replace with your actual backend upload endpoint
      const response = await fetch("http://localhost:4000/upload-audio", {
        method: "POST",
        body: formData,
        // No 'Content-Type' header needed here; FormData sets it automatically for multipart/form-data
      });

      if (response.ok) {
        const data = await response.json();
        setUploadStatus(
          `Upload successful! Server response: ${
            data.message || "File received."
          }`
        );
        console.log("Server response:", data);

        const id = data?.id;
        // You might want to clear the selected file after successful upload
        // setSelectedFile(null);
        // setAudioPreviewUrl(null);
        if (id) router.push(`/progress/${id}`);
      } else {
        const errorData = await response.json();
        setUploadStatus(
          `Upload failed: ${errorData.message || "Unknown error."}`
        );
        console.error("Upload error:", errorData);
      }
    } catch (error: unknown) {
      setUploadStatus(`An error occurred: ${error}`);
      console.error("Network error during upload:", error);
    }
  };

  return (
    <>
      <Button
        // onClick={handleUpload}
        // disabled={!selectedFile}
        variant="red"
        className="relative p-12 -mt-4 disabled:opacity-100 cursor-pointer border-b-8 pb-10"
      >
        <input
          accept="audio/*"
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        ></input>
        {!selectedFile ? (
          <Upload className="size-16" />
        ) : (
          <Loader2 className="animate-spin size-16 scale-110" />
        )}
      </Button>

      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>File Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      )}

      {audioPreviewUrl && (
        <div>
          <h3>Audio Preview:</h3>
          <audio controls src={audioPreviewUrl}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {uploadStatus && <p>{uploadStatus}</p>}
    </>
  );
};

export default MediaUpload;
