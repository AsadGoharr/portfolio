import React from 'react';
import { educationData } from '../constants/education';
import SectionWrapper from '../hoc/SectionWrapper';

const Education = () => {
    return (
        <SectionWrapper>
            <div className="education-section">
                <h2 className="section-title">Education</h2>
                <ul className="education-list">
                    {educationData.map((item, index) => (
                        <li key={index} className="education-item">
                            <h3 className="degree">{item.degree}</h3>
                            <p className="institution">{item.institution}</p>
                            <p className="year">{item.year}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default Education;