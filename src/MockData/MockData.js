import Mock from 'mockjs'
Mock.setup({
    // timeout: 6000
})

// ([\w|\?\S*]+)
// 用户登录
Mock.mock(/Login/, 'post', {
    "Code": 200,
    "Data":{
        "RoleCode":"Dealer",
        "UserName":"北京某某经销商"
    }
})

//获取用户信息
Mock.mock(/GetUserInfo/, 'get', {
    "Code": 200,
    "Data": {
        "RoleCode":"Dealer",
        "UserName":"北京某某经销商"
    }
})

// 订单列表
Mock.mock(/GetOrderList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 20,
        "Orders": [
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":201,
                "StatusName":"草稿"
            },
            {
                "OrderID":122121,
                "OrderNumber":"3613320181225143421",
                "AccidentTypeID":2,
                "AccidentType":"水淹车",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":202,
                "StatusName":"区域审批"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":203,
                "StatusName":"总部审批"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":204,
                "StatusName":"审批通过"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":205,
                "StatusName":"已发物流"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":206,
                "StatusName":"已结束"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":207,
                "StatusName":"区域驳回"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":208,
                "StatusName":"总部驳回"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":209,
                "StatusName":"已取消"
            },
            {
                "OrderID":122122,
                "OrderNumber":"3613320181226143421",
                "AccidentTypeID":1,
                "AccidentType":"大事故",
                "SubmitDate":"2018-10-19 10:23:31",
                "LastModified":"2018-10-19 10:23:31",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModelName":"520Li",
                "DealerName":"北京华德宝",
                "StatusCode":210,
                "StatusName":"已拒绝支持"
            }
        ]
    }
})

//获取各状态订单数量
Mock.mock(/GetOrderNumbers/, 'get', {
    "Code":200,
    "Data":{
        "Total":100,
        "201":0,
        "202":1,
        "203":1,
        "204":1,
        "205":45,
        "206":46,
        "207":0,
        "208":0,
        "209":8,
        "210":0
    }
})

