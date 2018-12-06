import Mock from 'mockjs'
Mock.setup({
    // timeout: 6000
})

// ([\w|\?\S*]+)
// 用户登录
Mock.mock(/Login/, 'post', {
    "Code": 200
})

//获取用户信息
Mock.mock(/GetUserInfo/, 'get', {
    "Code": 200,
    "Data": {
        "Role": "Dealer",
        "UserName": "系统管理员"
    }
})

// 订单列表
Mock.mock(/GetOrderList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 20,
        "Orders": [
            {
                "OrderID": 122121,
                "CreateDate": "2018-10-19 10:23:31",
                "SubmitDate": "2018-10-19 10:23:31",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N88888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModelName": "520Li",
                "DealerName": "北京华德宝",
                "InsurerName": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "Repair_CurrentPrice_PCT": 24.7,
                "SparePartCostTotal": 19000,
                "Part_Repair_PCT": 80.9,
                "StatusCode": 201,
                "StatusName": "待提交"
            },
            {
                "OrderID": 122122,
                "CreateDate": "2018-10-19 10:23:31",
                "SubmitDate": "2018-10-19 10:23:31",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N88888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModelName": "520Li",
                "DealerName": "北京华德宝",
                "InsurerName": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "Repair_CurrentPrice_PCT": 24.7,
                "SparePartCostTotal": 19000,
                "Part_Repair_PCT": 80.9,
                "StatusCode": 202,
                "StatusName": "待区域经理审批"
            }

        ]
    }
})

// 获取订单详细信息
Mock.mock(/GetOrderInfo([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "OrderID": 722622,
        "MyClaimID": 122121,
        "CeateDate": "2018-10-19 10:23:31",
        "SubmitDate": "2018-10-19 10:23:31",
        "ReferenceNumber": "DAT-20181019152745251",
        "VehicleOwner": "张三",
        "PlateNumber": "京N88888",
        "VIN": "LBVPZ1100ASD77412",
        "DATECode": "011300430200002",
        "FZA": 1,
        "HST": 130,
        "HT": 43,
        "UT": 20,
        "SubModelID": 12,
        "SubModelName": "520Li",
        "VehicleMadeCountry": "CN",
        "VehicleFirstRegDate": "2017-10-12",
        "VehicleAge": 18,
        "DealerID": 23,
        "DealerName": "中国人保",
        "RegionID": "100004",
        "RegionName": "北区",
        "ProvinceID": "110000",
        "ProvinceName": "北京",
        "CityID": "110100",
        "CityName": "北京",
        "InsurerID": 23,
        "InsurerName": "中国人保",
        "InsurerContactPerson": "李四",
        "InsuranceNumber": "Dfaas12892182",
        "AccidentBrief": "双方事故，宝马全责，宝马右侧受损",
        "VehicleMSRP": 128000,
        "VehicleCurrentPrice": 95000,
        "RepairCostTotal": 23500,
        "Repair_CurrentPrice_PCT": 24.7,
        "SparePartCostTotal": 19000,
        "Part_Repair_PCT": 80.9,
        "LaborCostTotal": 4500,
        "InsuredAmount": 23500,
        "IsManufacturerPaint": true,
        "HasAdditionalLabor": false,
        "CaseStatus": "自店",
        "IsCustomerChurned": false,
        "ChurnTo": "",
        "ChurnReason": "",
        "RetentionActions": "",
        "StatusCode": 201,
        "Status": "待提交",
        "SpareParts": [{
                "ID": 3212,
                "DVN": 42110,
                "PartNumber": "41217182570",
                "PartName": "左后翼子板",
                "Price": 600,
                "Quantity": 1,
                "TotalPrice": 600,
                "IsOrdered": true,
                "LogisticsCmt": "",
                "BMWApprovalCmt": ""
            },
            {
                "ID": 3213,
                "DVN": 47151,
                "PartNumber": "51117293022",
                "PartName": "前部保险杠",
                "Price": 6580,
                "Quantity": 1,
                "TotalPrice": 6580,
                "IsOrdered": true,
                "LogisticsCmt": "",
                "BMWApprovalCmt": ""
            },
            {
                "ID": 3214,
                "DVN": 42725,
                "PartNumber": "83190301421",
                "PartName": "左前门",
                "Price": 600,
                "Quantity": 1,
                "TotalPrice": 600,
                "IsOrdered": false,
                "LogisticsCmt": "",
                "BMWApprovalCmt": ""
            }
        ],
        "Attachments": [{
                "FileName": "TestPic1.PNG",
                "DownloadFileName": "/static/img/test.jpg",
                "FileSize": 6000,
                "UploadDate": "2018-10-19 14:23:38"
            },
            {
                "FileName": "TestPic2.pdf",
                "DownloadFileName": "92f9b43b-4f2b-4b69-98e9-84d23ae38ae2_TestPic2.pdf",
                "FileSize": 6000,
                "UploadDate": "2018-10-19 14:27:38"
            }
        ],
        "ApplicationLogs": [{
                "OperationDate": "2018-10-19 13:23:38",
                "Operator": "张三",
                "Operation": "经销商提交申请",
                "Comments": ""
            },
            {
                "OperationDate": "2018-10-19 14:23:38",
                "Operator": "李四",
                "Operation": "区域经理审批通过",
                "Comments": "同意"
            }
        ]
    }

})

