import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import InputOptions from './inputOptions';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlined from '@material-ui/icons/ChatOutlined'
import ShareOutlined from '@material-ui/icons/ShareOutlined'
import SendOutlined from '@material-ui/icons/SendOutlined'

function Post({ name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__buttons'>
          <InputOptions Icon={ThumbUpOutlined} title='Like' color='gray' />
          <InputOptions Icon={ChatOutlined} title='Chat' color='gray' />
          <InputOptions Icon={ShareOutlined} title='Share' color='gray' />
          <InputOptions Icon={SendOutlined} title='Send' color='gray' />
        </div>
    </div>
  )
}

export default Post