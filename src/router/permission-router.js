const modules = {};
const routes = [];
const requireContext = require.context('@/router/modules', true, /\.js/);
const requireAll = context => {
    context.keys().forEach(key => {
        modules[key] = requireContext(key).default || requireContext(key);
    });
};

requireAll(requireContext);
Object.values(modules).forEach(item => {
    routes.push(item);
});

export default routes;
