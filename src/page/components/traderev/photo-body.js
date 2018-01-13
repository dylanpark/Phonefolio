import React from 'react';

export default class PhotoBody extends React.Component {
  constructor() {
    super();
    this.launchModal = this.launchModal.bind(this);
  }

  launchModal(i, ext) {
    this.props.toggleModal({
      active: true,
      data: {
        type: 'image',
        content: 'src/page/image/traderev_' + i + ext
      }
    });
  }

  render() {
    const { toggleModal } = this.props;

    const images = Array.from(Array(4), (_, i) => {
      const imagePath = 'src/page/image/traderev_';
      const extension = i === 3 ? '.gif' : '.png';
      const className = 'photo-';
      return <img key={i}
                  src={imagePath + i + extension} 
                  class={'view-traderev-photo '+className+i}
                  onDragStart={(e) => {e.preventDefault();}}
                  onClick={(e) => {
                    e.preventDefault();
                    this.launchModal(i, extension); 
                  }}/>
    });

    return (
      <div class='view-traderev-photo-container'>
        {images}
      </div>
    )
  }
}
