const LAYOUT_1 = [
    //0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'E'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
]

const PATH_2 = [{
    row: 9,
    column: 15
}, {
    row: 9,
    column: 16
}, {
    row: 9,
    column: 17
}, {
    row: 9,
    column: 18
}, {
    row: 9,
    column: 19
}]

const PATH_0 = [{
    row: 2,
    column: 0
}, {
    row: 2,
    column: 1
}, {
    row: 2,
    column: 2
}, {
    row: 2,
    column: 3
}, {
    row: 3,
    column: 3
}, {
    row: 3,
    column: 4
}, {
    row: 4,
    column: 4
}, {
    row: 4,
    column: 5
}, {
    row: 5,
    column: 5
}, {
    row: 5,
    column: 6
}, {
    row: 6,
    column: 6
}, {
    row: 7,
    column: 6
}, {
    row: 8,
    column: 6
}, {
    row: 8,
    column: 7
}, {
    row: 9,
    column: 7
}, {
    row: 10,
    column: 7
}, {
    row: 11,
    column: 7
}, {
    row: 11,
    column: 8
}, {
    row: 12,
    column: 8
}, {
    row: 12,
    column: 9
}, {
    row: 13,
    column: 9
}, {
    row: 13,
    column: 10
}, {
    row: 14,
    column: 10
}, {
    row: 14,
    column: 11
}, {
    row: 15,
    column: 11
}, {
    row: 15,
    column: 12
}, {
    row: 15,
    column: 13
}, {
    row: 15,
    column: 14
}, {
    row: 15,
    column: 15
}, {
    row: 14,
    column: 15
}, {
    row: 13,
    column: 15
}, {
    row: 12,
    column: 15
}, {
    row: 11,
    column: 15
}, {
    row: 10,
    column: 15
}, PATH_2];

const PATH_1 = [{
    row: 17,
    column: 0
}, {
    row: 17,
    column: 1
}, {
    row: 17,
    column: 2
}, {
    row: 17,
    column: 3
}, {
    row: 16,
    column: 3
}, {
    row: 16,
    column: 4
}, {
    row: 15,
    column: 4
}, {
    row: 15,
    column: 5
}, {
    row: 14,
    column: 5
}, {
    row: 14,
    column: 6
}, {
    row: 13,
    column: 6
}, {
    row: 12,
    column: 6
}, {
    row: 11,
    column: 6
}, {
    row: 11,
    column: 7
}, {
    row: 10,
    column: 7
}, {
    row: 9,
    column: 7
}, {
    row: 8,
    column: 7
}, {
    row: 8,
    column: 8
}, {
    row: 7,
    column: 8
}, {
    row: 7,
    column: 9
}, {
    row: 6,
    column: 9
}, {
    row: 6,
    column: 10
}, {
    row: 5,
    column: 10
}, {
    row: 5,
    column: 11
}, {
    row: 4,
    column: 11
}, {
    row: 4,
    column: 12
}, {
    row: 4,
    column: 13
}, {
    row: 4,
    column: 14
}, {
    row: 4,
    column: 15
}, {
    row: 5,
    column: 15
}, {
    row: 6,
    column: 15
}, {
    row: 7,
    column: 15
}, {
    row: 8,
    column: 15
}, PATH_2];

const MAP_1 = {
    layout: LAYOUT_1,
    paths: [PATH_0, PATH_1]
}