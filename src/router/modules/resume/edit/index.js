const ResumeEdit = () => import(/* webpackChunkName: "ResumeEdit" */ '@/views/resume/edit');
export default {
    path: '/resume/edit',
    name: 'ResumeEdit',
    component: ResumeEdit,
    meta: {
    title: '编辑',
    noAuth: false,
    keepAlive: false
    }
};