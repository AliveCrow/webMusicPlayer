import React, { Component } from 'react';



class AreaList extends Component {
  constructor(props) {
    super(props);
  }

  area(item, index) {
    this.props.setArea(item, index)
  }

  render() {
    return (
      <div className="area-list">
        <ul>
          {
            this.props.areaList.map((item, index) => (
              <li onClick={() => this.area(item, index)} key={item.type} className={this.props.currentIndex === index ? 'li-active' : ''} >{item.lan}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AreaList;