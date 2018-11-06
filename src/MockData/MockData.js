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
        "Role": "Administrator",
        "UserName": "系统管理员"
    }
})

// 订单列表
Mock.mock(/GetOrderList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 20,
        "Orders": [{
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "SubmitDate": "2018-10-19 17:23:11",
                "LastModified": "2018-10-19 17:23:12",
                "DealerID": 23,
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N58888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            },
            {
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "SubmitDate": "2018-10-19 17:23:12",
                "LastModified": "2018-10-19 17:23:12",
                "DealerID": 23,
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N58888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            },
            {
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "SubmitDate": "2018-10-19 17:23:13",
                "LastModified": "2018-10-19 17:23:12",
                "DealerID": 23,
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N58888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            },
            {
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "SubmitDate": "2018-10-19 17:23:14",
                "LastModified": "2018-10-19 17:23:12",
                "DealerID": 23,
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N58888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            },
            {
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "SubmitDate": "2018-10-19 17:23:15",
                "LastModified": "2018-10-19 17:23:12",
                "DealerID": 23,
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N58888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            },
            {
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "SubmitDate": "2018-10-19 17:23:16",
                "LastModified": "2018-10-19 17:23:12",
                "DealerID": 23,
                "DealerName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N58888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            },
        ]
    }
})

