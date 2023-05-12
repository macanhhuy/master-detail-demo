export function getData(): any[] {
  var rowData = [
    {
      activityId: '1',
      description: 'Theme Park',
      frequency: 'Resolving',
      startDate: '22/06/25',
      endDate: '22/12/31',
      type: 'Item',
      charge: '5.00',
      internalComments: 'test',
      detail: [
        {
          // these attributes appear in the top level rows of the grid
          name: 'Ireland',
          continent: 'Europe',
          language: 'English',
          code: 'ie',
          // these are used in the panel
          population: 4000000,
          summary: 'Master Drinkers',
        },
        // and then repeat for all the other countries
        {
          name: 'Spain',
          continent: 'Europe',
          language: 'Spanish',
          code: 'es',
          population: 4000000,
          summary: 'Bull Fighters',
        },
        {
          name: 'United Kingdom',
          continent: 'Europe',
          language: 'English',
          code: 'gb',
          population: 4000000,
          summary: 'Center of the World',
        },
        {
          name: 'France',
          continent: 'Europe',
          language: 'French',
          code: 'fr',
          population: 4000000,
          summary: 'Best Lovers',
        },
        {
          name: 'Germany',
          continent: 'Europe',
          language: 'German',
          code: 'de',
          population: 4000000,
          summary: 'Always on Time',
        }]
    },
    {
      activityId: '2',
      description: 'TEST',
      frequency: 'Daily',
      startDate: '22/06/23',
      endDate: '22/12/25',
      type: 'Guest',
      charge: '50.00',
      internalComments: 'test',
      detail: [{
        name: 'Peru',
        continent: 'South America',
        language: 'Spanish',
        code: 'pe',
        population: 4000000,
        summary: 'Paddington Bear',
      },
      {
        name: 'Venezuela',
        continent: 'South America',
        language: 'Spanish',
        code: 've',
        population: 4000000,
        summary: 'Never Been, Dunno',
      },
      {
        name: 'Uruguay',
        continent: 'South America',
        language: 'Spanish',
        code: 'uy',
        population: 4000000,
        summary: 'Excellent Food',
      }]
    }
  ];
  return rowData;
}