//区域经理-获取经销商审批策略列表
Mock.mock(/GetDealerPolicyList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 120,
        "Dealers": [{
                "DealerID": 122121,
                "CBU": "36133",
                "CKD": "36131",
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "DealerGroup": "北京经销商集团",
                "ApproveMethod": "ManualApprove"
            },
            {
                "DealerID": 122122,
                "CBU": "36153",
                "CKD": "36161",
                "DealerName": "DAT中国",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "DealerGroup": "",
                "ApproveMethod": "AutoApprove"
            }

        ]
    }
})

//导入定损单信息
Mock.mock(/ImportOrderInfo/, 'post', {
    "Code": 200,
    "Data": {
        "ContractID": 122121,
        "ReferenceNumber": "DAT-20181019152745251",
        "VehicleOwner": "张三",
        "PlateNumber": "京N88888",
        "VIN": "LBVPZ1100ASD77412",
        "DATECode": "011300430200002",
        "FZA": 1,
        "HST": 130,
        "HT": 43,
        "UT": 20,
        "SubModelID": 12,
        "SubModelName": "xDrive35d",
        "VehicleMadeCountry": "CN",
        "VehicleFirstRegDate": "2017-10-12",
        "VehicleAge": 18,
        "InsurerID": 23,
        "InsurerName": "中国人保",
        "InsurerContactPerson": "",
        "InsuranceNumber": "Dfaas12892182",
        "AccidentBrief": "双方事故，宝马全责，宝马右侧受损",
        "VehicleMSRP": 128000,
        "VehicleCurrentPrice": 95000,
        "RepairCostTotal": 23500,
        "Repair_CurrentPrice_PCT":24.7,
        "SparePartCostTotal": 19000,
        "Part_Repair_PCT":80.9,
        "LaborCostTotal": 4500,
        "InsuredAmount": 23500,
        "IsManufacturerPaint": true,
        "HasAdditionalLabor": false,
        "SpareParts": [{
                "PartNumber": "41217182570",
                "PartName": "左后翼子板",
                "Price": 600,
                "Quantity": 1,
                "TotalPrice": 600
            },
            {
                "PartNumber": "83190301421",
                "PartName": "左前门",
                "Price": 600,
                "Quantity": 1,
                "TotalPrice": 600
            }
        ]
    }
})

//获取系统消息列表
Mock.mock(/GetSysMessageList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 120,
        "Messages": [{
                "ID": 23,
                "MessageContent": "这是一条测试消息。",
                "PublishDate": "2018-10-19 14:23:38"
            },
            {
                "ID": 22,
                "MessageContent": "这是一条测试消息。",
                "PublishDate": "2018-09-19 14:23:38"
            }
        ]
    }

})


