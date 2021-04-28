import React, { useState, Fragment } from 'react';
import FormLimit from '../FormLimit';
import FileLoader from '../Fileloader';
import TextInput from '../Textinput';
import FilePreview from '../Filepreview';
import Image from '../File';
import Modal from '../Modal';
import Button from '../Button';

const Form = () => {
  const MAX_VALUE = 50;
  const [inputValue, setInputValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileForModal, setFileForModal] = useState();
  const counter = inputValue.length + fileList.length * 10;
  const disabled = counter > MAX_VALUE || counter < 1;

  const submitHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line
    console.log({ message: inputValue, images: fileList });
    setInputValue('');
    setFileList([]);
  };

  const handleFileAdd = (event) => {
    setFileList(Array.from(event.target.files));
  };

  const handleFileDelete = (name) => {
    const list = fileList.filter((file) => file.name !== name);
    setFileList(list);
  };

  const fileModalOpen = (value, index) => {
    const image = fileList[index];
    setFileForModal(image);
    setIsModalOpen(value);
  };

  const listOfImages = fileList.map((img, index) => (
    <Fragment key={img.name}>
      <Image
        img={img}
        onDelete={() => handleFileDelete(img.name)}
        onClick={() => fileModalOpen(true, index)}
      />
    </Fragment>
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
          <Button disabled={disabled} />
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => fileModalOpen(false)}>
          <img src={URL.createObjectURL(fileForModal)} alt={fileForModal} />
        </Modal>
      )}
    </form>
  );
};

export default Form;
