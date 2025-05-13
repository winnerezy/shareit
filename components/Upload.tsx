"use client";

import { Cloud } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button, buttonVariants } from "./ui/button";

const Upload = () => {
  // const [file, setFile] = useState<string | ArrayBuffer | null>(null)
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
      <div
        {...getRootProps()}
        className={buttonVariants({
          variant: "outline",
          className: "h-[300px] w-full max-w-[300px] flex flex-col gap-2",
        })}
      >
        <input {...getInputProps()} />

        <Cloud className="size-10" />
        <p className="text-sm text-wrap">Click or Drag n Drop To Upload</p>
      </div>
      {acceptedFiles.length > 0 && (
       acceptedFiles.map((file, index) => ( <p className="text-wrap max-w-[300px] text-center text-sm" key={index}>
        {file.name}
      </p>))
      )}

      <Button className="w-full max-w-[300px]">Send</Button>
    </div>
  );
};

export default Upload;
