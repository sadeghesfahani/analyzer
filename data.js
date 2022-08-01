const data = {
    materials: [],
    sections: {
        column: {},
        floorBeams: {},
        ceiligBeams: {},
    },
    connections: {
        interModularConnection: [{
                name: 'U1',
                check: false,
                value: ""
            },
            {
                name: 'U2',
                check: false,
                value: ""
            },
            {
                name: 'U3',
                check: false,
                value: ""
            },
            {
                name: 'R1',
                check: false,
                value: ""
            },
            {
                name: 'R2',
                check: false,
                value: ""
            },
            {
                name: 'R3',
                check: false,
                value: ""
            },
        ],
        intraModularConnection: [{
                name: 'U1',
                check: false,
                value: ""
            },
            {
                name: 'U2',
                check: false,
                value: ""
            },
            {
                name: 'U3',
                check: false,
                value: ""
            },
            {
                name: 'R1',
                check: false,
                value: ""
            },
            {
                name: 'R2',
                check: false,
                value: ""
            },
            {
                name: 'R3',
                check: false,
                value: ""
            },
        ],
    },
    seismicResistingFramesType: "",
    structuresProperty: {
        heightOfStorey: "",
        lengthOfSpan: ""
    },
    analyze: [{
            name: 'design for Ultimate limit state',
            check: false
        },
        {
            name: 'Design for serviceability',
            check: false
        },
        {
            name: 'Seismic performance factors',
            check: false
        },
    ]
}

module.exports = data;