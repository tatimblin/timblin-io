export default function(context) {
    // tells the store to update the page
    context.store.commit('updatePage', context.route.name);
    context.store.commit('updateIndex', context.route.name);
}