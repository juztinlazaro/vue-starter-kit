/**
 * Sometimes we may need to compute derived state based on store state.
  * example
    * for  filtering
    * for sorting
    * computing
*/
const getters = {
  blogModifyTitle: state => {
    return `MODIFIED title ${state.blogs.title}`
  },
};

export default getters;
