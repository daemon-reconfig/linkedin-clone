import React, { Component } from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

export class Sidebar extends Component {
  render() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
      <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxLeHBsb3J1LWZLZWR8MXX8fGVufDB8fHw3D&w=1000&q=80" alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>test</h2>
            <h4>test</h4>
        </div>
        <div className="sidebar__stats">
            <div className='sidebar__stat'>
                <p>Who viewed view</p>
                <p className="sidebar__statNumber"></p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post </p>
                <p className="sidebar__statNumber"></p>
            </div>
            
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
      </div>
    )
  }
}


export default Sidebar