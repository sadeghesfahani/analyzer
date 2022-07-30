const readXlsxFile = require('read-excel-file/node')

class Calculator {
    constructor() {
        this.xDirection = []
        this.yDirection = []
        this.rows = []

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
        return (value1 + value2)/2
    }

}


export default Calculator;