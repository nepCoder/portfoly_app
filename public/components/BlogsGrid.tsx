'use client'
import { useEffect, useState } from 'react';
import AppLoader from './AppLoader';
import { Grid } from '@mui/material';
import PostCard from './PostCard';

interface BlogPost {
    id: number,
    title: string,
    publishedDate: Date
}

export default function BlogsGrid() {
    const [data, setData] = useState<BlogPost[]>()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/api/posts')
            .then(response => response.json())
            .then(res => setData(res.data));
    }, [])


    useEffect(() => {
        data && setLoading(false);
    }, [data]);

    return loading === true ? <AppLoader />
        : <Grid container spacing={2} className='w-full h-full p-2 justify-start overflow-y-auto'>
            {data && data.length > 0 ? data.map((post, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <PostCard
                        title={post.title}
                        subheader={post.publishedDate ? post.publishedDate.toString() : null}
                    />
                </Grid>
            ))
                : <Grid item xs={12}>No Posts Found!</Grid>}
        </Grid>
}