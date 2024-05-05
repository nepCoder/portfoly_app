'use client';
import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [submitting, setSubmitting] =  useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault()

    // Add form validation here
    if (!title || !content || !thumbnail) {
      alert('Please fill out all fields.')
      return
    }

    // handle form submission here
    setSubmitting(true);
    const newPost = {
        title: 'Your Title',
        content: 'Your Content',
        // thumbnail: 'Your Thumbnail URL',
        instance_id: 1
    };
    fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
    })
    .then(response => response.json())
    .then(res => {
        // setData(res.data);
        console.log('created!');
        setSubmitting(false);
    })
    .catch((error) => {
        console.error('Error:', error);
        setSubmitting(false);
    });
    console.log({ title, content, thumbnail })
  }

  return (
      <form onSubmit={handleSubmit} className='form'>
        {/* blog title */}
        <TextField
          label="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='form-input'
          required
        />

        {/* content */}
        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          multiline
          className='form-input'
          rows={4}
        />

        {/* thumbnail image */}
        <TextField
          label="Thumbnail Image URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className='form-input'
          required
        />

        <Button variant="outlined" color="secondary" className='form-input'>
          Preview
        </Button>
        <Button variant="outlined" color="warning" className='form-input'>
          Reset
        </Button>
        <Button type="submit" variant="outlined" color="primary" className='form-input'>
          {submitting ? <CircularProgress/> :'Save'}
        </Button>
      </form>
  )
}

export default BlogForm
