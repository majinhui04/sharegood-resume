import Mock from 'mockjs';
import { sleep } from './util';

const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
};

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://www.gravatar.com/avatar/9e534860526289cf56ece3461ab3578c?s=46&d=identicon',
        name: 'Super Admin',
        nickName: 'Super Admin',
        permission: ['/dashboard/index', '/directive/table/index']
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://www.gravatar.com/avatar/9e534860526289cf56ece3461ab3578c?s=46&d=identicon',
        name: 'Normal Editor',
        nickName: 'Normal Editor',
        permission: ['/dashboard/index', '/color/index', 'dashboard.button1']
    }
};
const List = [];
const count = 50;

const baseContent = '<p>I am testing data, I am testing data.</p>';
const avatar = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3';
const dataList = [];
const limit = 20000;
for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: '@increment',
            createTime: +Mock.Random.date('T'),
            updateTime: +Mock.Random.date('T'),
            nickName: Mock.Random.cname(),
            address: Mock.mock('@county(true)'),
            birthday: Mock.Random.date(),
            account: '@first',
            email: Mock.mock('@EMAIL()'), // 随机生成一个邮箱
            'moblie|1': ['13531544954', '13632250649', '15820292420', '15999905612'], // 在数组中随机找一个
            time: Mock.Random.date('yyyy-MM-dd'),
            note: baseContent,
            sex: Mock.Random.integer(1, 2), // 随机生成一个整数，1/2 ，根据这个来给“男” “女”
            'status|1': ['1', '2', '3'],
            avatar
        })
    );
}

for (let i = 0; i < limit; i++) {
    dataList.push(
        Mock.mock({
            skuCode: '@increment',
            boxCode: +Mock.Random.date('T'),
            codeA: +Mock.Random.date('T'),
            nickName: Mock.Random.cname(),
            address: Mock.mock('@county(true)'),
            birthday: Mock.Random.date(),
            account: '@first',
            email: Mock.mock('@EMAIL()'), // 随机生成一个邮箱
            'moblie|1': ['13531544954', '13632250649', '15820292420', '15999905612'], // 在数组中随机找一个
            time: Mock.Random.date('yyyy-MM-dd'),
            note: baseContent,
            sex: Mock.Random.integer(1, 2), // 随机生成一个整数，1/2 ，根据这个来给“男” “女”
            'status|1': ['1', '2', '3'],
            avatar
        })
    );
}

