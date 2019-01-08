import JsonPlaceholder from '../apis/JsonPlaceholer';
//Action Creator

export const fetchPosts =  () => async dispatch => {
    const response =  await JsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
