export const ganttChartFormat=[
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
];
export const mastertTableColumn=[
    {Header:'ID',accessor:'id'},
    {Header:'TITLE',accessor:'title'},
    {Header:'START_DATE',accessor:'startDate'},
    {Header:'END_DATE',accessor:'endDate'},
    {Header:'ASSIGNEE',accessor:'assignee'},
    {Header:'COST',accessor:'cost'},
    {Header:'COUNT',accessor:'count'}
]