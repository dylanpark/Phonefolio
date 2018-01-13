import React from 'react';

export default class PhotoBody extends React.Component {
  constructor() {
    super();
    this.launchModal = this.launchModal.bind(this);
  }

  launchModal(i, images) {
    this.props.toggleModal({
      active: true,
      data: {
        type: 'array',
        contentType: 'image',
        content: images,
        index: i
      }
    });
  }

  render() {
    const { toggleModal } = this.props;
    const imgFileArray = Array.from(Array(4), (_, i) => {
      const ext = (i === 3 ? '.gif' : '.png');
      return 'src/page/image/traderev_' + i + ext;
    });

    const images = imgFileArray.map((_, i) => {
      const className = 'photo-';
      return <img key={i}
                  src={imgFileArray[i]} 
                  class={'view-traderev-photo '+className+i}
                  onDragStart={(e) => {e.preventDefault();}}
                  onClick={(e) => {
                    e.preventDefault();
                    this.launchModal(i, imgFileArray); 
                  }}/>
    });

    return (
      <div class='view-traderev-photo-container'>
        {images}
      </div>
    )
  }
}
