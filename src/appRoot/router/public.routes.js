import Home from '@/module/Home/Home.vue';
import Company from '@/module/Company/Company.vue';
import Blog from '@/module/Blog/Blog.vue';
import ClipBoard from '@/module/ClipBoard/ClipBoard.vue';

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
    },
  },
  {
    path: '/blog',
    name: 'blog',
    components: {
      default: Blog,
    },
  },
  {
    path: '/company',
    name: 'Company',
    components: {
      default: Company,
    },
  },
  {
    path: '/clipboard',
    name: 'ClipBoard',
    components: {
      default: ClipBoard,
    },
  },
  // {
  //   path: '*',
  //   redirect: '/',
  // },
];