export default [
    {
        url: '/admin/user/list',
        label: '分页查看会员列表',
        type: 'post',
        response: _ => {
            return {
                code: 10000,
                data: {
                    current: 1,
                    pages: 2,
                    size: 20,
                    total: 24,
                    records: [
                        {
                            bindTime: 1572491109000,
                            device: null,
                            headImg: null,
                            lastLoginTime: 157249110600,
                            level: 1,
                            nickname: '大武哥牛逼了',
                            openid: '12121',
                            phone: '1212',
                            realName: '结算测试1',
                            regTime: 1572491101000,
                            sgUserCode: '15',
                            status: 1,
                            systemVersion: null,
                            unionid: '12121',
                            updateAdmin: 'admin',
                            userCode: '190002',
                            wechatCode: '111',
                            wechatNickname: '大武哥牛逼了',
                            wechatVersion: null
                        },
                        {
                            bindTime: 1569987724000,
                            device: null,
                            headImg: 'https://img.ivsky.com/img/bizhi/pre/201909/25/abominable-001.jpg',
                            lastLoginTime: 1572406921000,
                            level: 2,
                            nickname: 'ccc',
                            openid: '13566667777',
                            phone: '13566667777',
                            realName: '老马',
                            regTime: 1572406917000,
                            sgUserCode: '32323',
                            status: 1,
                            systemVersion: null,
                            unionid: '13566667777',
                            updateAdmin: 'admin',
                            userCode: '190001',
                            wechatCode: '333',
                            wechatNickname: '小红',
                            wechatVersion: null
                        },
                        {
                            bindTime: null,
                            device: null,
                            headImg: null,
                            lastLoginTime: null,
                            level: 1,
                            nickname: 'test',
                            openid: null,
                            phone: '132838595',
                            realName: 'test',
                            regTime: null,
                            sgUserCode: '1511',
                            status: 1,
                            systemVersion: null,
                            unionid: null,
                            updateAdmin: null,
                            userCode: '155201',
                            wechatCode: null,
                            wechatNickname: 'test',
                            wechatVersion: null
                        }
                    ]
                },
                message: 'Success'
            };
        }
    },
    {
        url: '/admin/user/detail',
        label: '会员详情',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    total: List.length,
                    items: List
                }
            };
        }
    },
    {
        url: '/admin/user/{type}/update',
        label: '修改会员信息',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    total: List.length,
                    items: List
                }
            };
        }
    },

    {
        url: '/admin/user/customers',
        label: '客户列表',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    total: List.length,
                    items: List
                }
            };
        }
    },

    {
        url: '/admin/user/levels',
        label: '用户层级列表',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                data: [
                    {
                        levelCode: 'UC03',
                        levelName: '分公司',
                        level: 3,
                        remark: ''
                    },
                    {
                        level: 2,
                        levelCode: 'UC02',
                        levelName: '股东',
                        remark: ''
                    },
                    {
                        level: 1,
                        levelCode: 'UC01',
                        levelName: '专家',
                        remark: ''
                    }
                ],
                message: 'Success'
            };
        }
    },

    {
        label: '商品列表查询',
        url: '/admin/product/list',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    total: List.length,
                    items: List
                }
            };
        }
    },

    {
        url: '/admin/order/list',
        type: 'get',
        label: '订单列表',
        response: _ => {
            return {
                code: 10000,
                message: 'Success',
                data: {
                    records: [
                        {
                            address: '西兴街道101号10楼',
                            area: '99990',
                            auditTime: '2019-11-01 07:39:01',
                            cancelTime: '2019-11-01 07:39:01',
                            city: '铜仁市',
                            closeTime: null,
                            createTime: '2019-11-01 07:18:46',
                            deliveryTime: null,
                            finishTime: null,
                            giftName: null,
                            // orderDetails: [,…]
                            orderNo: 'UC191101151817000001',
                            orderStatus: 4,
                            orderType: null,
                            orderUserCode: '150004',
                            orderUserHead: 'https://img.ivsky.com/img/bizhi/pre/201909/25/abominable-001.jpg',
                            orderUserName: '陈程程',
                            promotionLevel: null,
                            province: '贵州省',
                            pushTime: null,
                            receiver: '张三',
                            receiverPhone: '123000999',
                            reverseTime: 0,
                            skuTotal: 10,
                            street: '4',
                            upgradeUserCode: null,
                            upgradeUserHead: null,
                            upgradeUserName: null,
                            userRemarks: '用户描述',
                            orderDetails: [
                                {
                                    skuCode: 'YXSK000003',
                                    barCode: null,
                                    quantity: 20,
                                    productName: '111111费力罗甜心巧克力，48粒',
                                    skuName: '巧克力,黑色',
                                    skuImgUrl: null,
                                    type: null
                                }
                            ]
                        },
                        {
                            orderNo: 'UC191028112258307000',
                            orderStatus: 8,
                            receiver: '张三',
                            receiverPhone: '123000999',
                            province: '贵州省',
                            city: '铜仁市',
                            area: '99990',
                            street: '4',
                            address: '西兴街道101号10楼',
                            orderType: null,
                            promotionLevel: null,
                            userRemarks: '用户描述',
                            upgradeUserCode: '100000',
                            upgradeUserName: null,
                            upgradeUserHead: null,
                            orderUserCode: '100000',
                            orderUserHead: null,
                            orderUserName: null,
                            pushTime: null,
                            auditTime: '2019-10-28 03:39:38',
                            finishTime: null,
                            cancelTime: '2019-10-28 03:39:38',
                            deliveryTime: null,
                            closeTime: null,
                            createTime: null,
                            orderDetails: [
                                {
                                    skuCode: 'YXSK000001',
                                    barCode: '111111',
                                    quantity: 10,
                                    productName: '2222222五粮液珍藏100年 52度白酒，香甜淳口，源远流长',
                                    skuName: '白酒',
                                    skuImgUrl: null,
                                    type: null
                                }
                            ]
                        },
                        {
                            orderNo: 'UC191028112041306000',
                            orderStatus: 2,
                            receiver: '张三222',
                            receiverPhone: '123000999',
                            province: '贵州省',
                            city: '铜仁市',
                            area: '99990',
                            street: '4',
                            address: '西兴街道101号10楼',
                            orderType: null,
                            promotionLevel: null,
                            userRemarks: '用户描述',
                            upgradeUserCode: '100000',
                            upgradeUserName: null,
                            upgradeUserHead: null,
                            orderUserCode: '100000',
                            orderUserHead: null,
                            orderUserName: null,
                            pushTime: null,
                            auditTime: '2019-10-28 03:28:13',
                            finishTime: null,
                            cancelTime: null,
                            deliveryTime: null,
                            closeTime: null,
                            createTime: null,
                            orderDetails: [
                                {
                                    skuCode: 'YXSK000001',
                                    barCode: '111111',
                                    quantity: 10,
                                    productName: null,
                                    skuName: '女装',
                                    skuImgUrl: null,
                                    type: null
                                }
                            ]
                        }
                    ],
                    total: 3,
                    size: 0,
                    pages: 1,
                    current: 1
                }
            };
        }
    },
    {
        url: '/admin/delivery/order/list',
        label: '发货单列表',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                message: 'Success',
                data: {
                    records: [
                        {
                            deliveryOrderNo: 'UCFH191102182317000004',
                            details: [
                                {
                                    barCode: '111',
                                    productName: '罗晓飞1专用商品',
                                    quantity: 1,
                                    skuCode: 'SKU0000030000',
                                    skuImgUrl: 'https://img.ivsky.com/img/bizhi/pre/201909/25/abominable-001.jpg',
                                    skuName: '白色，M'
                                }
                            ],

                            orderNo: 'UC191031114244000001',
                            orderStatus: 1,
                            orderTime: 1572493539000,
                            pushStatus: 2,
                            receiver: '张三',
                            receiverPhone: '123000999'
                        },
                        {
                            deliveryOrderNo: 'UCFH191102182317000003',
                            details: [
                                {
                                    barCode: '111',
                                    productName: '罗晓飞2专用商品',
                                    quantity: 3,
                                    skuCode: 'SKU0000030000',
                                    skuImgUrl: 'https://img.ivsky.com/img/bizhi/pre/201909/25/abominable-001.jpg',
                                    skuName: '白色，M'
                                }
                            ],
                            orderNo: 'UC191031114244000001',
                            orderStatus: 1,
                            orderTime: 1572493539000,
                            pushStatus: 2,
                            receiver: '张三',
                            receiverPhone: '123000999'
                        },
                        {
                            deliveryOrderNo: 'UCFH191102182317000002',
                            details: [
                                {
                                    barCode: '111',
                                    productName: '罗晓飞3专用商品',
                                    quantity: 3,
                                    skuCode: 'SKU0000030000',
                                    skuImgUrl: 'https://img.ivsky.com/img/bizhi/pre/201909/25/abominable-001.jpg',
                                    skuName: '白色，M'
                                }
                            ],

                            orderNo: 'UC191031114244000001',
                            orderStatus: 1,
                            orderTime: 1572493539000,
                            pushStatus: 2,
                            receiver: '张三',
                            receiverPhone: '123000999'
                        },
                        {
                            deliveryOrderNo: 'UCFH191102182317000001',
                            details: [
                                {
                                    barCode: '111',
                                    productName: '罗晓飞4专用商品',
                                    quantity: 3,
                                    skuCode: 'SKU0000030000',
                                    skuImgUrl: 'https://img.ivsky.com/img/bizhi/pre/201909/25/abominable-001.jpg',
                                    skuName: '白色，M'
                                }
                            ],
                            orderNo: 'UC191031114244000001',
                            orderStatus: 1,
                            orderTime: 1572493539000,
                            pushStatus: 2,
                            receiver: '张三',
                            receiverPhone: '123000999'
                        }
                    ],
                    current: 1,
                    pages: 1,
                    size: 0,
                    total: 4
                }
            };
        }
    },

    {
        label: '防伪码查询',
        url: '/admin/securityCode/manage/query',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: dataList
            };
        }
    },
    //分润商品结算模板分页列表
    {
        label: '分润商品结算模板分页列表',
        url: '/admin/settle/template/list',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    records: [
                        {
                            createTime: 1573030113000,
                            extendInfo: 'deng.c测试模板',
                            id: 1,
                            isDelete: 0,
                            operateId: '001',
                            spuCode: 'test',
                            templateCode: 'test001',
                            templateName: '测试模板',
                            templateType: 0,
                            updateTime: 1573030120000
                        },
                        {
                            createTime: 1573547274000,
                            extendInfo: '通用',
                            id: 2,
                            isDelete: 0,
                            operateId: '',
                            spuCode: '',
                            templateCode: 'test002',
                            templateName: '通用呵呵哒',
                            templateType: 1,
                            updateTime: 1573547662000
                        },
                        {
                            createTime: 1573030113000,
                            extendInfo: 'deng.c测试模板',
                            id: 10,
                            isDelete: 0,
                            operateId: '001',
                            spuCode: '312312',
                            templateCode: 'aaa',
                            templateName: '测试模板',
                            templateType: 0,
                            updateTime: 1573030120000
                        }
                    ]
                },
                total: 9,
                page: 1,
                size: 10,
                current: 1
            };
        }
    },
    {
        label: '分润商品结算单个模板删除',
        url: '/admin/settle/template/delete',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: null
            };
        }
    },
    {
        label: '分润商品结算单个模板展示',
        url: '/admin/settle/template/detail',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    spuCode: 'test',
                    templateCode: 'test001',
                    templateDetails: [
                        {
                            p1: 1,
                            p2: 1.2,
                            saleNum: 20
                        },
                        {
                            p1: 2,
                            p2: 1.21,
                            saleNum: 40
                        }
                    ],
                    templateName: '测试模板',
                    templateType: 0
                }
            };
        }
    },
    {
        label: '分润商品结算单个模板修改',
        url: '/admin/settle/template/update',
        type: 'post',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: null
            };
        }
    },
    {
        label: '账单分页列表',
        url: '/admin/settle/result/list',
        type: 'post',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    records: [
                        {
                            endTime: 1574006400000,
                            id: 1,
                            settleStatus: 0,
                            spuCode: 'test',
                            term: 1,
                            totalPickNum: 700,
                            totalSelfIncome: 3996,
                            totalSupplementNum: 700
                        },
                        {
                            endTime: 1574006400000,
                            id: 2,
                            settleStatus: 0,
                            spuCode: 'test',
                            term: 1,
                            totalPickNum: 700,
                            totalSelfIncome: 3996,
                            totalSupplementNum: 700
                        },
                        {
                            endTime: 1574006400000,
                            id: 3,
                            settleStatus: 0,
                            spuCode: 'test',
                            term: 1,
                            totalPickNum: 700,
                            totalSelfIncome: 3996,
                            totalSupplementNum: 700
                        }
                    ]
                },
                total: 3,
                page: 1,
                size: 10,
                current: 1
            };
        }
    },
    {
        label: '订单详情',
        url: '/admin/order/{orderCode}',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    address: '沙发',
                    area: '惠山区',
                    auditTime: '2019-11-19 21:16:35',
                    cancelTime: null,
                    city: '无锡市',
                    closeTime: null,
                    closeType: null,
                    createTime: '2019-11-19 21:14:34',
                    deliveryTime: null,
                    finishTime: null,
                    giftName: null,
                    orderNo: 'UC20191119211434000001',
                    orderStatus: 4,
                    orderType: 1,
                    orderUserCode: '190001',
                    orderUserHead: 'http://thirdwx.qlogo.cn/mmopen/h5bvldicCQOApibF3mvdPJBMYiaTNic371yIuDn4UEr8ZGwGpP1gdPnpBcxcsuCKC9gGhbC0Xe7MzWOo6AcSg2W5g4obMhVfekich/132',
                    orderUserName: 'MR',
                    promotionLevel: null,
                    province: '江苏省',
                    pushTime: null,
                    receiver: '刘慷',
                    receiverPhone: '18667028576',
                    reverseTime: 0,
                    skuTotal: 100,
                    street: '长安街道',
                    upgradeUserCode: null,
                    upgradeUserHead: null,
                    upgradeUserName: null,
                    userRemarks: '',
                    orderDetails: [
                        {
                            barCode: 'lk0001',
                            packages: [
                                {
                                    companyName: '顺丰',
                                    expressPackCode: '12333',
                                    logisticsNo: '23333333',
                                    quantity: 2
                                }
                            ],
                            productName: '结算商品',
                            quantity: 100,
                            skuCode: 'SKU0000050001',
                            skuImgUrl: 'http://testcdn.juxiang365.cn/ucgoods/5504b34c116a4e4a925822bc69e9057b.jpg',
                            skuName: '黑金',
                            stock: 9900,
                            supplierSkuCode: 'SKU0000050001',
                            type: 1,
                            unit: 3
                        }
                    ]
                }
            };
        }
    },
    {
        label: '物流单号详情',
        url: '/admin/order/logistics/{orderCode}',
        type: 'get',
        response: _ => {
            return {
                code: 10000,
                msg: '请求成功',
                data: {
                    expressNo: 'YT4024505652445',
                    expressName: '物流单号',
                    expressCode: 'yto',
                    expressSite: 'www.yto.net.cn ',
                    expressPhone: '13209906995',
                    deliveryStatus: '已签收',
                    sign: 1,
                    signTime: null,
                    source: 'Third',
                    expressContentVO: [
                        {
                            time: '2019-8-19 19:51:22',
                            content: '客户 签收人: 如有问题联糸张师傅13209906995 已签收 感谢使用圆通速递，期待再次为您服务'
                        },
                        {
                            time: '2019-8-19 10:11:40',
                            content: '【新疆塔城市沙湾县公司】 派件人: 赵斌 派件中 派件员电话18521166138'
                        },
                        {
                            time: '2019-8-19 8:07:41',
                            content: '【新疆塔城市沙湾县公司】 已收入'
                        },
                        {
                            time: '2019-8-18 17:14:12',
                            content: '【新疆乌鲁木齐市】 已发出 下一站 【新疆塔城市沙湾县公司】'
                        },
                        {
                            time: '2019-8-17 22:34:44',
                            content: '【新疆乌鲁木齐市公司】 已打包'
                        },
                        {
                            time: '2019-8-17 22:10:26',
                            content: '【新疆乌鲁木齐市公司】 已收入'
                        },
                        {
                            time: '2019-8-14 21:52:36',
                            content: '【西安转运中心】 已发出 下一站 【新疆乌鲁木齐市公司】'
                        },
                        {
                            time: '2019-8-14 21:48:41',
                            content: '【西安转运中心】 已收入'
                        },
                        {
                            time: '2019-8-13 22:19:25',
                            content: '【长沙转运中心】 已发出 下一站 【西安转运中心】'
                        },
                        {
                            time: '2019-8-13 21:29:39',
                            content: '【长沙转运中心】 已打包'
                        },
                        {
                            time: '2019-8-13 20:48:19',
                            content: '【长沙转运中心】 已收入'
                        },
                        {
                            time: '2019-8-13 11:51:48',
                            content: '【湖南省长沙市天心区金盆岭公司】 已收件'
                        }
                    ]
                }
            };
        }
    },
    //
    {
        url: '/user/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 20 } = config.query;

            let mockList = List.filter(item => {
                return true;
            });

            const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));
            // 模拟延时1.5s
            sleep(1.5 * 1000);
            return {
                code: 0,
                data: {
                    total: mockList.length,
                    items: pageList
                }
            };
        }
    },
    // user login
    {
        url: '/admin/user/login',
        type: 'post',
        response: config => {
            // const {
            //     account
            // } = config.body;
            // const token = tokens[account];
            // mock error
            // if (!token) {
            //     return {
            //         code: 60204,
            //         message: 'Account and password are incorrect'
            //     };
            // }

            return {
                code: 10000,
                data: {
                    adminToken: +new Date(),
                    loginName: 'admin'
                }
            };
        }
    },

    // get user info
    {
        url: '/user/info.*',
        type: 'get',
        response: config => {
            const { token } = config.query;
            const info = users[token];

            // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: 'Login failed, unable to get user details.'
                };
            }

            return {
                code: 0,
                data: info
            };
        }
    },

    // user logout
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 0,
                data: 'success'
            };
        }
    },
    // user save
    {
        url: '/user/save',
        type: 'post',
        response: _ => {
            return {
                code: 0,
                data: 'success'
            };
        }
    },
    // user
    {
        url: '/user/ownDetails',
        type: 'post',
        response: _ => {
            return {
                code: 0,
                data: {
                    nickName: 'damon',
                    avatar: 'https://www.gravatar.com/avatar/9e534860526289cf56ece3461ab3578c?s=46&d=identicon'
                }
            };
        }
    }
];
