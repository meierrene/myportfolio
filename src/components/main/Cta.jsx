import CustomButton from '../UI/CustomButton';
import './Cta.css';
import React, { useRef } from 'react';

const Cta = () => {
  const title = useRef();
  const content = useRef();

  const submitHandler = e => {
    e.preventDefault();

    window.open(
      `mailto:renemeier.de@gmail.com?&subject=${title.current.value}&body=${content.current.value}`
    );

    title.current.value = '';
    content.current.value = '';
  };

  return (
    <div className="cta-container">
      <h2 className="h2-title">Contact me</h2>
      <form className="cta-form" onSubmit={submitHandler}>
        <input
          required
          className="cta-box subject"
          type="text"
          placeholder="Subject"
          ref={title}
        />
        <textarea
          required
          className="cta-box content"
          rows="5"
          placeholder="Write your message here..."
          ref={content}
        ></textarea>
        <CustomButton type="submit">Send to me!</CustomButton>
      </form>
    </div>
  );
};

export default Cta;
