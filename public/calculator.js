// import { sectionsSlice } from "../../redux/slices/sections"


const readXlsxFile = require('read-excel-file/node')


class Calculator {
    constructor(sections, structuresProperty, intra, inter, seismicResistingFramesType) {
        this.intra = intra
        this.inter = inter
        this.structuresProperty = structuresProperty
        this.seismicResistingFramesType = seismicResistingFramesType
        this.sections = sections
        this.xDirection = []
        this.yDirection = []
        this.rows = []

    }


    async getResult() {
        const Gpi = this.G(this.sections.floorBeams.materials.e, this.sections.floorBeams.properties.I33[0])
        const Gpe = this.G(this.sections.ceiligBeams.materials.e, this.sections.ceiligBeams.properties.I33[0])

        const rho = this.Rho()
        if (this.seismicResistingFramesType === 'Braced frame') {
            if (rho <= 0.01) {
                await this.loadFile(__dirname + '/data/Boundary_Condition_Rigid.xlsx')
            } else if (rho > 0.01 && rho <= 0.05) {
                await this.loadFile(__dirname + "/data/Boundary Condition_Rho_0_01.xlsx")
            } else if (rho > 0.05 && rho <= 0.1) {
                await this.loadFile(__dirname + "/data/Boundary Condition_Rho_0_05.xlsx")
            } else if (rho > 0.1) {
                await this.loadFile(__dirname + "/data/Boundary Condition_0_1.xlsx")
            }
            const result = this.getData(Gpi, Gpe)
            const SRev = this.SRev()
            let report = ""
            if (SRev >= result) {
                report = "rigid"
            } else {
                report = "semi-rigid"
            }
            return [result, report, Gpi, Gpe, rho]
        } else {

            if (rho <= 0.01) {
                await this.loadFile(__dirname + "/data/Rigid_Boundary_Rigid.xlsx")
            } else if (rho > 0.01 && rho <= 0.2) {
                await this.loadFile(__dirname + "/data/Rigid_Boundary_Rho = 0.01.xlsx")
            } else if (rho > 0.2) {
                await this.loadFile(__dirname + '/data/Rigid_Boundary_Rho = 0.2.xlsx')
            }
            const result = this.getData(Gpi, Gpe)
            const SRev = this.SRev()
            let report = ""
            if (SRev >= result) {
                report = "rigid"
            } else {
                report = "semi-rigid"
            }
            return [result, report, Gpi, Gpe, rho]

        }

    }

    G(e, i33) {
        e = Number(e)
        i33 = Number(i33)
        const alpha = this.calculateAlpha(e, i33)
        return (alpha) * ((e * i33 / +this.structuresProperty.lengthOfSpan) / ((+this.sections.column.materials.e * +this.sections.column.properties.I33[0] / +this.structuresProperty.heightOfStorey)))

    }

    SRev() {
        return this.intra / (this.sections.column.materials.e * this.sections.column.properties.I33[0] / this.structuresProperty.heightOfStorey)
    }

    Rho() {
        return (this.sections.floorBeams.materials.e, this.sections.floorBeams.properties.I33[0]) / (this.structuresProperty.lengthOfSpan * this.intra)
    }

    calculateAlpha(e, i33) {
        e = Number(e)
        i33 = Number(i33)
        const rStar = (1 + 4 * (e * i33) / (+this.structuresProperty.lengthOfSpan * +this.intra)) * (1 + 4 * (e * i33) / (+this.structuresProperty.lengthOfSpan * +this.inter)) - ((1 + 4 * (e * i33) / (+this.structuresProperty.lengthOfSpan)) * (4 / (+this.intra * +this.inter)))
        const alpha = (1 + (2 * e * i33) / (+this.structuresProperty.lengthOfSpan * +this.intra)) / rStar
        return alpha

    }

    async loadFile(file) {
        this.rows = await readXlsxFile(file)
        this.rows.map((row, index) => {
                if (index === 0) {
                    row.map((item, innerIndex) => {
                        if (innerIndex !== 0) {
                            this.xDirection.push(item)
                        }
                        // this.xDirection.push([item, innerIndex + 1])
                    })
                } else {
                    this.yDirection.push(row[0])

                }
            }
        )
    }

    getData(x, y) {
        let upperXIndex = 0
        let upperYIndex = 0
        let reach = false
        this.xDirection.map((item, index) => {
                if (x <= item && !reach) {
                    upperXIndex = index
                    reach = true

                }
            }
        )
        reach = false
        this.yDirection.map((item, index) => {
                if (y <= item && !reach) {
                    upperYIndex = index
                    reach = true

                }
            }
        )

        const value1 = this.rows[upperYIndex][upperXIndex]
        const value2 = this.rows[upperYIndex + 1][upperXIndex + 1]
        return (value1 + value2) / 2
    }

}


module.exports = Calculator;