const URL = 'https://pixabay.com/api/';
const KEY = '35897620-7cfc279652407564e15bd20b2';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`
  );
  return await response.json();
};

export default fetchImages;
