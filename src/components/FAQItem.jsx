import React, { useState } from 'react';
import './FAQItem.css';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage visibility of the answer

  const toggleOpen = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggleOpen} aria-expanded={isOpen}>
        {question}
        {/* Optional: Add an icon to indicate expand/collapse state */}
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          {/* Render answer content using dangerouslySetInnerHTML to allow HTML */}
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
}

export default FAQItem;