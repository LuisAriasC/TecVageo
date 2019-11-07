function createData(id, destination, dates, cost, rating) {
    return {id, destination, dates, cost, rating };
}

export const rows = [
    createData(1, 'Cancun', '01/01/2017 - 07/01/2017', 20000 , 5),
    createData(2, 'Florida', '01/02/2017 - 07/02/2017', 35000, 4),
    createData(3, 'CDMX', '01/03/2017 - 07/03/2017', 10000, 3),
    createData(4, 'New York', '01/04/2017 - 07/04/2017', 40000, 5),
    createData(5, 'Metepec', '01/05/2017 - 07/05/2017', 5000, 5),
    createData(6, 'Queenstown', '01/06/2017 - 07/06/2017', 40000, 4),
    createData(7, 'La Marquesa', '01/07/2017 - 07/07/2017', 1000, 3),
    createData(8, 'Yosemite', '01/08/2017 - 07/08/2017', 20000, 4)
]