import Loadable from 'components/Loadable'

export default Loadable({
  loader: () => import('./Phone_list'),
})