//新建订单
Mock.mock(/CreateOrder/, 'post',{
    "Code":200,
    "Data":{
        "OrderID":722622,
        "OrderNumber":"35531201812261305023",
        "AccidentType":1,
        "StatusCode":201,
        "StatusName":"草稿",
        "CeateDate":"2018-10-19 10:23:31",
        "LastModified":"2018-10-19 10:23:31",
        "DealerID":23,
        "DealerCKD":"35531",
        "DealerName":"华德宝",
        "RegionID":"100004",
        "RegionName":"北区",
        "ProvinceID":"110000",
        "ProvinceName":"北京",
        "CityID":"110100",
        "CityName":"北京"
    }
})
// 获取订单详细信息
Mock.mock(/GetOrderInfo([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "OrderID":722622,
        "OrderNumber":35531201812261305023,
        "MyClaimID":122121,
        "AccidentType":1,
        "StatusCode":201,
        "StatusName":"待提交",
        "ReferenceNumber":"DAT-20181019152745251",
        "CeateDate":"2018-10-19 10:23:31",
        "SubmitDate":"2018-10-19 10:23:31",
        "LastModified":"2018-10-19 10:23:31",

        "DealerID":23,
        "DealerCKD":"35531",
        "DealerName":"华德宝",
        "RegionID":"100004",
        "RegionName":"北区",
        "ProvinceID":"110000",
        "ProvinceName":"北京",
        "CityID":"110100",
        "CityName":"北京",

        "VehicleOwner":"张三",
        "PlateNumber":"京N88888",
        "VIN":"LBVPZ1100ASD77412",
        "DATECode":"011300430200002",
        "FZA":1,
        "HST":130,
        "HT":43,
        "BaseModelID":12,
        "BaseModelName":"5 Series (5系) Lim. (F10/F18) (08.2010->)",
        "UT":20,
        "SubModelID":12,
        "SubModelName":"520Li",
        "VehicleMadeCountry":"CN",
        "VehicleFirstRegDate":"2017-10-12",
        "VehicleAge":18,

        "InsurerID":23,
        "InsurerName":"中国人保",
        "InsuranceNumber":"PDAA20186397376290173",
        "AccidentBrief":"双方事故，宝马全责，宝马右侧受损",

        "PartCost":84659.91,
        "LaborPaintCost":10449.54,
        "RepairCost":95109.45,
        "OrderPartCost":84659.91,
        "InsuranceCoverage":195200,
        "Repair_Div_Insurance":48.72,
        "Part_Div_Repair":89.01,
        "OrderPart_Div_Part":100,
        "OrderPartDiscount":10947.4,
        "ApplyExtraServiceCost":true,
        "ExtraServiceCost":7298.27,

        "WIP_OpenDate":"2018-10-19",
        "WIP_SettleDate":"2018-10-26",
        "WIP_Number":"54324",
        "Settlement_Number":"34833323333322",
        "Settlement_Cost":95109.45,
        "Settlement_PartCost":84659.91,

        "SpareParts":[
           {
               "ID":3212,
               "OrderType":"SPSO",
               "DVN":42110,
               "PartNumber":"41217182570",
               "PartName":"左后翼子板",
               "Price_Old":600,
               "Price":600,
               "Quantity_Old":1,
               "Quantity":1,
               "TotalPrice_Old":600,
               "TotalPrice":600,
               "IsManualAddPart":false,
               "IsManualInputPrice":false,
               "IsUnOrderable":false,
               "IsOrdered":true,
               "LogisticsCmt":""
           },
           {
               "ID":3213,
               "OrderType":"SPSO",
               "DVN":47151,
               "PartNumber":"51117293022",
               "PartName":"前部保险杠",
               "Price_Old":600,
               "Price":600,
               "Quantity_Old":1,
               "Quantity":1,
               "TotalPrice_Old":600,
               "TotalPrice":600,
               "IsManualAddPart":false,
               "IsManualInputPrice":true,
               "IsUnOrderable":false,
               "IsOrdered":false,
               "LogisticsCmt":""
           },
           {
               "ID":3214,
               "OrderType":"SPSO",
               "DVN":42725,
               "PartNumber":"83190301421",
               "PartName":"左前门",
               "Price_Old":600,
               "Price":600,
               "Quantity_Old":1,
               "Quantity":1,
               "TotalPrice_Old":600,
               "TotalPrice":600,
               "IsManualAddPart":true,
               "IsManualInputPrice":false,
               "IsUnOrderable":true,
               "IsOrdered":false,
               "LogisticsCmt":""
           }
       ],
        "AttachmentNumbers":{
            "Total":17,
            "1":1,
            "2":9,
            "3":1,
            "4":1,
            "5":1,
            "6":4
        },
        "Attachments":[
            {
                "ID":227,
                "CategoryID":1,
                "FileName":"TestPic1.PNG",
                "FileSize":2.1,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":228,
                "CategoryID":2,
                "FileName":"TestPic2.PNG",
                "FileSize":1.8,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":229,
                "CategoryID":3,
                "FileName":"TestPic1.PNG",
                "FileSize":2.1,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":230,
                "CategoryID":4,
                "FileName":"TestPic2.PNG",
                "FileSize":1.8,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":231,
                "CategoryID":5,
                "FileName":"TestPic1.PNG",
                "FileSize":2.1,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":232,
                "CategoryID":6,
                "FileName":"TestPic2.PNG",
                "FileSize":1.8,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":233,
                "CategoryID":1,
                "FileName":"TestPic1.PNG",
                "FileSize":2.1,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "ID":234,
                "CategoryID":2,
                "FileName":"TestPic2.PNG",
                "FileSize":1.8,
                "UploadDate":"2018-10-19 14:23:38"
            }
        ],
        "ApplicationLogs":[
            {
                "OperationDate":"2018-10-19 13:23:38",
                "Operator":"张三",
                "Operation":"经销商提交申请",
                "Comments":""
            },
            {
                "OperationDate":"2018-10-19 14:23:38",
                "Operator":"李四",
                "Operation":"区域经理审批通过",
                "Comments":"同意"
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
    "Data":{
        "MyClaimID":122121,
        "ReferenceNumber":"DAT-20181019152745251",

        "VehicleOwner":"张三",
        "PlateNumber":"京N88888",
        "VIN":"LBVPZ1100ASD77412",
        "DATECode":"011300430200002",
        "FZA":1,
        "HST":130,
        "HT":43,
        "BaseModelID":12,
        "BaseModelName":"5 Series (5系) Lim. (F10/F18) (08.2010->)",
        "UT":20,
        "SubModelID":12,
        "SubModelName":"520Li",
        "VehicleMadeCountry":"CN",
        "VehicleFirstRegDate":"2017-10-12",
        "VehicleAge":18,

        "InsurerID":23,
        "InsurerName":"中国人保",
        "InsuranceNumber":"PDAA20186397376290173",
        "AccidentBrief":"双方事故，宝马全责，宝马右侧受损",

        "PartCost":84659.91,
        "LaborCost":10000,
        "PaintCost":449.54,
        "LaborPaintCost":10449.54,
        "RepairCost":95109.45,
        "OrderPartCost":84659.91,
        "InsuranceCoverage":195200,
        "Repair_Div_Insurance":48.72,
        "Part_Div_Repair":89.01,
        "OrderPart_Div_Part":100,
        "OrderPartDiscount":10947.4,
        "ApplyExtraServiceCost":false,
        "HasWadingInsurance":false,

        "SpareParts":[
            {
                "OrderType":"SPSO",
                "DVN":42110,
                "PartNumber":"41217182570",
                "PartName":"左后翼子板",
                "Price":600,
                "Price_Old":600,
                "Quantity":1,
                "Quantity_Old":1,
                "TotalPrice":600,
                "TotalPrice_Old":600,
                "IsManualInputPrice":false,
                "IsUnOrderable":false,
                "IsOrdered":true,
                "LogisticsCmt":""
            },
            {
                "OrderType":"SPSO",
                "DVN":47151,
                "PartNumber":"51117293022",
                "PartName":"前部保险杠",
                "Price":600,
                "Price_Old":600,
                "Quantity":1,
                "Quantity_Old":1,
                "TotalPrice":600,
                "TotalPrice_Old":600,
                "IsManualInputPrice":false,
                "IsUnOrderable":false,
                "IsOrdered":true,
                "LogisticsCmt":""
            },
            {
                "OrderType":"SPSO",
                "DVN":42725,
                "PartNumber":"83190301421",
                "PartName":"左前门",
                "Price":600,
                "Price_Old":600,
                "Quantity":1,
                "Quantity_Old":1,
                "TotalPrice":600,
                "TotalPrice_Old":600,
                "IsManualInputPrice":false,
                "IsUnOrderable":false,
                "IsOrdered":true,
                "LogisticsCmt":""
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
        "TotalNumber": 4,
        "MailAddresses": [{
                "MailBoxAddress": "body-paint@list.bmw.com",
                "MailBoxName": "宝马总部",
                "MailBoxRole": "总部管理员",
                "UpdataTime": "2018-12-13  14:07",
                "StatusCode": 101,
                "StatusName": "启用"
            },
            {
                "MailBoxAddress": "logistics1@bmw.com ",
                "MailBoxName": "安徽9家，山东，北区",
                "MailBoxRole": "物流部",
                "UpdataTime": "2018-12-13  14:07",
                "StatusCode": 101,
                "StatusName": "启用"
            },
            {
                "MailBoxAddress": "logistics2@bmw.com ",
                "MailBoxName": "东区，东南区，湖北",
                "MailBoxRole": "物流部",
                "UpdataTime": "2018-12-13  14:07",
                "StatusCode": 101,
                "StatusName": "启用"
            },
            {
                "MailBoxAddress": "logistics3@bmw.com ",
                "MailBoxName": "西区，南区",
                "MailBoxRole": "物流部",
                "UpdataTime": "2018-12-13  14:07",
                "StatusCode": 101,
                "StatusName": "启用"
            },
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
        "ID":227,
        "CategoryID":2,
        "FileName":"油漆截图20181214.png",
        "FileSize":1.8
    }
})

//附件删除
Mock.mock(/FileDelete([\w|\?\S*]+)/, 'get', {
    "Code": 200,
})

//BMW-不可订货配件清单导入
Mock.mock(/ImportUnOrderablePart/, 'post', {
    "Code": 200,
})
