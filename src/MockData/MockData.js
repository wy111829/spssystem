import Mock from 'mockjs'
Mock.setup({
    // timeout: 6000
})

// ([\w|\?\S*]+)
// 用户登录
Mock.mock(/Login/, 'post', {
    "Code": 200
})

// 订单列表
Mock.mock(/GetOrderList/, 'post', {
    "Code": 200,
    "Data": {
        "TotalNumber": 120,
        "Orders": [{
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N88888",
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
                "OrderID": 122122,
                "ReferenceNumber": "DAT-20181020152745251",
                "CreateDate": "2018-10-20",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N88888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 202,
                "Status": "待区域经理审批"
            }
        ]
    }
})

// 获取订单详细信息
Mock.mock(/GetOrderInfo([\w|\?\S*]+)/, 'get', {
    "Code": 200,
    "Data": {
        "OrderID": 21171,
        "ContractID": 122121,
        "ReferenceNumber": "DAT-20181019152745251",
        "VehicleOwner": "张三",
        "PlateNumber": "京N88888",
        "VIN": "LBVPZ1100ASD77412",
        "SubModel": "520Li",
        "VehicleFirstRegDate": "2017-10-12",
        "VehicleAge": 18,
        "Insurer": "中国人保",
        "InsurerContactPerson": "李四",
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
        "CaseStatus": "自店",
        "IsCustomerChurned": false,
        "ChurnTo": "",
        "ChurnReason": "",
        "RetentionActions": "",
        "StatusCode": 201,
        "Status": "待提交",
        "SpareParts": [{
                "PartNumber": "41217182570",
                "PartName": "左后翼子板",
                "Price": 600,
                "Quantity": 1,
                "IsOrdered": true,
                "LogisticsCmt": "",
                "BMWApprovalCmt": ""
            },
            {
                "PartNumber": "83190301421",
                "PartName": "左前门",
                "Price": 600,
                "Quantity": 1,
                "IsOrdered": true,
                "LogisticsCmt": "",
                "BMWApprovalCmt": ""
            }
        ],
        "Attachments": [{
                "FileName": "TestPic1.PNG",
                "DownloadFileName": "89m9b43b-4f2b-4b69-98e9-84d23ae38ae2_TestPic2.PNG",
                "FileSize": 6000,
                "UploadDate": "2018-10-19 14:23:38"
            },
            {
                "FileName": "TestPic2.PNG",
                "DownloadFileName": "92f9b43b-4f2b-4b69-98e9-84d23ae38ae2_TestPic2.PNG",
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
Mock.mock(/GetDealerPolicyList/, 'post',{
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
                "ApproveMethod":"ManualApprove"
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
                "ApproveMethod":"AutoApprove"
            }
        ]
    }

})
