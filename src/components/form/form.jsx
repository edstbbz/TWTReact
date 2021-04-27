import React, { useEffect, useState, Fragment } from 'react';
import Submit from '../button';
import Counter from '../counter';
import FileLoader from '../fileloader';
import TextInput from '../textinput';
import FilePreview from '../filepreview';
import Image from '../file';
import Modal from '../modal';

const Form = () => {
  const MAX_VALUE = 50;
  const [inputValue, setInputValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const [error, setError] = useState();
  const [disbaled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    buttonDisabledHandler(inputValue, fileList);
    addErrorClass(inputValue, fileList);
  }, [inputValue, fileList]);

  const buttonDisabledHandler = (text, files) => {
    const counter = text.length + files.length;
    counter > MAX_VALUE || counter < 1 ? setDisabled(true) : setDisabled(false);
  };

  const addErrorClass = (text, files) => {
    text.length + files.length > MAX_VALUE ? setError('error') : setError('');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const content = { message: inputValue, images: fileList };
    console.log(content);
    setInputValue('');
    setFileList([]);
  };

  const fileAdd = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
    setFileList(Array.from(event.target.files));
  };

  const fileDelete = (index) => {
    const list = [...fileList];
    list.splice(index, 1);
    setFileList(list);
  };

  const fileModal = (bool) => {
    setIsOpen(bool);
  };

  const file = fileList.map((img, index) => {
    return (
      <Fragment key={Math.random()}>
        <Image
          img={img}
          onDelete={() => fileDelete(index)}
          onClick={() => fileModal(true)}
        />
        <Modal isOpen={isOpen} onClose={() => fileModal(false)}>
          <img src={URL.createObjectURL(img)} alt={img} />
        </Modal>
      </Fragment>
    );
  });

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3 className="label">Create new post:</h3>
      <div className="_inputs">
        <TextInput
          className={error}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <div className="files__wrap">
          <FileLoader onChange={fileAdd} />
        </div>
      </div>

      <div className="button__wrap">
        <Counter
          value={inputValue.length + fileList.length * 10}
          maxValue={MAX_VALUE}
        />
        <div className="btns">
          <FilePreview file={fileList.length}>{file}</FilePreview>
          <Submit disabled={disbaled} />
        </div>
      </div>
    </form>
  );
};

export default Form;
