import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classname';
import './Title.css';

const Title = (props) => {
  const classNames = cn(
    'Title',
    props.className,
    { 'TitleVariant2': props.variant2 },
    { 'TitleVariant3': props.variant3 },
    { 'TitleVariant4': props.variant4 },
    { 'TitleVariant5': props.variant5 },
  );

  return (
    <div className={classNames}>
      {props.count &&
       <b className="TitleCount">
         {props.count}
       </b>
      }
      <h4 className="TitleTitle">
        {props.children}
      </h4>
    </div>
  );
};

Title.propTypes = {
  variant2: PropTypes.bool,
  variant3: PropTypes.bool,
  variant4: PropTypes.bool,
  variant5: PropTypes.bool,
  className: PropTypes.string,
  count: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Title;
