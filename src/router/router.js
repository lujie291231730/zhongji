export const demo = {
  path: '/',
  name: 'App',
  redirect: '/first',
  component: () => import ('@/components/HelloWorld.vue'),
  children: [
    {
      path: '/first',
      name: 'first',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/first.vue'),
    },
  ]
}
export const routes = [
  demo,
];
export default routes;