import axios from 'axios';

/**
 Actions are similar to mutations, the differences being that:
    Instead of mutating the state, actions commit mutations.
    Actions can contain arbitrary asynchronous operations.
    in short for API calls
 */

const actions = {
  getBlogRequest: ({ commit }) => {
    commit('getBlogsLoading', '');

    setTimeout(() => {
      axios
        .get('/posts/1')
        .then(result => {
          console.log(result);
          commit('getBlogsSuccess', result.data);
        })
        .catch(error => {
          console.log(error);
          commit('getBlogsError', error);
        });
    }, 4000);
  },
};

export default actions;
