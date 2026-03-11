import React from 'react';

const SectionWrapper = (Component, idName) => {
  return function WrappedComponent(props) {
    return (
      <section id={idName} className="section-wrapper">
        <div className="section-content">
          <Component {...props} />
        </div>
      </section>
    );
  };
};

export default SectionWrapper;