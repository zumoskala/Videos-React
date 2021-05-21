import axios from 'axios';

const KEY = 'AIzaSyBjhTlNO-pChz7iYgPgMmoq-CLNtuMSjsE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
