import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormLimit from '../FormLimit';
import FileLoader from '../FileLoader';
import TextInput from '../TextInput';
import FilePreview from '../FilePreview';
import File from '../File';
import Button from '../Button';

const Form = (props) => {
  const { createContent, fileModalOpen } = props;

  const MAX_VALUE = 50;
  const [inputValue, setInputValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const counter = inputValue.length + fileList.length * 10;
  const disabled = counter > MAX_VALUE || counter < 1;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!disabled) {
      createContent({ message: inputValue, images: fileList });
      setInputValue('');
      setFileList([]);
    }
  };

  const handleFileAdd = (event) => {
    setFileList(Array.from(event.target.files));
  };

  const handleFileDelete = (name) => {
    const list = fileList.filter((file) => file.name !== name);
    setFileList(list);
  };

  const listOfImages = fileList.map((img) => (
    <File
      key={img.name}
      img={img}
      onDelete={() => handleFileDelete(img.name)}
      onClick={() => fileModalOpen(true, img)}
    />
  ));

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3 className="label">Create new post:</h3>
      <div className="inputs">
        <TextInput
          hasError={counter > MAX_VALUE}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Enter text..."
          type="text"
        />
        <FileLoader onChange={handleFileAdd} />
        {counter > MAX_VALUE && (
          <span className="error__message">
            Exceeded the maximum number of charecters (maximum:
            {MAX_VALUE})
          </span>
        )}
      </div>

      <div className="footer__form">
        <FormLimit value={counter} maxValue={MAX_VALUE} />
        <div className="footer__container">
          <FilePreview>{listOfImages}</FilePreview>
          <Button disabled={disabled} onClick={submitHandler} />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  createContent: PropTypes.func.isRequired,
  fileModalOpen: PropTypes.func.isRequired,
};

export default Form;
