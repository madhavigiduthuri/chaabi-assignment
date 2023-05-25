import React from 'react';

class StyledNthCharacter extends React.Component {
  render() {
    const { text, nthCharacter, className } = this.props;
    const styledText = (
      <>
        {text.slice(0, nthCharacter)}
        <span className={className}>
          {text.charAt(nthCharacter)}
        </span>
        {text.slice(nthCharacter + 1)}
      </>
    );

    return <p className="alphabets">{styledText}</p>;
  }
}

export default StyledNthCharacter;