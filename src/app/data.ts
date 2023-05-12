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
    }
  ];
  return rowData;
}

export function getChildData(): any[] {
  var rowData = [
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
    },
    {
      name: 'Sweden',
      continent: 'Europe',
      language: 'Swedish',
      code: 'se',
      population: 4000000,
      summary: 'Home of Vikings',
    },
    {
      name: 'Norway',
      continent: 'Europe',
      language: 'Norwegian',
      code: 'no',
      population: 4000000,
      summary: 'Best Vikings',
    },
    {
      name: 'Italy',
      continent: 'Europe',
      language: 'Italian',
      code: 'it',
      population: 4000000,
      summary: 'Pizza Pizza',
    },
    {
      name: 'Greece',
      continent: 'Europe',
      language: 'Greek',
      code: 'gr',
      population: 4000000,
      summary: 'Many Gods',
    },
    {
      name: 'Iceland',
      continent: 'Europe',
      language: 'Icelandic',
      code: 'is',
      population: 4000000,
      summary: 'Exploding Volcano',
    },
    {
      name: 'Portugal',
      continent: 'Europe',
      language: 'Portuguese',
      code: 'pt',
      population: 4000000,
      summary: 'Ship Builders',
    },
    {
      name: 'Malta',
      continent: 'Europe',
      language: 'Maltese',
      code: 'mt',
      population: 4000000,
      summary: 'Fishermen',
    },
    {
      name: 'Brazil',
      continent: 'South America',
      language: 'Portuguese',
      code: 'br',
      population: 4000000,
      summary: 'Best Footballers',
    },
    {
      name: 'Argentina',
      continent: 'South America',
      language: 'Spanish',
      code: 'ar',
      population: 4000000,
      summary: 'Beef Steaks',
    },
    {
      name: 'Colombia',
      continent: 'South America',
      language: 'Spanish',
      code: 'co',
      population: 4000000,
      summary: 'Wonderful Hospitality',
    },
    {
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
    },
  ];
  return rowData;
}