//获取系统消息
Mock.mock(/GetSysMessage([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "ID": 23,
        "MessageContent": "这是一条用于测试的系统消息。",
        "PublishDate": "2018-10-21 15:30:27"
    }

})

//订单创建、修改
Mock.mock(/SaveOrder/, 'post', {
    "Code": 200,
    "OrderID": 2511
})

//订单提交
Mock.mock(/SubmitOrder([\w|\?\S*]+)/, 'get', {
    "Code": 200
})

//订单删除
Mock.mock(/DeleteOrder([\w|\?\S*]+)/, 'get', {
    "Code": 200
})

//区域经理-审批
Mock.mock(/RMApproveOrder/, 'post', {
    "Code": 200
})

//BMW-审批
Mock.mock(/BMWApproveOrder/, 'post', {
    "Code": 200
})

// 区域经理-设置经销商审批策略
Mock.mock(/SetDealerApprovePolicy/, 'post', {
    "Code": 200
})

//BMW-获取经销商列表
Mock.mock(/GetDealerList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 120,
        "Dealers": [{
                "DealerID": 122121,
                "CBU": "36133",
                "CKD": "36131",
                "ShortName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "DealerGroup": "北京经销商集团",
                "StatusCode": 101,
                "StatusName": "启用"
            },
            {
                "DealerID": 122122,
                "CBU": "36153",
                "CKD": "36161",
                "ShortName": "DAT中国",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "DealerGroup": "",
                "StatusCode": 101,
                "StatusName": "启用"
            }

        ]
    }
})

// BMW-经销商状态修改
Mock.mock(/ChangeDealerStatus/, 'post', {
    "Code": 200,
})

//BMW-获取经销商详细信息
Mock.mock(/GetDealerInfo([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "DealerID": 122122,
        "CustomerNumber": "3550002",
        "CBU": "36153",
        "CKD": "36161",
        "FullName": "DAT中国有限公司",
        "ShortName": "DAT中国",
        "RegionID": 100001,
        "RegionName": "北区",
        "ProvinceID": 370000,
        "ProvinceName": "北京",
        "CityID": 370100,
        "CityName": "北京",
        "DealerGroup": "88888",
        "Status": 101,
        "LoginName": "Zhangsan",
        "MailBox": "Test@Test.com"
    }
})

//BMW-获取区域经理列表
Mock.mock(/GetRMList/, 'get', {
    "Code": 200,
    "Data": {
        "TotalNumber": 5,
        "RegionManagers": [{
                "ID": 15,
                "RegionID": "100001",
                "RegionName": "东区",
                "Name": "张无忌",
                "LoginName": "zhangwuji",
                "MailBox": "Test@Test.com",
                "Mobile": "13900000000",
                "StatusCode": 101,
                "StatusName": "启用"
            },
            {
                "ID": 16,
                "RegionID": "100002",
                "RegionName": "南区",
                "Name": "乔峰",
                "LoginName": "qiaofeng",
                "MailBox": "Test@Test.com",
                "Mobile": "13900000000",
                "StatusCode": 101,
                "StatusName": "启用"
            }
        ]
    }
})

//BMW-区域经理状态修改
Mock.mock(/ChangeRMStatus/, 'post', {
    "Code": 200,
})

//BMW-获取区域经理详细信息
Mock.mock(/GetRMInfo([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "ID": 2,
        "RegionID": "100001",
        "RegionName": "东区",
        "Name": "张无忌",
        "LoginName": "zhangwuji",
        "MailBox": "Test@Test.com",
        "Mobile": "13900000000",
        "Status": 101
    }
})

//BMW-新建/修改经销商
Mock.mock(/CreateOrUpdateDealer/, 'post', {
    "Code": 200
})

//BMW-修改区域经理
Mock.mock(/UpdateRM/, 'post', {
    "Code": 200
})

//BMW-不可订货配件清单获取
Mock.mock(/GetUnOrderablePartList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 120,
        "SpareParts": [{
                "ID": 1021,
                "PartNumber": "83190301639",
                "PartName": "螺栓",
                "Price": 2.56
            },
            {
                "ID": 1221,
                "PartNumber": "83422409985",
                "PartName": "密封条",
                "Price": 182.91
            }
        ]
    }

})