// 获取订单详细信息
Mock.mock(/GetOrderInfo([\w|\?\S*]+)/, 'get', {
    "Code":200,
    "Data":{
        "OrderID":722622,
        "MyClaimID":122121,
        "CeateDate":"2018-10-19 10:23:31",
        "SubmitDate":"2018-10-19 10:23:31",
        "ReferenceNumber":"DAT-20181019152745251",
        "VehicleOwner":"张三",
        "PlateNumber":"京N88888",
        "VIN":"LBVPZ1100ASD77412",
        "DATECode":"011300430200002",
        "FZA":1,
        "HST":130,
        "HT":43,
        "UT":20,
        "SubModelID":12,
        "SubModelName":"520Li",
        "VehicleMadeCountry":"CN",
        "VehicleFirstRegDate":"2017-10-12",
        "VehicleAge":18,
        "DealerID":23,
        "DealerName":"中国人保",
        "RegionID":"100004",
        "RegionName":"北区",
        "ProvinceID":"110000",
        "ProvinceName":"北京",
        "CityID":"110100",
        "CityName":"北京",
        "InsurerID":23,
        "InsurerName":"中国人保",
        "InsurerContactPerson":"李四",
        "InsuranceNumber":"Dfaas12892182",
        "AccidentBrief":"双方事故，宝马全责，宝马右侧受损",
        "VehicleMSRP":128000,
        "VehicleCurrentPrice":95000,
        "RepairCostTotal":23500,
        "Repair_CurrentPrice_PCT":24.7,
        "SparePartCostTotal":19000,
        "Part_Repair_PCT":80.9,
        "LaborCostTotal":4500,
        "InsuredAmount":23500,
        "IsManufacturerPaint":true,
        "HasAdditionalLabor":false,
        "CaseStatus":"自店",
        "IsCustomerChurned":false,
        "ChurnTo":"",
        "ChurnReason":"",
        "RetentionActions":"",
        "StatusCode":201,
        "Status":"待提交",
        "SpareParts":[
            {
                "ID":3212,
                "DVN":42110,
                "PartNumber":"41217182570",
                "PartName":"左后翼子板",
                "Price":600,
                "Quantity":1,
                "TotalPrice":600,
                "IsOrdered":true,
                "LogisticsCmt":"",
                "BMWApprovalCmt":""
            },
            {
                "ID":3213,
                "DVN":47151,
                "PartNumber":"51117293022",
                "PartName":"前部保险杠",
                "Price":6580,
                "Quantity":1,
                "TotalPrice":6580,
                "IsOrdered":true,
                "LogisticsCmt":"",
                "BMWApprovalCmt":""
            },
            {
                "ID":3214,
                "DVN":42725,
                "PartNumber":"83190301421",
                "PartName":"左前门",
                "Price":600,
                "Quantity":1,
                "TotalPrice":600,
                "IsOrdered":false,
                "LogisticsCmt":"",
                "BMWApprovalCmt":""
            }
        ],
        "Attachments":[
            {
                "FileName":"TestPic1.PNG",
                "DownloadFileName":"89m9b43b-4f2b-4b69-98e9-84d23ae38ae2_TestPic2.PNG",
                "FileSize":6000,
                "UploadDate":"2018-10-19 14:23:38"
            },
            {
                "FileName":"TestPic2.PNG",
                "DownloadFileName":"92f9b43b-4f2b-4b69-98e9-84d23ae38ae2_TestPic2.PNG",
                "FileSize":6000,
                "UploadDate":"2018-10-19 14:27:38"
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
                "DealerID":122121,
                "CBU":"36133",
                "CKD":"36131",
                "DealerName":"北京华德宝",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "DealerGroup":"北京经销商集团",
                "ApproveMethod":"ManualApprove"
            },
            {
                "DealerID":122122,
                "CBU":"36153",
                "CKD":"36161",
                "DealerName":"DAT中国",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "DealerGroup":"",
                "ApproveMethod":"AutoApprove"
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
        "SparePartCostTotal": 19000,
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

//获取当前系统消息
Mock.mock(/GetCurrentSysMessage/, 'get',{
    "Code":200,
    "Data":{
        "MessageContent":"这是一条用于测试的系统消息。"
    }
})

//订单创建、修改
Mock.mock(/SaveOrder/, 'post', {
    "Code":200,
    "OrderID":2511
})

//订单提交
Mock.mock(/SubmitOrder([\w|\?\S*]+)/, 'get', {
    "Code":200
})

//订单删除
Mock.mock(/DeleteOrder([\w|\?\S*]+)/, 'get',{
    "Code":200
})

//区域经理-审批
Mock.mock(/RMApproveOrder/, 'post', {
    "Code":200
})

//BMW-审批
Mock.mock(/BMWApproveOrder/, 'post', {
    "Code":200
})

// 区域经理-设置经销商审批策略
Mock.mock(/SetDealerApprovePolicy/, 'post', {
    "Code": 300,
    "Message":"错误信息"
})

//BMW-获取经销商列表
Mock.mock(/GetDealerList/, 'post', {
    "Code":200,
    "Data":{
        "TotalNumber":120,
        "Dealers":[
            {
                "DealerID":122121,
                "CBU":"36133",
                "CKD":"36131",
                "ShortName":"北京华德宝",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "DealerGroup":"北京经销商集团",
                "StatusCode":101,
                "StatusName":"启用"
            },
            {
                "DealerID":122122,
                "CBU":"36153",
                "CKD":"36161",
                "ShortName":"DAT中国",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "DealerGroup":"",
                "StatusCode":101,
                "StatusName":"启用"
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
    "Data":{
        "DealerID":122122,
        "CBU":"36153",
        "CKD":"36161",
        "FullName":"DAT中国有限公司",
        "ShortName":"DAT中国",
        "RegionID":"100004",
        "RegionName":"北区",
        "ProvinceID":"110000",
        "ProvinceName":"北京",
        "CityID":"110100",
        "CityName":"北京",
        "DealerGroup":"88888",
        "Status":101,
        "LoginName":"Zhangsan",
        "MailBox":"Test@Test.com"
    }
})

//BMW-获取区域经理列表
Mock.mock(/GetRMList/, 'get', {
    "Code": 200,
    "Data": {
        "TotalNumber":5,
        "RegionManagers":[
            {
                "UserID":15,
                "RegionID":"100001",
                "RegionName":"东区",
                "Name":"张无忌",
                "LoginName":"zhangwuji",
                "MailBox":"Test@Test.com",
                "Mobile":"13900000000",
                "StatusCode":101,
                "StatusName":"启用"
            },
            {
                "UserID":16,
                "RegionID":"100002",
                "RegionName":"南区",
                "Name":"乔峰",
                "LoginName":"qiaofeng",
                "MailBox":"Test@Test.com",
                "Mobile":"13900000000",
                "StatusCode":101,
                "StatusName":"启用"
            }
        ]
    }
})

//BMW-获取区域经理详细信息
Mock.mock(/GetRMInfo([\w|\?\S*]+)/, 'get', {
    "Code":200,
    "Data":{
        "UserID":2,
        "RegionID":"100001",
        "RegionName":"东区",
        "Name":"张无忌",
        "LoginName":"zhangwuji",
        "MailBox":"Test@Test.com",
        "Mobile":"13900000000",
        "Status":101
    }
})
