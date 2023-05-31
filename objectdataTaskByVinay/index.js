let objectData = {
    "Command": "GetMonitorData",
    "CommandStatus": {
        "Message": "GetMonitorData Success",
        "Status": "Success"
    },
    "Data": [
        {
            "Header": "Component,Type, Value, Unit",
            "Index": "0",
            "Name": "Monitor All",
            "ToolTip": "",
            "Treelist": [
                {
                    "Header": "",
                    "Index": 2,
                    "Name": "CPU",
                    "ToolTip": "CPU",
                    "Treelist": [
                        {
                            "Header": "",
                            "Index": 3,
                            "Name": "CPU0",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 4,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU0",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 4,
                                        "unit": ""
                                    },
                                    "Row": "CPU0, is CPU Throttling, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 5,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU0",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 5,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU0, Frequency, NA, MHz",
                                    "isSelected": true,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 6,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU0",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 6,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU0, DTS, NA, Degree C",
                                    "isSelected": true,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 7,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU0",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 7,
                                        "unit": ""
                                    },
                                    "Row": "CPU0, Target PState Request Ratio, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 8,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU0",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 8,
                                        "unit": ""
                                    },
                                    "Row": "CPU0, Current PState Ratio, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 9,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU0",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 9,
                                        "unit": ""
                                    },
                                    "Row": "CPU0, Turbo Capability, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 10,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU0",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 10,
                                        "unit": ""
                                    },
                                    "Row": "CPU0, SGX Support, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 11,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU0",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 11,
                                        "unit": ""
                                    },
                                    "Row": "CPU0, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU0",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 12,
                            "Name": "CPU1",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 13,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU1",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 13,
                                        "unit": ""
                                    },
                                    "Row": "CPU1, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 14,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU1",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 14,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU1, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 15,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU1",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 15,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU1, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 16,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU1",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 16,
                                        "unit": ""
                                    },
                                    "Row": "CPU1, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 17,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU1",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 17,
                                        "unit": ""
                                    },
                                    "Row": "CPU1, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 18,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU1",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 18,
                                        "unit": ""
                                    },
                                    "Row": "CPU1, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 19,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU1",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 19,
                                        "unit": ""
                                    },
                                    "Row": "CPU1, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 20,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU1",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 20,
                                        "unit": ""
                                    },
                                    "Row": "CPU1, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU1",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 21,
                            "Name": "CPU2",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 22,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU2",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 22,
                                        "unit": ""
                                    },
                                    "Row": "CPU2, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 23,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU2",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 23,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU2, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 24,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU2",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 24,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU2, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 25,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU2",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 25,
                                        "unit": ""
                                    },
                                    "Row": "CPU2, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 26,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU2",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 26,
                                        "unit": ""
                                    },
                                    "Row": "CPU2, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 27,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU2",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 27,
                                        "unit": ""
                                    },
                                    "Row": "CPU2, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 28,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU2",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 28,
                                        "unit": ""
                                    },
                                    "Row": "CPU2, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 29,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU2",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 29,
                                        "unit": ""
                                    },
                                    "Row": "CPU2, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU2",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 30,
                            "Name": "CPU3",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 31,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU3",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 31,
                                        "unit": ""
                                    },
                                    "Row": "CPU3, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 32,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU3",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 32,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU3, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 33,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU3",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 33,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU3, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 34,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU3",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 34,
                                        "unit": ""
                                    },
                                    "Row": "CPU3, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 35,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU3",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 35,
                                        "unit": ""
                                    },
                                    "Row": "CPU3, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 36,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU3",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 36,
                                        "unit": ""
                                    },
                                    "Row": "CPU3, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 37,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU3",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 37,
                                        "unit": ""
                                    },
                                    "Row": "CPU3, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 38,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU3",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 38,
                                        "unit": ""
                                    },
                                    "Row": "CPU3, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU3",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 39,
                            "Name": "CPU4",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 40,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU4",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 40,
                                        "unit": ""
                                    },
                                    "Row": "CPU4, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 41,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU4",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 41,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU4, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 42,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU4",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 42,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU4, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 43,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU4",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 43,
                                        "unit": ""
                                    },
                                    "Row": "CPU4, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 44,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU4",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 44,
                                        "unit": ""
                                    },
                                    "Row": "CPU4, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 45,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU4",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 45,
                                        "unit": ""
                                    },
                                    "Row": "CPU4, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 46,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU4",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 46,
                                        "unit": ""
                                    },
                                    "Row": "CPU4, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 47,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU4",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 47,
                                        "unit": ""
                                    },
                                    "Row": "CPU4, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU4",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 48,
                            "Name": "CPU5",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 49,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU5",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 49,
                                        "unit": ""
                                    },
                                    "Row": "CPU5, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 50,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU5",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 50,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU5, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 51,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU5",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 51,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU5, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 52,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU5",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 52,
                                        "unit": ""
                                    },
                                    "Row": "CPU5, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 53,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU5",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 53,
                                        "unit": ""
                                    },
                                    "Row": "CPU5, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 54,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU5",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 54,
                                        "unit": ""
                                    },
                                    "Row": "CPU5, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 55,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU5",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 55,
                                        "unit": ""
                                    },
                                    "Row": "CPU5, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 56,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU5",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 56,
                                        "unit": ""
                                    },
                                    "Row": "CPU5, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU5",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 57,
                            "Name": "CPU6",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 58,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU6",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 58,
                                        "unit": ""
                                    },
                                    "Row": "CPU6, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 59,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU6",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 59,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU6, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 60,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU6",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 60,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU6, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 61,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU6",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 61,
                                        "unit": ""
                                    },
                                    "Row": "CPU6, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 62,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU6",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 62,
                                        "unit": ""
                                    },
                                    "Row": "CPU6, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 63,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU6",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 63,
                                        "unit": ""
                                    },
                                    "Row": "CPU6, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 64,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU6",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 64,
                                        "unit": ""
                                    },
                                    "Row": "CPU6, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 65,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU6",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 65,
                                        "unit": ""
                                    },
                                    "Row": "CPU6, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU6",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 66,
                            "Name": "CPU7",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 67,
                                    "Name": "is CPU Throttling",
                                    "Param": {
                                        "feature": "CPU_THROT",
                                        "groupName": "CPU7",
                                        "name": "is CPU Throttling",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 67,
                                        "unit": ""
                                    },
                                    "Row": "CPU7, is CPU Throttling, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 68,
                                    "Name": "Frequency",
                                    "Param": {
                                        "feature": "CLIENT_CORE_FREQ",
                                        "groupName": "CPU7",
                                        "name": "Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 68,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU7, Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 69,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "CLIENT_CORE_DTS",
                                        "groupName": "CPU7",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 69,
                                        "unit": "Degree C"
                                    },
                                    "Row": "CPU7, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 70,
                                    "Name": "Target PState Request Ratio",
                                    "Param": {
                                        "feature": "CLIENT_CORE_PSTATE",
                                        "groupName": "CPU7",
                                        "name": "Target PState Request Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 70,
                                        "unit": ""
                                    },
                                    "Row": "CPU7, Target PState Request Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 71,
                                    "Name": "Current PState Ratio",
                                    "Param": {
                                        "feature": "CUR_PSTATE_RATIO",
                                        "groupName": "CPU7",
                                        "name": "Current PState Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 71,
                                        "unit": ""
                                    },
                                    "Row": "CPU7, Current PState Ratio, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 72,
                                    "Name": "Turbo Capability",
                                    "Param": {
                                        "feature": "TURBO_CAPABILITY",
                                        "groupName": "CPU7",
                                        "name": "Turbo Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 72,
                                        "unit": ""
                                    },
                                    "Row": "CPU7, Turbo Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 73,
                                    "Name": "SGX Support",
                                    "Param": {
                                        "feature": "SGX",
                                        "groupName": "CPU7",
                                        "name": "SGX Support",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 73,
                                        "unit": ""
                                    },
                                    "Row": "CPU7, SGX Support, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 74,
                                    "Name": "CORE IPC",
                                    "Param": {
                                        "feature": "CORE_IPC",
                                        "groupName": "CPU7",
                                        "name": "CORE IPC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 74,
                                        "unit": ""
                                    },
                                    "Row": "CPU7, CORE IPC, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU7",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 75,
                            "Name": "CPU-Info",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 76,
                                    "Name": "LFM",
                                    "Param": {
                                        "feature": "LFM",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "NA",
                                        "name": "LFM",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 76,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, LFM, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 77,
                                    "Name": "HFM",
                                    "Param": {
                                        "feature": "HFM",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "NA",
                                        "name": "HFM",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 77,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, HFM, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 78,
                                    "Name": "PN Frequency",
                                    "Param": {
                                        "feature": "PN_FREQ",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "NA",
                                        "name": "PN Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 78,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, PN Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 79,
                                    "Name": "1- pCore Active",
                                    "Param": {
                                        "feature": "CORE_ACTIVE_FREQ_1",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "1",
                                        "name": "1- pCore Active",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 79,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, 1- pCore Active, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 80,
                                    "Name": "2- pCore Active",
                                    "Param": {
                                        "feature": "CORE_ACTIVE_FREQ_2",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "1",
                                        "name": "2- pCore Active",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 80,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, 2- pCore Active, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 81,
                                    "Name": "3- pCore Active",
                                    "Param": {
                                        "feature": "CORE_ACTIVE_FREQ_3",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "1",
                                        "name": "3- pCore Active",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 81,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, 3- pCore Active, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 82,
                                    "Name": "4- pCore Active",
                                    "Param": {
                                        "feature": "CORE_ACTIVE_FREQ_4",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "1",
                                        "name": "4- pCore Active",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 82,
                                        "unit": "MHz"
                                    },
                                    "Row": "CPU-Info, 4- pCore Active, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 83,
                                    "Name": "Current P State",
                                    "Param": {
                                        "feature": "CUR_PSTATE",
                                        "groupName": "CPU-Info",
                                        "isBigCore": "NA",
                                        "name": "Current P State",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 83,
                                        "unit": ""
                                    },
                                    "Row": "CPU-Info, Current P State, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU-Info",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 84,
                            "Name": "HWP",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 85,
                                    "Name": "HW Pstate Capability",
                                    "Param": {
                                        "feature": "HWP_CAP",
                                        "groupName": "HWP",
                                        "name": "HW Pstate Capability",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 85,
                                        "unit": ""
                                    },
                                    "Row": "HWP, HW Pstate Capability, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 86,
                                    "Name": "HW Pstate CPPC Version",
                                    "Param": {
                                        "feature": "HWP_CAP_VER",
                                        "groupName": "HWP",
                                        "name": "HW Pstate CPPC Version",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 86,
                                        "unit": ""
                                    },
                                    "Row": "HWP, HW Pstate CPPC Version, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 87,
                                    "Name": "HWP Highest Performance",
                                    "Param": {
                                        "feature": "HWP_HIGH_PERF",
                                        "groupName": "HWP",
                                        "name": "HWP Highest Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 87,
                                        "unit": ""
                                    },
                                    "Row": "HWP, HWP Highest Performance, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 88,
                                    "Name": "HWP Guaranteed Performance",
                                    "Param": {
                                        "feature": "HWP_GUARANTEED_PERF",
                                        "groupName": "HWP",
                                        "name": "HWP Guaranteed Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 88,
                                        "unit": ""
                                    },
                                    "Row": "HWP, HWP Guaranteed Performance, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 89,
                                    "Name": "HWP Most Efficient Performance",
                                    "Param": {
                                        "feature": "HWP_EFF_PERF",
                                        "groupName": "HWP",
                                        "name": "HWP Most Efficient Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 89,
                                        "unit": ""
                                    },
                                    "Row": "HWP, HWP Most Efficient Performance, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 90,
                                    "Name": "HWP Lowest Performance",
                                    "Param": {
                                        "feature": "HWP_LOW_PERF",
                                        "groupName": "HWP",
                                        "name": "HWP Lowest Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 90,
                                        "unit": ""
                                    },
                                    "Row": "HWP, HWP Lowest Performance, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 91,
                                    "Name": "OSPM Requested HWP Minimum Performance",
                                    "Param": {
                                        "feature": "OSPM_MIN_PERF",
                                        "groupName": "HWP",
                                        "name": "OSPM Requested HWP Minimum Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 91,
                                        "unit": ""
                                    },
                                    "Row": "HWP, OSPM Requested HWP Minimum Performance, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 92,
                                    "Name": "OSPM Requested HWP Maximum Performance",
                                    "Param": {
                                        "feature": "OSPM_MAX_PERF",
                                        "groupName": "HWP",
                                        "name": "OSPM Requested HWP Maximum Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 92,
                                        "unit": ""
                                    },
                                    "Row": "HWP, OSPM Requested HWP Maximum Performance, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 93,
                                    "Name": "OSPM Requested HWP Desired Performance",
                                    "Param": {
                                        "feature": "OSPM_DESIRED_PERF",
                                        "groupName": "HWP",
                                        "name": "OSPM Requested HWP Desired Performance",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 93,
                                        "unit": ""
                                    },
                                    "Row": "HWP, OSPM Requested HWP Desired Performance, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 94,
                                    "Name": "OSPM Requested Energy Performance Preference",
                                    "Param": {
                                        "feature": "OSPM_ENERGY_PERF",
                                        "groupName": "HWP",
                                        "name": "OSPM Requested Energy Performance Preference",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 94,
                                        "unit": ""
                                    },
                                    "Row": "HWP, OSPM Requested Energy Performance Preference, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 95,
                                    "Name": "OSPM Requested HWP Activity Window",
                                    "Param": {
                                        "feature": "OSPM_ACTIVITY_WINDOW",
                                        "groupName": "HWP",
                                        "name": "OSPM Requested HWP Activity Window",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 95,
                                        "unit": ""
                                    },
                                    "Row": "HWP, OSPM Requested HWP Activity Window, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "HWP",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 96,
                            "Name": "Miscellaneous",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 97,
                                    "Name": "MSR Package Temperature",
                                    "Param": {
                                        "feature": "CLIENT_MSR_PKG_TEMP",
                                        "groupName": "Miscellaneous",
                                        "name": "MSR Package Temperature",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 97,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Miscellaneous, MSR Package Temperature, NA, Degree C",
                                    "isSelected": true,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 98,
                                    "Name": "MMIO Package Temperature",
                                    "Param": {
                                        "feature": "CLIENT_MMIO_PKG_TEMP",
                                        "groupName": "Miscellaneous",
                                        "name": "MMIO Package Temperature",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 98,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Miscellaneous, MMIO Package Temperature, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 99,
                                    "Name": "IsPkgTempGreaterThanTjMax",
                                    "Param": {
                                        "feature": "PKG_TEMP_GREATER_THAN_TJMAX",
                                        "groupName": "Miscellaneous",
                                        "name": "IsPkgTempGreaterThanTjMax",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 99,
                                        "unit": ""
                                    },
                                    "Row": "Miscellaneous, IsPkgTempGreaterThanTjMax, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 100,
                                    "Name": "TCC Offset Temperature",
                                    "Param": {
                                        "feature": "TCC_OFF_TEMP",
                                        "groupName": "Miscellaneous",
                                        "name": "TCC Offset Temperature",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 100,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Miscellaneous, TCC Offset Temperature, NA, Degree C",
                                    "isSelected": true,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 101,
                                    "Name": "TJMAX Temperature",
                                    "Param": {
                                        "feature": "TJMAX_TEMP",
                                        "groupName": "Miscellaneous",
                                        "name": "TJMAX Temperature",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 101,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Miscellaneous, TJMAX Temperature, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 102,
                                    "Name": "Acoustic Mitigation Rampup",
                                    "Param": {
                                        "feature": "ACOUSTIC_MITIGATION_RAMPUP",
                                        "groupName": "Miscellaneous",
                                        "name": "Acoustic Mitigation Rampup",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 102,
                                        "unit": "uS"
                                    },
                                    "Row": "Miscellaneous, Acoustic Mitigation Rampup, NA, uS",
                                    "isSelected": false,
                                    "unit": "(uS)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 103,
                                    "Name": "Acoustic Mitigation Rampdown",
                                    "Param": {
                                        "feature": "ACOUSTIC_MITIGATION_RAMPDOWN",
                                        "groupName": "Miscellaneous",
                                        "name": "Acoustic Mitigation Rampdown",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 103,
                                        "unit": "uS"
                                    },
                                    "Row": "Miscellaneous, Acoustic Mitigation Rampdown, NA, uS",
                                    "isSelected": false,
                                    "unit": "(uS)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 104,
                                    "Name": "Acoustic Mitigation Prewake",
                                    "Param": {
                                        "feature": "ACOUSTIC_MITIGATION_PREWAKE",
                                        "groupName": "Miscellaneous",
                                        "name": "Acoustic Mitigation Prewake",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 104,
                                        "unit": "uS"
                                    },
                                    "Row": "Miscellaneous, Acoustic Mitigation Prewake, NA, uS",
                                    "isSelected": false,
                                    "unit": "(uS)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 105,
                                    "Name": "VCCIN Slew Rate",
                                    "Param": {
                                        "feature": "VCCIN_SLEW_RATE",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN Slew Rate",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 105,
                                        "unit": ""
                                    },
                                    "Row": "Miscellaneous, VCCIN Slew Rate, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 106,
                                    "Name": "VCCIN DC Loadline",
                                    "Param": {
                                        "feature": "VCCIN_DC_LOADLINE",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN DC Loadline",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 106,
                                        "unit": "mOhms"
                                    },
                                    "Row": "Miscellaneous, VCCIN DC Loadline, NA, mOhms",
                                    "isSelected": false,
                                    "unit": "(mOhms)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 107,
                                    "Name": "VCCIN AC Loadline",
                                    "Param": {
                                        "feature": "VCCIN_AC_LOADLINE",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN AC Loadline",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 107,
                                        "unit": "mOhms"
                                    },
                                    "Row": "Miscellaneous, VCCIN AC Loadline, NA, mOhms",
                                    "isSelected": false,
                                    "unit": "(mOhms)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 108,
                                    "Name": "VCCIN PS1 Cutoff",
                                    "Param": {
                                        "feature": "VCCIN_PS1_CUTOFF",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN PS1 Cutoff",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 108,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Miscellaneous, VCCIN PS1 Cutoff, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 109,
                                    "Name": "VCCIN PS2 Cutoff",
                                    "Param": {
                                        "feature": "VCCIN_PS2_CUTOFF",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN PS2 Cutoff",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 109,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Miscellaneous, VCCIN PS2 Cutoff, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 110,
                                    "Name": "VCCIN PS3 Cutoff",
                                    "Param": {
                                        "feature": "VCCIN_PS3_CUTOFF",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN PS3 Cutoff",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 110,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Miscellaneous, VCCIN PS3 Cutoff, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 111,
                                    "Name": "TCC Offset Clamp",
                                    "Param": {
                                        "feature": "TCC_OFF_CLAMP",
                                        "groupName": "Miscellaneous",
                                        "name": "TCC Offset Clamp",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 111,
                                        "unit": ""
                                    },
                                    "Row": "Miscellaneous, TCC Offset Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 112,
                                    "Name": "TCC Offset TAU",
                                    "Param": {
                                        "feature": "TCC_OFF_TAU",
                                        "groupName": "Miscellaneous",
                                        "name": "TCC Offset TAU",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 112,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Miscellaneous, TCC Offset TAU, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 113,
                                    "Name": "Is Psys Enabled",
                                    "Param": {
                                        "feature": "PSYS_ENABLE_STATUS",
                                        "groupName": "Miscellaneous",
                                        "name": "Is Psys Enabled",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 113,
                                        "unit": ""
                                    },
                                    "Row": "Miscellaneous, Is Psys Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 114,
                                    "Name": "TControl Offset",
                                    "Param": {
                                        "feature": "TCONTROL_OFF",
                                        "groupName": "Miscellaneous",
                                        "name": "TControl Offset",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 114,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Miscellaneous, TControl Offset, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 115,
                                    "Name": "Thermal Margining",
                                    "Param": {
                                        "feature": "THERMAL_MARGINING",
                                        "groupName": "Miscellaneous",
                                        "name": "Thermal Margining",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 115,
                                        "unit": ""
                                    },
                                    "Row": "Miscellaneous, Thermal Margining, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 116,
                                    "Name": "RDTSC",
                                    "Param": {
                                        "feature": "RDTSC",
                                        "groupName": "Miscellaneous",
                                        "name": "RDTSC",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 116,
                                        "unit": "Ticks"
                                    },
                                    "Row": "Miscellaneous, RDTSC, NA, Ticks",
                                    "isSelected": false,
                                    "unit": "(Ticks)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 117,
                                    "Name": "VCCIN VR Maximum Voltage",
                                    "Param": {
                                        "feature": "VCCIN_VR_MAX_VOLT",
                                        "groupName": "Miscellaneous",
                                        "name": "VCCIN VR Maximum Voltage",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 117,
                                        "unit": "Volts"
                                    },
                                    "Row": "Miscellaneous, VCCIN VR Maximum Voltage, NA, Volts",
                                    "isSelected": false,
                                    "unit": "(Volts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 118,
                                    "Name": "Is HGS Enabled",
                                    "Param": {
                                        "feature": "HGSENABLECHECK",
                                        "groupName": "Miscellaneous",
                                        "name": "Is HGS Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 118,
                                        "unit": ""
                                    },
                                    "Row": "Miscellaneous, Is HGS Enabled, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "Miscellaneous",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 119,
                            "Name": "Power",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 120,
                                    "Name": "EWMA Power",
                                    "Param": {
                                        "feature": "PKG_EWMA_POWER",
                                        "groupName": "Power",
                                        "name": "EWMA Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 120,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, EWMA Power, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 121,
                                    "Name": "IA Power",
                                    "Param": {
                                        "feature": "PKG_IA_POWER",
                                        "groupName": "Power",
                                        "name": "IA Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 121,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, IA Power, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 122,
                                    "Name": "GT Power",
                                    "Param": {
                                        "feature": "PKG_GT_POWER",
                                        "groupName": "Power",
                                        "name": "GT Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 122,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, GT Power, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 123,
                                    "Name": "Rest of Package Power",
                                    "Param": {
                                        "feature": "REST_PKG_POWER",
                                        "groupName": "Power",
                                        "name": "Rest of Package Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 123,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, Rest of Package Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 124,
                                    "Name": "Package Power",
                                    "Param": {
                                        "feature": "CPUPKG_POWER",
                                        "groupName": "Power",
                                        "name": "Package Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 124,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, Package Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 125,
                                    "Name": "Effective EWMA PeciMmio",
                                    "Param": {
                                        "feature": "EFF_EWMA_PECIMMIO",
                                        "groupName": "Power",
                                        "name": "Effective EWMA PeciMmio",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 125,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, Effective EWMA PeciMmio, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 126,
                                    "Name": "MSR Psys Power",
                                    "Param": {
                                        "feature": "MSR_PSYS_POWER",
                                        "groupName": "Power",
                                        "name": "MSR Psys Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 126,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, MSR Psys Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 127,
                                    "Name": "Psys EWMA Power",
                                    "Param": {
                                        "feature": "PSYS_EWMA_POWER",
                                        "groupName": "Power",
                                        "name": "Psys EWMA Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 127,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, Psys EWMA Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 128,
                                    "Name": "PECI Psys Power",
                                    "Param": {
                                        "feature": "PECI_PSYS_POWER",
                                        "groupName": "Power",
                                        "name": "PECI Psys Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 128,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, PECI Psys Power, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 129,
                                    "Name": "SA Power",
                                    "Param": {
                                        "feature": "SA_POWER",
                                        "groupName": "Power",
                                        "name": "SA Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 129,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, SA Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 130,
                                    "Name": "eDram Power",
                                    "Param": {
                                        "feature": "EDRAM_POWER",
                                        "groupName": "Power",
                                        "name": "eDram Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 130,
                                        "unit": "Watts"
                                    },
                                    "Row": "Power, eDram Power, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                }
                            ],
                            "ToolTip": "Power",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 131,
                            "Name": "Turbo Parameters",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 132,
                                    "Name": "IA Clip Reason",
                                    "Param": {
                                        "feature": "IA_CLIP_REASON",
                                        "groupName": "Turbo Parameters",
                                        "name": "IA Clip Reason",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 132,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, IA Clip Reason, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 133,
                                    "Name": "Gt Clip Reason",
                                    "Param": {
                                        "feature": "GT_CLIP_REASON",
                                        "groupName": "Turbo Parameters",
                                        "name": "Gt Clip Reason",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 133,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, Gt Clip Reason, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 134,
                                    "Name": "isLPMSupported",
                                    "Param": {
                                        "feature": "LPM_SUPPORT_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "isLPMSupported",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 134,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, isLPMSupported, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 135,
                                    "Name": "min Operating Frequency",
                                    "Param": {
                                        "feature": "MIN_OP_FREQ",
                                        "groupName": "Turbo Parameters",
                                        "name": "min Operating Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 135,
                                        "unit": "MHz"
                                    },
                                    "Row": "Turbo Parameters, min Operating Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 136,
                                    "Name": "Max NonTurbo Frequency",
                                    "Param": {
                                        "feature": "MAX_NONTURBO_FREQ",
                                        "groupName": "Turbo Parameters",
                                        "name": "Max NonTurbo Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 136,
                                        "unit": "MHz"
                                    },
                                    "Row": "Turbo Parameters, Max NonTurbo Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 137,
                                    "Name": "isTurboActivationRatioLocked",
                                    "Param": {
                                        "feature": "TURBO_ACT_RATIO",
                                        "groupName": "Turbo Parameters",
                                        "name": "isTurboActivationRatioLocked",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 137,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, isTurboActivationRatioLocked, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 138,
                                    "Name": "MSR Power Limit_1 Enabled",
                                    "Param": {
                                        "feature": "MSR_PKG_PL1_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_1 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 138,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_1 Enabled, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 139,
                                    "Name": "MSR Power Limit_1 Critical Clamp",
                                    "Param": {
                                        "feature": "MSR_PKG_PL1_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_1 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 139,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_1 Critical Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 140,
                                    "Name": "MSR Power Limit_1 Power",
                                    "Param": {
                                        "feature": "MSR_PKG_PL1_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_1 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 140,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_1 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 141,
                                    "Name": "MSR Power Limit_1 Time",
                                    "Param": {
                                        "feature": "MSR_PKG_PL1_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_1 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 141,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_1 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 142,
                                    "Name": "MSR Power Limit_2 Enabled",
                                    "Param": {
                                        "feature": "MSR_PKG_PL2_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_2 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 142,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_2 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 143,
                                    "Name": "MSR Power Limit_2 Power",
                                    "Param": {
                                        "feature": "MSR_PKG_PL2_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_2 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 143,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_2 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 144,
                                    "Name": "MSR Power Limit_2 Time",
                                    "Param": {
                                        "feature": "MSR_PKG_PL2_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_2 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 144,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_2 Time, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 145,
                                    "Name": "MMIO Power Limit_1 Enabled",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL1_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_1 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 145,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_1 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 146,
                                    "Name": "MMIO Power Limit_1 Critical Clamp",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL1_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_1 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 146,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_1 Critical Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 147,
                                    "Name": "MMIO Power Limit_1 Power",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL1_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_1 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 147,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_1 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 148,
                                    "Name": "MMIO Power Limit_1 Time",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL1_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_1 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 148,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_1 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 149,
                                    "Name": "MMIO Power Limit_2 Enabled",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL2_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_2 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 149,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_2 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 150,
                                    "Name": "MMIO Power Limit_2 Power",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL2_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_2 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 150,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_2 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 151,
                                    "Name": "MMIO Power Limit_2 Time",
                                    "Param": {
                                        "feature": "MMIO_PKG_PL2_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO Power Limit_2 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 151,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MMIO Power Limit_2 Time, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 152,
                                    "Name": "MSR Psys Power Limit_3 Power",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL3_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_3 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 152,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_3 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 153,
                                    "Name": "MSR Psys Power Limit_3 Time(Seconds)",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL3_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_3 Time(Seconds)",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 153,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_3 Time(Seconds), NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 154,
                                    "Name": "MSR Psys Power Limit_3 Enabled",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL3_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_3 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 154,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_3 Enabled, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 155,
                                    "Name": "MSR Psys Power Limit_3 Duty Cycle",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL3_DUTY_CYCLE",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_3 Duty Cycle",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 155,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_3 Duty Cycle, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 156,
                                    "Name": "MSR Psys Power Limit_3 Lock Enabled",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL3_LOCK_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_3 Lock Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 156,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_3 Lock Enabled, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 157,
                                    "Name": "PECI Power Limit_3 Power",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL3_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Power Limit_3 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 157,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, PECI Power Limit_3 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 158,
                                    "Name": "PECI Power Limit_3 Time",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL3_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Power Limit_3 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 158,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, PECI Power Limit_3 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 159,
                                    "Name": "PECI Power Limit_3 Enabled",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL3_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Power Limit_3 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 159,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, PECI Power Limit_3 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 160,
                                    "Name": "PECI Power Limit_3 Duty Cycle",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL3_DUTY_CYCLE",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Power Limit_3 Duty Cycle",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 160,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, PECI Power Limit_3 Duty Cycle, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 161,
                                    "Name": "PECI Pkg Power Limit_1 Critical Clamp",
                                    "Param": {
                                        "feature": "PECI_PKG_PL1_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_1 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 161,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_1 Critical Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 162,
                                    "Name": "PECI Pkg Power Limit_1 Enabled",
                                    "Param": {
                                        "feature": "PECI_PKG_PL1_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_1 Enabled",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 162,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_1 Enabled, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 163,
                                    "Name": "PECI Pkg Power Limit_1 Power",
                                    "Param": {
                                        "feature": "PECI_PKG_PL1_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_1 Power",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 163,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_1 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 164,
                                    "Name": "PECI Pkg Power Limit_1 Time",
                                    "Param": {
                                        "feature": "PECI_PKG_PL1_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_1 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 164,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_1 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 165,
                                    "Name": "PECI Pkg Power Limit_2 Enabled",
                                    "Param": {
                                        "feature": "PECI_PKG_PL2_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_2 Enabled",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 165,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_2 Enabled, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 166,
                                    "Name": "PECI Pkg Power Limit_2 Power",
                                    "Param": {
                                        "feature": "PECI_PKG_PL2_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_2 Power",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 166,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_2 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 167,
                                    "Name": "PECI Pkg Power Limit_2 Time",
                                    "Param": {
                                        "feature": "PECI_PKG_PL2_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Pkg Power Limit_2 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 167,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, PECI Pkg Power Limit_2 Time, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 168,
                                    "Name": "MSR Psys Power Limit_1 Enabled",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL1_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_1 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 168,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_1 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 169,
                                    "Name": "MSR Psys Power Limit_1 Critical Clamp",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL1_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_1 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 169,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_1 Critical Clamp, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 170,
                                    "Name": "MSR Psys Power Limit_1 Power",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL1_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_1 Power",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 170,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_1 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 171,
                                    "Name": "MSR Psys Power Limit_1 Time",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL1_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_1 Time",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 171,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_1 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 172,
                                    "Name": "MSR Psys Power Limit_2 Enabled",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL2_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_2 Enabled",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 172,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_2 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 173,
                                    "Name": "MSR Psys Power Limit_2 Power",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL2_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_2 Power",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 173,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_2 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 174,
                                    "Name": "MSR Psys Power Limit_2 Critical Clamp",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL2_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_2 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 174,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_2 Critical Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 175,
                                    "Name": "MSR Psys Power Limit_2 Time",
                                    "Param": {
                                        "feature": "MSR_PSYS_PL2_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Psys Power Limit_2 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 175,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, MSR Psys Power Limit_2 Time, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 176,
                                    "Name": "Peci Psys Power Limit_1 Enabled",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL1_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_1 Enabled",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 176,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_1 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 177,
                                    "Name": "Peci Psys Power Limit_1 Critical Clamp",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL1_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_1 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 177,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_1 Critical Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 178,
                                    "Name": "Peci Psys Power Limit_1 Power",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL1_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_1 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 178,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_1 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 179,
                                    "Name": "Peci Psys Power Limit_1 Time",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL1_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_1 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 179,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_1 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 180,
                                    "Name": "Peci Psys Power Limit_2 Enabled",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL2_ENABLE_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_2 Enabled",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 180,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_2 Enabled, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 181,
                                    "Name": "Peci Psys Power Limit_2 Critical Clamp",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL2_CRITICAL_CLAMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_2 Critical Clamp",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 181,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_2 Critical Clamp, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 182,
                                    "Name": "Peci Psys Power Limit_2 Power",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL2_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_2 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 182,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_2 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 183,
                                    "Name": "Peci Psys Power Limit_2 Time",
                                    "Param": {
                                        "feature": "PECI_PSYS_PL2_TIME",
                                        "groupName": "Turbo Parameters",
                                        "name": "Peci Psys Power Limit_2 Time",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 183,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, Peci Psys Power Limit_2 Time, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 184,
                                    "Name": "PECI Power Limit_4 Power",
                                    "Param": {
                                        "feature": "PECI_PL4_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI Power Limit_4 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 184,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, PECI Power Limit_4 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 185,
                                    "Name": "MSR Power Limit_4 Power",
                                    "Param": {
                                        "feature": "MSR_PL4_POWER",
                                        "groupName": "Turbo Parameters",
                                        "name": "MSR Power Limit_4 Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 185,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MSR Power Limit_4 Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 186,
                                    "Name": "IA VR IccMax",
                                    "Param": {
                                        "feature": "IA_VR_IMAX",
                                        "groupName": "Turbo Parameters",
                                        "name": "IA VR IccMax",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 186,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Turbo Parameters, IA VR IccMax, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 187,
                                    "Name": "GT VR IccMax",
                                    "Param": {
                                        "feature": "GT_VR_IMAX",
                                        "groupName": "Turbo Parameters",
                                        "name": "GT VR IccMax",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 187,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Turbo Parameters, GT VR IccMax, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 188,
                                    "Name": "VCCIN IccMax",
                                    "Param": {
                                        "feature": "VCCIN_IMAX",
                                        "groupName": "Turbo Parameters",
                                        "name": "VCCIN IccMax",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 188,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Turbo Parameters, VCCIN IccMax, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 189,
                                    "Name": "IA VR TDC Current Limit",
                                    "Param": {
                                        "feature": "IA_VR_TDC_POWERLIMIT",
                                        "groupName": "Turbo Parameters",
                                        "name": "IA VR TDC Current Limit",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 189,
                                        "unit": "Ampere"
                                    },
                                    "Row": "Turbo Parameters, IA VR TDC Current Limit, NA, Ampere",
                                    "isSelected": false,
                                    "unit": "(Ampere)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 190,
                                    "Name": "IA VR TDC Tau",
                                    "Param": {
                                        "feature": "IA_VR_TDC_TAU",
                                        "groupName": "Turbo Parameters",
                                        "name": "IA VR TDC Tau",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 190,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, IA VR TDC Tau, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 191,
                                    "Name": "GT VR TDC Current Limit",
                                    "Param": {
                                        "feature": "GT_VR_TDC_POWERLIMIT",
                                        "groupName": "Turbo Parameters",
                                        "name": "GT VR TDC Current Limit",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 191,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, GT VR TDC Current Limit, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 192,
                                    "Name": "GT VR TDC Tau",
                                    "Param": {
                                        "feature": "GT_VR_TDC_TAU",
                                        "groupName": "Turbo Parameters",
                                        "name": "GT VR TDC Tau",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 192,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, GT VR TDC Tau, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 193,
                                    "Name": "VCCIN TDC Current Limit",
                                    "Param": {
                                        "feature": "VCCIN_VR_TDC_POWERLIMIT",
                                        "groupName": "Turbo Parameters",
                                        "name": "VCCIN TDC Current Limit",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 193,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, VCCIN TDC Current Limit, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 194,
                                    "Name": "VCCIN TDC Tau",
                                    "Param": {
                                        "feature": "VCCIN_TDC_TAU",
                                        "groupName": "Turbo Parameters",
                                        "name": "VCCIN TDC Tau",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 194,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, VCCIN TDC Tau, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 195,
                                    "Name": "Psys Pmax",
                                    "Param": {
                                        "feature": "PSYS_PMAX",
                                        "groupName": "Turbo Parameters",
                                        "name": "Psys Pmax",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 195,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, Psys Pmax, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 196,
                                    "Name": "TjAvg Temperature",
                                    "Param": {
                                        "feature": "TJAVG_TEMP",
                                        "groupName": "Turbo Parameters",
                                        "name": "TjAvg Temperature",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 196,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Turbo Parameters, TjAvg Temperature, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 197,
                                    "Name": "TjAvg Tau",
                                    "Param": {
                                        "feature": "TJAVG_TAU",
                                        "groupName": "Turbo Parameters",
                                        "name": "TjAvg Tau",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 197,
                                        "unit": "Seconds"
                                    },
                                    "Row": "Turbo Parameters, TjAvg Tau, NA, Seconds",
                                    "isSelected": true,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 198,
                                    "Name": "PECI PL4 offset",
                                    "Param": {
                                        "feature": "PECI_PL4_OFFSET",
                                        "groupName": "Turbo Parameters",
                                        "name": "PECI PL4 offset",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 198,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, PECI PL4 offset, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 199,
                                    "Name": "MMIO PL4 Offset",
                                    "Param": {
                                        "feature": "MMIO_PL4_OffSET",
                                        "groupName": "Turbo Parameters",
                                        "name": "MMIO PL4 Offset",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 199,
                                        "unit": "Watts"
                                    },
                                    "Row": "Turbo Parameters, MMIO PL4 Offset, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 200,
                                    "Name": "IA Thermal Status",
                                    "Param": {
                                        "feature": "IA_THERMAL_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "IA Thermal Status",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 200,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, IA Thermal Status, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 201,
                                    "Name": "GT Thermal Status",
                                    "Param": {
                                        "feature": "GT_THERMAL_STATUS",
                                        "groupName": "Turbo Parameters",
                                        "name": "GT Thermal Status",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 201,
                                        "unit": ""
                                    },
                                    "Row": "Turbo Parameters, GT Thermal Status, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "Turbo Parameters",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 202,
                            "Name": "Config TDP",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 203,
                                    "Name": "isConfigTDPSupported",
                                    "Param": {
                                        "feature": "CONFIG_TDP_STATUS",
                                        "groupName": "Config TDP",
                                        "name": "isConfigTDPSupported",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 203,
                                        "unit": ""
                                    },
                                    "Row": "Config TDP, isConfigTDPSupported, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 204,
                                    "Name": "numberOfConfigTDPLevels",
                                    "Param": {
                                        "feature": "TDP_LEVELS",
                                        "groupName": "Config TDP",
                                        "name": "numberOfConfigTDPLevels",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 204,
                                        "unit": ""
                                    },
                                    "Row": "Config TDP, numberOfConfigTDPLevels, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 205,
                                    "Name": "isConfigTDPLocked",
                                    "Param": {
                                        "feature": "CONFIG_TDP_LOCK_STATUS",
                                        "groupName": "Config TDP",
                                        "name": "isConfigTDPLocked",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 205,
                                        "unit": ""
                                    },
                                    "Row": "Config TDP, isConfigTDPLocked, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 206,
                                    "Name": "CurrentTDPLevel",
                                    "Param": {
                                        "feature": "CUR_TDP_LEVEL",
                                        "groupName": "Config TDP",
                                        "name": "CurrentTDPLevel",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 206,
                                        "unit": ""
                                    },
                                    "Row": "Config TDP, CurrentTDPLevel, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 207,
                                    "Name": "NominalTDPFrequency",
                                    "Param": {
                                        "feature": "NOMINAL_TDP_FREQ",
                                        "groupName": "Config TDP",
                                        "name": "NominalTDPFrequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 207,
                                        "unit": "MHz"
                                    },
                                    "Row": "Config TDP, NominalTDPFrequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 208,
                                    "Name": "Turbo Activation Ratio",
                                    "Param": {
                                        "feature": "MAX_TURBO_ACT_RATIO",
                                        "groupName": "Config TDP",
                                        "name": "Turbo Activation Ratio",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 208,
                                        "unit": ""
                                    },
                                    "Row": "Config TDP, Turbo Activation Ratio, NA, ",
                                    "isSelected": true,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 209,
                                    "Name": "Package TDP Power",
                                    "Param": {
                                        "feature": "PKG_TDP_POWER",
                                        "groupName": "Config TDP",
                                        "name": "Package TDP Power",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 209,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, Package TDP Power, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 210,
                                    "Name": "CTDP1-TDPFrequency",
                                    "Param": {
                                        "feature": "CTDP_FREQ_1",
                                        "groupName": "Config TDP",
                                        "name": "CTDP1-TDPFrequency",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 210,
                                        "unit": "MHz"
                                    },
                                    "Row": "Config TDP, CTDP1-TDPFrequency, NA, MHz",
                                    "isSelected": true,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 211,
                                    "Name": "CTDP1-PackageMinPower",
                                    "Param": {
                                        "feature": "CTDP_PKG_MIN_POWER_1",
                                        "groupName": "Config TDP",
                                        "name": "CTDP1-PackageMinPower",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 211,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, CTDP1-PackageMinPower, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 212,
                                    "Name": "CTDP1-PackageMaxPower",
                                    "Param": {
                                        "feature": "CTDP_PKG_MAX_POWER_1",
                                        "groupName": "Config TDP",
                                        "name": "CTDP1-PackageMaxPower",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 212,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, CTDP1-PackageMaxPower, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 213,
                                    "Name": "CTDP1-PackageTDP",
                                    "Param": {
                                        "feature": "CTDP_PKG_TDP_1",
                                        "groupName": "Config TDP",
                                        "name": "CTDP1-PackageTDP",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 213,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, CTDP1-PackageTDP, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 214,
                                    "Name": "CTDP2-TDPFrequency",
                                    "Param": {
                                        "feature": "CTDP_FREQ_2",
                                        "groupName": "Config TDP",
                                        "name": "CTDP2-TDPFrequency",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 214,
                                        "unit": "MHz"
                                    },
                                    "Row": "Config TDP, CTDP2-TDPFrequency, NA, MHz",
                                    "isSelected": true,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 215,
                                    "Name": "CTDP2-PackageMinPower",
                                    "Param": {
                                        "feature": "CTDP_PKG_MIN_POWER_2",
                                        "groupName": "Config TDP",
                                        "name": "CTDP2-PackageMinPower",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 215,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, CTDP2-PackageMinPower, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 216,
                                    "Name": "CTDP2-PackageMaxPower",
                                    "Param": {
                                        "feature": "CTDP_PKG_MAX_POWER_2",
                                        "groupName": "Config TDP",
                                        "name": "CTDP2-PackageMaxPower",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 216,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, CTDP2-PackageMaxPower, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 217,
                                    "Name": "CTDP2-PackageTDP",
                                    "Param": {
                                        "feature": "CTDP_PKG_TDP_2",
                                        "groupName": "Config TDP",
                                        "name": "CTDP2-PackageTDP",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 217,
                                        "unit": "Watts"
                                    },
                                    "Row": "Config TDP, CTDP2-PackageTDP, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                }
                            ],
                            "ToolTip": "Config TDP",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 218,
                            "Name": "Voltage",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 219,
                                    "Name": "IA Target voltage",
                                    "Param": {
                                        "feature": "IA_TARGET_VOLTAGE",
                                        "groupName": "Voltage",
                                        "name": "IA Target voltage",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 219,
                                        "unit": "Volts"
                                    },
                                    "Row": "Voltage, IA Target voltage, NA, Volts",
                                    "isSelected": false,
                                    "unit": "(Volts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 220,
                                    "Name": "GT Target Voltage",
                                    "Param": {
                                        "feature": "GT_TARGET_VOLTAGE",
                                        "groupName": "Voltage",
                                        "name": "GT Target Voltage",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 220,
                                        "unit": "Volts"
                                    },
                                    "Row": "Voltage, GT Target Voltage, NA, Volts",
                                    "isSelected": false,
                                    "unit": "(Volts)"
                                }
                            ],
                            "ToolTip": "Voltage",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 221,
                            "Name": "Gfx Component",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 222,
                                    "Name": "Current Unslice-Gfx Frequency",
                                    "Param": {
                                        "feature": "CUR_UNSLICE_GFX_FREQ",
                                        "groupName": "Gfx Component",
                                        "name": "Current Unslice-Gfx Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 222,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, Current Unslice-Gfx Frequency, NA, MHz",
                                    "isSelected": true,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 223,
                                    "Name": "Current Slice-Gfx Frequency",
                                    "Param": {
                                        "feature": "CUR_SLICE_GFX_FREQ",
                                        "groupName": "Gfx Component",
                                        "name": "Current Slice-Gfx Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 223,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, Current Slice-Gfx Frequency, NA, MHz",
                                    "isSelected": true,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 224,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "GFX_DTS",
                                        "groupName": "Gfx Component",
                                        "name": "DTS",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 224,
                                        "unit": "Degree C"
                                    },
                                    "Row": "Gfx Component, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 225,
                                    "Name": "PStateLimit",
                                    "Param": {
                                        "feature": "PSTATE_LIMIT",
                                        "groupName": "Gfx Component",
                                        "name": "PStateLimit",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 225,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, PStateLimit, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 226,
                                    "Name": "P0 Frequency",
                                    "Param": {
                                        "feature": "GFX_P0_FREQ",
                                        "groupName": "Gfx Component",
                                        "name": "P0 Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 226,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, P0 Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 227,
                                    "Name": "P1 Frequency",
                                    "Param": {
                                        "feature": "GFX_P1_FREQ",
                                        "groupName": "Gfx Component",
                                        "name": "P1 Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 227,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, P1 Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 228,
                                    "Name": "PN Frequency",
                                    "Param": {
                                        "feature": "GFX_PN_FREQ",
                                        "groupName": "Gfx Component",
                                        "name": "PN Frequency",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 228,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, PN Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 229,
                                    "Name": "RC6 Percentage",
                                    "Param": {
                                        "feature": "RC6",
                                        "groupName": "Gfx Component",
                                        "name": "RC6 Percentage",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 229,
                                        "unit": "MHz"
                                    },
                                    "Row": "Gfx Component, RC6 Percentage, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 230,
                                    "Name": "eDRAM Frequency",
                                    "Param": {
                                        "feature": "EDRAM_FREQ",
                                        "groupName": "Gfx Component",
                                        "name": "eDRAM Frequency",
                                        "reader": "CPU",
                                        "type": "double",
                                        "uid": 230,
                                        "unit": "GHz"
                                    },
                                    "Row": "Gfx Component, eDRAM Frequency, NA, GHz",
                                    "isSelected": false,
                                    "unit": "(GHz)"
                                }
                            ],
                            "ToolTip": "Gfx Component",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 231,
                            "Name": "CPU Workload",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 232,
                                    "Name": "CPU0",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_0",
                                        "groupName": "CPU Workload",
                                        "name": "CPU0",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 232,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU0, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 233,
                                    "Name": "CPU1",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_1",
                                        "groupName": "CPU Workload",
                                        "name": "CPU1",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 233,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU1, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 234,
                                    "Name": "CPU2",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_2",
                                        "groupName": "CPU Workload",
                                        "name": "CPU2",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 234,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU2, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 235,
                                    "Name": "CPU3",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_3",
                                        "groupName": "CPU Workload",
                                        "name": "CPU3",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 235,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU3, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 236,
                                    "Name": "CPU4",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_4",
                                        "groupName": "CPU Workload",
                                        "name": "CPU4",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 236,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU4, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 237,
                                    "Name": "CPU5",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_5",
                                        "groupName": "CPU Workload",
                                        "name": "CPU5",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 237,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU5, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 238,
                                    "Name": "CPU6",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_6",
                                        "groupName": "CPU Workload",
                                        "name": "CPU6",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 238,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU6, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 239,
                                    "Name": "CPU7",
                                    "Param": {
                                        "feature": "CPU_WORKLOAD_7",
                                        "groupName": "CPU Workload",
                                        "name": "CPU7",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 239,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, CPU7, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 240,
                                    "Name": "GFX",
                                    "Param": {
                                        "feature": "GFX_WORKLOAD",
                                        "groupName": "CPU Workload",
                                        "name": "GFX",
                                        "reader": "CPU",
                                        "type": "int",
                                        "uid": 240,
                                        "unit": "Percentage"
                                    },
                                    "Row": "CPU Workload, GFX, NA, Percentage",
                                    "isSelected": false,
                                    "unit": "(Percentage)"
                                }
                            ],
                            "ToolTip": "CPU Workload",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 241,
                            "Name": "Power Options",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 242,
                                    "Name": "Power Plan",
                                    "Param": {
                                        "feature": "POWER_PLAN",
                                        "groupName": "Power Options",
                                        "name": "Power Plan",
                                        "reader": "CPU",
                                        "type": "string",
                                        "uid": 242,
                                        "unit": ""
                                    },
                                    "Row": "Power Options, Power Plan, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "Power Options",
                            "isSelected": false
                        }
                    ],
                    "isSelected": false
                },
                {
                    "Header": "",
                    "Index": 243,
                    "Name": "CState",
                    "ToolTip": "CState",
                    "Treelist": [
                        {
                            "Header": "",
                            "Index": 244,
                            "Name": "Pkg CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 245,
                                    "Name": "C2",
                                    "Param": {
                                        "feature": "PKG_C2",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C2",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 245,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C2, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 246,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "PKG_C3",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 246,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 247,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "PKG_C6",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 247,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 248,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "PKG_C7",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 248,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 249,
                                    "Name": "C8",
                                    "Param": {
                                        "feature": "PKG_C8",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C8",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 249,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C8, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 250,
                                    "Name": "C9",
                                    "Param": {
                                        "feature": "PKG_C9",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C9",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 250,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C9, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 251,
                                    "Name": "C10",
                                    "Param": {
                                        "feature": "PKG_C10",
                                        "groupName": "Pkg CState Residency",
                                        "name": "C10",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 251,
                                        "unit": "percent"
                                    },
                                    "Row": "Pkg CState Residency, C10, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "Pkg CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 252,
                            "Name": "CPU0 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 253,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU0 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 253,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU0 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 254,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU0 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 254,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU0 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 255,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU0 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 255,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU0 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU0 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 256,
                            "Name": "CPU1 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 257,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU1 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 257,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU1 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 258,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU1 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 258,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU1 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 259,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU1 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 259,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU1 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU1 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 260,
                            "Name": "CPU2 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 261,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU2 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 261,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU2 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 262,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU2 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 262,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU2 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 263,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU2 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 263,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU2 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU2 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 264,
                            "Name": "CPU3 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 265,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU3 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 265,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU3 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 266,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU3 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 266,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU3 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 267,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU3 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 267,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU3 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU3 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 268,
                            "Name": "CPU4 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 269,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU4 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 269,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU4 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 270,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU4 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 270,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU4 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 271,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU4 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 271,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU4 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU4 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 272,
                            "Name": "CPU5 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 273,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU5 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 273,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU5 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 274,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU5 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 274,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU5 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 275,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU5 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 275,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU5 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU5 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 276,
                            "Name": "CPU6 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 277,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU6 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 277,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU6 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 278,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU6 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 278,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU6 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 279,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU6 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 279,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU6 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU6 CState Residency",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 280,
                            "Name": "CPU7 CState Residency",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 281,
                                    "Name": "C3",
                                    "Param": {
                                        "feature": "CORE_C3",
                                        "groupName": "CPU7 CState Residency",
                                        "name": "C3",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 281,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU7 CState Residency, C3, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 282,
                                    "Name": "C6",
                                    "Param": {
                                        "feature": "CORE_C6",
                                        "groupName": "CPU7 CState Residency",
                                        "name": "C6",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 282,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU7 CState Residency, C6, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 283,
                                    "Name": "C7",
                                    "Param": {
                                        "feature": "CORE_C7",
                                        "groupName": "CPU7 CState Residency",
                                        "name": "C7",
                                        "reader": "CState",
                                        "type": "double",
                                        "uid": 283,
                                        "unit": "percent"
                                    },
                                    "Row": "CPU7 CState Residency, C7, NA, percent",
                                    "isSelected": false,
                                    "unit": "(percent)"
                                }
                            ],
                            "ToolTip": "CPU7 CState Residency",
                            "isSelected": false
                        }
                    ],
                    "isSelected": false
                },
                {
                    "Header": "",
                    "Index": 287,
                    "Name": "Memory",
                    "ToolTip": "Memory",
                    "Treelist": [
                        {
                            "Header": "",
                            "Index": 288,
                            "Name": "DDR Info",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 289,
                                    "Name": "DDR QCLK Frequency",
                                    "Param": {
                                        "feature": "MEM_FREQ",
                                        "groupName": "DDR Info",
                                        "name": "DDR QCLK Frequency",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 289,
                                        "unit": "MHz"
                                    },
                                    "Row": "DDR Info, DDR QCLK Frequency, NA, MHz",
                                    "isSelected": false,
                                    "unit": "(MHz)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 290,
                                    "Name": "OLTM Enable",
                                    "Param": {
                                        "feature": "OLTM_EN",
                                        "groupName": "DDR Info",
                                        "name": "OLTM Enable",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 290,
                                        "unit": ""
                                    },
                                    "Row": "DDR Info, OLTM Enable, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 291,
                                    "Name": "CLTM Enable",
                                    "Param": {
                                        "feature": "CLTM_EN",
                                        "groupName": "DDR Info",
                                        "name": "CLTM Enable",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 291,
                                        "unit": ""
                                    },
                                    "Row": "DDR Info, CLTM Enable, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 292,
                                    "Name": "Refresh 2x Mode",
                                    "Param": {
                                        "feature": "REF_MODE",
                                        "groupName": "DDR Info",
                                        "name": "Refresh 2x Mode",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 292,
                                        "unit": ""
                                    },
                                    "Row": "DDR Info, Refresh 2x Mode, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 293,
                                    "Name": "Extts Enable",
                                    "Param": {
                                        "feature": "EXTTS_EN",
                                        "groupName": "DDR Info",
                                        "name": "Extts Enable",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 293,
                                        "unit": ""
                                    },
                                    "Row": "DDR Info, Extts Enable, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "DDR Info",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 294,
                            "Name": "DDR Power Meter",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 295,
                                    "Name": "DDR Energy Status DdrPower",
                                    "Param": {
                                        "feature": "DDR_POWER",
                                        "groupName": "DDR Power Meter",
                                        "name": "DDR Energy Status DdrPower",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 295,
                                        "unit": "Watts"
                                    },
                                    "Row": "DDR Power Meter, DDR Energy Status DdrPower, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                }
                            ],
                            "ToolTip": "DDR Power Meter",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 296,
                            "Name": "DDR RAPL Info",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 297,
                                    "Name": "MSR DDR RAPL TimeWindow1",
                                    "Param": {
                                        "feature": "MSR_DDR_RAPL_TIME_WIN1",
                                        "groupName": "DDR RAPL Info",
                                        "name": "MSR DDR RAPL TimeWindow1",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 297,
                                        "unit": "Seconds"
                                    },
                                    "Row": "DDR RAPL Info, MSR DDR RAPL TimeWindow1, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 298,
                                    "Name": "MSR DDR RAPL PowerLimit1",
                                    "Param": {
                                        "feature": "MSR_DDR_RAPL_PL1",
                                        "groupName": "DDR RAPL Info",
                                        "name": "MSR DDR RAPL PowerLimit1",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 298,
                                        "unit": "Watts"
                                    },
                                    "Row": "DDR RAPL Info, MSR DDR RAPL PowerLimit1, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 299,
                                    "Name": "MSR DDR RAPL TimeWindow2",
                                    "Param": {
                                        "feature": "MSR_DDR_RAPL_TIME_WIN2",
                                        "groupName": "DDR RAPL Info",
                                        "name": "MSR DDR RAPL TimeWindow2",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 299,
                                        "unit": "Seconds"
                                    },
                                    "Row": "DDR RAPL Info, MSR DDR RAPL TimeWindow2, NA, Seconds",
                                    "isSelected": false,
                                    "unit": "(Seconds)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 300,
                                    "Name": "MSR DDR RAPL PowerLimit2",
                                    "Param": {
                                        "feature": "MSR_DDR_RAPL_PL2",
                                        "groupName": "DDR RAPL Info",
                                        "name": "MSR DDR RAPL PowerLimit2",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 300,
                                        "unit": "Watts"
                                    },
                                    "Row": "DDR RAPL Info, MSR DDR RAPL PowerLimit2, NA, Watts",
                                    "isSelected": false,
                                    "unit": "(Watts)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 301,
                                    "Name": "DDR Throttle Duration due to RAPL",
                                    "Param": {
                                        "feature": "DDR_THROT_DUR_RAPL",
                                        "groupName": "DDR RAPL Info",
                                        "name": "DDR Throttle Duration due to RAPL",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 301,
                                        "unit": ""
                                    },
                                    "Row": "DDR RAPL Info, DDR Throttle Duration due to RAPL, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 302,
                                    "Name": "MSR DDR Throttle Counter",
                                    "Param": {
                                        "feature": "MSR_DDR_THROT_COUNTR",
                                        "groupName": "DDR RAPL Info",
                                        "name": "MSR DDR Throttle Counter",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 302,
                                        "unit": ""
                                    },
                                    "Row": "DDR RAPL Info, MSR DDR Throttle Counter, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 303,
                                    "Name": "DDR Energy Status EWMA",
                                    "Param": {
                                        "feature": "DDR_ENRGY_STAT_EWMA",
                                        "groupName": "DDR RAPL Info",
                                        "name": "DDR Energy Status EWMA",
                                        "reader": "Memory",
                                        "type": "double",
                                        "uid": 303,
                                        "unit": ""
                                    },
                                    "Row": "DDR RAPL Info, DDR Energy Status EWMA, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "DDR RAPL Info",
                            "isSelected": false
                        },
                        {
                            "Header": "",
                            "Index": 304,
                            "Name": "Memory Workload",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 305,
                                    "Name": "Write with Delay",
                                    "Param": {
                                        "feature": "WR_DELAY",
                                        "groupName": "Memory Workload",
                                        "name": "Write with Delay",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 305,
                                        "unit": "Ratio"
                                    },
                                    "Row": "Memory Workload, Write with Delay, NA, Ratio",
                                    "isSelected": false,
                                    "unit": "(Ratio)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 306,
                                    "Name": "Read with Delay",
                                    "Param": {
                                        "feature": "RD_DELAY",
                                        "groupName": "Memory Workload",
                                        "name": "Read with Delay",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 306,
                                        "unit": "Ratio"
                                    },
                                    "Row": "Memory Workload, Read with Delay, NA, Ratio",
                                    "isSelected": false,
                                    "unit": "(Ratio)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 307,
                                    "Name": "Write/Read Ratio",
                                    "Param": {
                                        "feature": "WR_RD_RATIO",
                                        "groupName": "Memory Workload",
                                        "name": "Write/Read Ratio",
                                        "reader": "Memory",
                                        "type": "int",
                                        "uid": 307,
                                        "unit": "Ratio"
                                    },
                                    "Row": "Memory Workload, Write/Read Ratio, NA, Ratio",
                                    "isSelected": false,
                                    "unit": "(Ratio)"
                                }
                            ],
                            "ToolTip": "Memory Workload",
                            "isSelected": false
                        }
                    ],
                    "isSelected": false
                },
                {
                    "Header": "",
                    "Index": 309,
                    "Name": "PCH",
                    "ToolTip": "PCH",
                    "Treelist": [
                        {
                            "Header": "",
                            "Index": 310,
                            "Name": "PCH",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 311,
                                    "Name": "DTS",
                                    "Param": {
                                        "feature": "PCH_DTS",
                                        "groupName": "PCH",
                                        "name": "DTS",
                                        "reader": "PCH",
                                        "type": "int",
                                        "uid": 311,
                                        "unit": "Degree C"
                                    },
                                    "Row": "PCH, DTS, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 312,
                                    "Name": "Cat Trip Point",
                                    "Param": {
                                        "feature": "PCH_CAT_TRIP_POINT",
                                        "groupName": "PCH",
                                        "name": "Cat Trip Point",
                                        "reader": "PCH",
                                        "type": "int",
                                        "uid": 312,
                                        "unit": "Degree C"
                                    },
                                    "Row": "PCH, Cat Trip Point, NA, Degree C",
                                    "isSelected": false,
                                    "unit": "(Degree C)"
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 313,
                                    "Name": "Throttling Level",
                                    "Param": {
                                        "feature": "THROTTLING_LEVEL",
                                        "groupName": "PCH",
                                        "name": "Throttling Level",
                                        "reader": "PCH",
                                        "type": "string",
                                        "uid": 313,
                                        "unit": ""
                                    },
                                    "Row": "PCH, Throttling Level, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 314,
                                    "Name": "PCH Power",
                                    "Param": {
                                        "feature": "PCH_POWER",
                                        "groupName": "PCH",
                                        "name": "PCH Power",
                                        "reader": "PCH",
                                        "type": "double",
                                        "uid": 314,
                                        "unit": "Watts"
                                    },
                                    "Row": "PCH, PCH Power, NA, Watts",
                                    "isSelected": true,
                                    "unit": "(Watts)"
                                }
                            ],
                            "ToolTip": "PCH",
                            "isSelected": false
                        }
                    ],
                    "isSelected": false
                },
                {
                    "Header": "",
                    "Index": 315,
                    "Name": "Topology",
                    "ToolTip": "Topology",
                    "Treelist": [
                        {
                            "Header": "",
                            "Index": 316,
                            "Name": "CPU Topology",
                            "SubTreeList": [
                                {
                                    "GraphEnabled": "No",
                                    "Index": 317,
                                    "Name": "Number of Physical Processor",
                                    "Param": {
                                        "feature": "TOTAL_PROC",
                                        "groupName": "CPU Topology",
                                        "name": "Number of Physical Processor",
                                        "reader": "Topology",
                                        "type": "int",
                                        "uid": 317,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Number of Physical Processor, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 318,
                                    "Name": "Number of Cores",
                                    "Param": {
                                        "feature": "TOTAL_PHY_CORES",
                                        "groupName": "CPU Topology",
                                        "name": "Number of Cores",
                                        "reader": "Topology",
                                        "type": "int",
                                        "uid": 318,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Number of Cores, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 319,
                                    "Name": "Number of logical Cores",
                                    "Param": {
                                        "feature": "TOTAL_LOG_CORES",
                                        "groupName": "CPU Topology",
                                        "name": "Number of logical Cores",
                                        "reader": "Topology",
                                        "type": "int",
                                        "uid": 319,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Number of logical Cores, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 320,
                                    "Name": "HT Capability",
                                    "Param": {
                                        "feature": "HT_CAPABILITY",
                                        "groupName": "CPU Topology",
                                        "name": "HT Capability",
                                        "reader": "Topology",
                                        "type": "string",
                                        "uid": 320,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, HT Capability, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 321,
                                    "Name": "Physical Core-0",
                                    "Param": {
                                        "feature": "PHYCORE_0",
                                        "groupName": "CPU Topology",
                                        "name": "Physical Core-0",
                                        "reader": "Topology",
                                        "type": "string",
                                        "uid": 321,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Physical Core-0, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 322,
                                    "Name": "Physical Core-1",
                                    "Param": {
                                        "feature": "PHYCORE_1",
                                        "groupName": "CPU Topology",
                                        "name": "Physical Core-1",
                                        "reader": "Topology",
                                        "type": "string",
                                        "uid": 322,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Physical Core-1, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 323,
                                    "Name": "Physical Core-2",
                                    "Param": {
                                        "feature": "PHYCORE_2",
                                        "groupName": "CPU Topology",
                                        "name": "Physical Core-2",
                                        "reader": "Topology",
                                        "type": "string",
                                        "uid": 323,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Physical Core-2, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                },
                                {
                                    "GraphEnabled": "No",
                                    "Index": 324,
                                    "Name": "Physical Core-3",
                                    "Param": {
                                        "feature": "PHYCORE_3",
                                        "groupName": "CPU Topology",
                                        "name": "Physical Core-3",
                                        "reader": "Topology",
                                        "type": "string",
                                        "uid": 324,
                                        "unit": ""
                                    },
                                    "Row": "CPU Topology, Physical Core-3, NA, ",
                                    "isSelected": false,
                                    "unit": ""
                                }
                            ],
                            "ToolTip": "CPU Topology",
                            "isSelected": false
                        }
                    ],
                    "isSelected": false
                }
            ],
            "isClosed": "false",
            "isSelected": false
        }
    ]
}

function recursion(obj){
    for( let i in obj){
         if(typeof obj[i] === "object"){
            recursion(obj[i])
         }
        
    }
    if(obj.Index === 99){
        console.log(obj)
    }
}
recursion(objectData)
// console.log(objectData);

// objectData.Data.map(obj=>obj.Treelist.map(obj1=>{obj1.Treelist.map(obj2=>{obj2.SubTreeList.map(obj3=>{
//     if(obj3.Index === 9){
//         console.log(obj3);
//     }
// })})}))


