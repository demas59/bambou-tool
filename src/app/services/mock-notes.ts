import Notes from 'src/classes/Notes';

export const NOTES: Notes[] = [
  {
    name: 'Boulot',
    children: [
      {
        name: 'Finir le treeview',
        children: [{ name: 'Faire le testing' }],
      },
      { name: 'Contacter Franco' },
    ],
  },
  {
    name: 'ISEN',
    children: [
      {
        name: 'Faire le rapport',
        children: [
          { name: 'Reprendre ce qui a été fait' },
          { name: 'Développer les différente parties' },
        ],
      },
      {
        name: 'Préparer la présentation',
      },
    ],
  },
];
