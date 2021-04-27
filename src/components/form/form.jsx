import React, { useState, Fragment } from 'react';
import Counter from '../counter';
import FileLoader from '../fileloader';
import TextInput from '../textinput';
import FilePreview from '../filepreview';
import Image from '../file';
import Modal from '../modal';
import Message from '../message';
import Button from '../button';

const Form = () => {
  const MAX_VALUE = 50;
  const [inputValue, setInputValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [fileForModal, setFileForModal] = useState();
  const counter = inputValue.length + fileList.length * 10;
  const disabled = counter > MAX_VALUE || counter < 1 ? true : false;
  const errorClass = counter > MAX_VALUE ? 'error' : '';

  const submitHandler = (event) => {
    event.preventDefault();
    const content = { message: inputValue, images: fileList };
    console.log(content);
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

  const fileModalOpen = (value, img) => {
    const image = fileList.filter((file) => file === img);
    setFileForModal(image)
    setIsOpenModal(value);
  };

  const listOfImages = fileList.map((img) => {
    return (
      <Fragment key={img.name}>
        <Image
          img={img}
          onDelete={() => handleFileDelete(img.name)}
          onClick={() => fileModalOpen(true, img)}
        />
      </Fragment>
    );
  });

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3 className="label">Create new post:</h3>
      <div className="_inputs">
        <TextInput
          className={errorClass}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Enter text..."
        />
        {counter > MAX_VALUE && (
          <Message className="error__message">
            Exceeded the maximum number of charecters (maximum: {MAX_VALUE})
          </Message>
        )}
        <FileLoader onChange={handleFileAdd} />
      </div>

      <div className="button__wrap">
        <Counter value={counter} maxValue={MAX_VALUE} />
        <div className="btns">
          <FilePreview>{listOfImages}</FilePreview>
          <Button disabled={disabled} />
        </div>
      </div>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={() => fileModalOpen(false)}>
          <img src={fileForModal} alt={fileForModal} />
        </Modal>
      )}
    </form>
  );
};

export default Form;
