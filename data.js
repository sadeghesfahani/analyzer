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
                value: ""
            },
            {
                name: 'U2',
                value: ""
            },
            {
                name: 'U3',
                value: ""
            },
            {
                name: 'R1',
                value: ""
            },
            {
                name: 'R2',
                value: ""
            },
            {
                name: 'R3',
                value: ""
            },
        ],
        intraModularConnection: [{
                name: 'U1',
                value: ""
            },
            {
                name: 'U2',
                value: ""
            },
            {
                name: 'U3',
                value: ""
            },
            {
                name: 'R1',
                value: ""
            },
            {
                name: 'R2',
                value: ""
            },
            {
                name: 'R3',
                value: ""
            },
        ],
    },
    seismicResistingFramesType: "Braced frame",
    structuresProperty: {
        heightOfStorey: "",
        lengthOfSpan: ""
    },
    analyze: [{
            name: 'Design for ultimate limit state',
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
    ],
    temp:{}
}

module.exports = data;