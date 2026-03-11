import React from 'react';

const withSectionWrapper = (WrappedComponent) => {
    return function SectionWrapper(props) {
        return (
            <div className="section-wrapper">
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withSectionWrapper;