const URL = 'https://pixabay.com/api/videos/';
const KEY = '35897620-7cfc279652407564e15bd20b2';
const FILTER = '&order=popular&per_page=12&video_type=film';

const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`
  );
  return await response.json();
};

export default fetchImages;
