type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<TComment[] | undefined> => {
  try {
    const comments: TComment[] = await fetch(url).then(response => response.json());

    return comments;
  } catch (e) {
    console.log('Error', e);
  }
}

getData(COMMENTS_URL)
  .then(data => {
    if (data) {
      data.forEach(({ id, email }) => console.log(`ID: ${id}, Email: ${email}`));
    }
  });