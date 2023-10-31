import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/UploadForm.css';

function UploadForm() {
    const [mediaFile, setMediaFile] = useState(null);
    const [fileObject, setFileObject] = useState(null);
    const [title, setTitle] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [contents, setContents] = useState("");

    const navigate = useNavigate();

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleHashtagChange = (event) => {
      setHashtag(event.target.value);
    };

    const handleContentsChange = (event) => {
      setContents(event.target.value);
    };

    const handleUpload = async (e) => {
      e.preventDefault();
      let content = contents + "    " +  hashtag;
    
      // Check if the fileObject is not null
      if (fileObject) {
        try {
          const formDataToUpload = new FormData();
          formDataToUpload.append('title', title);
          formDataToUpload.append('content', content);
          formDataToUpload.append('multipartFile', fileObject);
  
          const accessToken = localStorage.getItem('accessToken');
          console.log(accessToken);
  
          const response = await axios.post("/api/articles", formDataToUpload, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'multipart/form-data',
            }
            
          });

          if (response.status === 200) {
            navigate('/');
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log('No file selected');
      }
    
      e.stopPropagation();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      handleFileUpload(file);
    };

    const handleFileUpload = useCallback((file) => {
      if (file) {
          setFileObject(file); // add this line
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
          setMediaFile(reader.result);
          };
      } else {
          alert('No file chosen.');
      }
    }, []);

    const handleDrop = useCallback((event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      handleFileUpload(file);
    }, [handleFileUpload]);

    const handleDragOver = (event) => {
      event.preventDefault();
    };

    return (
        <div className='UploadForm'>
            <div className='ufContainer'>
                <div className='ufTitle'>
                    <h1>물품 등록</h1>
                </div>
                <div className='ufContents'>
                    <div className='ImageBox'>
                        {mediaFile ? (
                          <div className='Image'>
                            <img src={mediaFile} alt="Media" />
                          </div>
                        ) : (
                          <div className='UploadPrompt'>
                            <div className='Image'>
                              <img src="/img/upload.png" alt="Upload Icon" />
                            </div>
                            <h2>이미지 드래그</h2>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                파일 선택
                              <input id="file-upload" type="file" onChange={handleFileChange}/>
                            </label>
                          </div>
                        )}
                    </div>
                        
                    <div className='upContents'>
                        <div className='ctBox'>
                          <p>Title</p>
                          <input type="text" className="ttarea" placeholder="제목 입력" value={title} onChange={handleTitleChange} />
                        </div>
                        <div className='ctBox'>
                          <p>HashTag</p>
                          <input type="text" className="karea" placeholder="키워드 입력" value={hashtag} onChange={handleHashtagChange} />
                        </div>
                        <div className='ctBox'>
                          <p>Contents</p>
                          <input type="textarea" className="ctarea" placeholder="내용 입력" value={contents} onChange={handleContentsChange} />
                        </div>
                        <div className="CheckBtn">
                          <button type='button' onClick={handleUpload} className='check'>등록하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UploadForm;