import axios from 'axios';

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
