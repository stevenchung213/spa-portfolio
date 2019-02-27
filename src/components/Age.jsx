import React from 'react';

const Age = (props) => {
  return (
    <div id='age-container'>
      <form>
        <label>
          Name:
          <input type='text' name='guestName' />
        </label>
          18+
          <input type='button' value='Yes' name='ofAge' onClick={props.onClick} />
          <input type='button' value='No' name='notOfAge' onClick={props.onClick} />
      </form>
    </div>
  );
};

export default Age;