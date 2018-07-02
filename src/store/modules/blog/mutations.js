const mutations = {
  getBlogsLoading(state) {
    console.log('loading');
    state.loading = true;
  },
  getBlogsSuccess(state, blogs) {
    state.blogs = blogs;
    state.loading = false;
  },
  getBlogsError(state, error) {
    state.blogs = [];
    state.loading = false;
    state.error = error;
  },
};

export default mutations;
