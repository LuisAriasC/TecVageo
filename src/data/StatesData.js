function createData(id, type,destination, dates, cost, rating) {
    return {id, type, destination, dates, cost, rating };
}

export const rows = [
    createData(1, 'Playa', 'Cancun', '01/01/2017 - 07/01/2017', 20000 , 5),
    createData(2, 'Playa', 'Florida', '01/02/2017 - 07/02/2017', 35000, 4),
    createData(3, 'Ciudad', 'CDMX', '01/03/2017 - 07/03/2017', 10000, 3),
    createData(4, 'Ciudad', 'New York', '01/04/2017 - 07/04/2017', 40000, 5),
    createData(5, 'Pueblo', 'Metepec', '01/05/2017 - 07/05/2017', 5000, 5),
    createData(6, 'Pueblo', 'Queenstown', '01/06/2017 - 07/06/2017', 40000, 4),
    createData(7, 'Ecoturismo', 'La Marquesa', '01/07/2017 - 07/07/2017', 1000, 3),
    createData(8, 'Ecoturismo', 'Yosemite', '01/08/2017 - 07/08/2017', 20000, 4)
]