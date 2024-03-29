import React,{useState} from 'react'

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfFile from './Resume.pdf'
import Header2 from './Header2';
const MyResume = () => {
const [defaultPdfFile]=useState(pdfFile);
const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
      <>
       <Header2 />
      <div className='pdf-container'>
      {/* show pdf conditionally (if we have one)  */}
      {defaultPdfFile && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdfFile}
          plugins={[defaultLayoutPluginInstance]} />
    </Worker></>}

    {/* if we dont have pdf or viewPdf state is null */}
    {!defaultPdfFile&&<>No pdf file selected</>}
    </div>
    </>
     

    )
}

export default MyResume