//BMW-获取邮件地址列表
Mock.mock(/GetMailAddressList/, 'get', {
    "Code": 200,
    "Data": {
        "TotalNumber": 2,
        "MailAddresses": [{
                "MailBoxCode": "BodyPaint",
                "MailBoxName": "宝马钣喷业务组",
                "MailBox": "body-paint@list.bmw.com",
                "StatusCode": 101,
                "StatusName": "启用"
            },
            {
                "MailBoxCode": "Logistics",
                "MailBoxName": "宝马物流部",
                "MailBox": "logistics@bmw.com",
                "StatusCode": 102,
                "StatusName": "停用"
            }
        ]
    }

})

//BMW-邮件地址状态修改
Mock.mock(/ChangeMailAddressStatus/, 'post', {
    "Code": 300,
    "Message": "错误信息"
})

//BMW-获取邮件地址详细信息
Mock.mock(/GetMailAddressInfo([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "MailBoxCode": "BodyPaint",
        "MailBoxName": "宝马钣喷业务组",
        "MailBox": "body-paint@list.bmw.com",
        "StatusCode": 101,
        "StatusName": "启用"
    }
})

//BMW-邮件地址修改
Mock.mock(/UpdateMailAddress/, 'post', {
    "Code": 200
})

//BMW-新建系统消息
Mock.mock(/CreateSysMessage/, 'post', {
    "Code": 200
})

//BMW-删除系统消息
Mock.mock(/DeleteSysMessage/, 'post', {
    "Code": 200
})

//用户密码修改
Mock.mock(/ChangePassword/, 'post', {
    "Code": 200
})

//退出登录
Mock.mock(/Logout/, 'get', {
    "Code": 200
})

//获取区域省份城市列表
Mock.mock(/GetRegionProvCityList/, 'get', {
    "Code": 200,
    "Data": {
        "Regions": [{
                "ID": 100001,
                "Name": "东区",
                "Provinces": [{
                        "ID": 370000,
                        "Name": "山东",
                        "Cities": [{
                                "ID": 370100,
                                "Name": "济南"
                            },
                            {
                                "ID": 370200,
                                "Name": "青岛"
                            },
                            {
                                "ID": 370600,
                                "Name": "烟台"
                            }
                        ]
                    },
                    {
                        "ID": 320000,
                        "Name": "江苏",
                        "Cities": [{
                                "ID": 320100,
                                "Name": "南京"
                            },
                            {
                                "ID": 320500,
                                "Name": "苏州"
                            },
                            {
                                "ID": 320200,
                                "Name": "无锡"
                            }
                        ]
                    }
                ]
            },
            {
                "ID": 100002,
                "Name": "南区",
                "Provinces": [{
                        "ID": 430000,
                        "Name": "湖南",
                        "Cities": [{
                                "ID": 430100,
                                "Name": "长沙"
                            },
                            {
                                "ID": 430400,
                                "Name": "衡阳"
                            },
                            {
                                "ID": 430200,
                                "Name": "株洲"
                            }
                        ]
                    },
                    {
                        "ID": 440000,
                        "Name": "广东",
                        "Cities": [{
                                "ID": 440100,
                                "Name": "广州"
                            },
                            {
                                "ID": 440300,
                                "Name": "深圳"
                            },
                            {
                                "ID": 440400,
                                "Name": "珠海"
                            }
                        ]
                    }
                ]
            }
        ]
    }
})

//附件上传
Mock.mock(/FileUpload/, 'post', {
    "Code": 200,
    "Data": {
        "FileName": "TestPic2.PNG",
        "DownloadFileName": "92f9b43b-4f2b-4b69-98e9-84d23ae38ae2_TestPic2.PNG"
    }
})

//附件删除
Mock.mock(/FileDelete/, 'post', {
    "Code": 200,
})

//BMW-不可订货配件清单导入
Mock.mock(/ImportUnOrderablePart/, 'post', {
    "Code": 200,
})
