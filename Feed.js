import React , {useEffect, useState} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import './Feed.css';
import InputOptions from './inputOptions';
import { db } from './firebase';
import Post from './Post';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            name: 'Test',
            description:'this is test',
            message:input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
            </div>

        </div>
        {posts.map(({id, data: {name, description, message, photoUrl} }) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
        <Post name= 'test'  description = 'this is a test' message='why' />
    </div>
  )
}

export default Feed