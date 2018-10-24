import Mock from 'mockjs'
Mock.setup({
  // timeout: 6000
})

// ([\w|\?\S*]+)
// 用户登录
Mock.mock(/Login/, 'post', {
    "Code":200
})

// 订单列表
Mock.mock(/GetOrderList/, 'post', {
    "Code":200,
    "Data":{
        "TotalNumber":120,
        "Orders":[
            {
                "OrderID":122121,
                "ReferenceNumber":"DAT-20181019152745251",
                "CreateDate":"2018-10-19",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModel":"520Li",
                "Insurer":"中国人保",
                "RepairCostTotal":10726,
                "VehicleCurrentPrice":92000,
                "SparePartCostTotal":8000,
                "StatusCode":201,
                "Status":"待提交"
            },
            {
                "OrderID":122122,
                "ReferenceNumber":"DAT-20181020152745251",
                "CreateDate":"2018-10-20",
                "RegionID":"100004",
                "RegionName":"北区",
                "ProvinceID":"110000",
                "ProvinceName":"北京",
                "CityID":"110100",
                "CityName":"北京",
                "PlateNumber":"京N88888",
                "VIN":"LBVPZ1100ASD77412",
                "SubModel":"520Li",
                "Insurer":"中国人保",
                "RepairCostTotal":10726,
                "VehicleCurrentPrice":92000,
                "SparePartCostTotal":8000,
                "StatusCode":202,
                "Status":"待区域经理审批"
            }
        ]
    }
})
