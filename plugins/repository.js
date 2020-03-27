import createRepository from '~/api/repository'
export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('animeRepository', repositoryWithAxios('/anime'))
}
