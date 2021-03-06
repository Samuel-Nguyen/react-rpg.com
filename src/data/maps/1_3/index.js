const tiles = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [0, 0, 6, 6, 6, 0, 0, 0, 0, 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [0, 0, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [0, 0, 6, 6, 6, 4, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6],
  [0, 0, 6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 0, 0, 3, 0, 6],
  [2, 0, 6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6],
  [0, 0, 6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 4, 0, 0, 0, 6],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6],
  [6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6],
  [6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6],
  [6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6],
  [6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
  [6, 6, 0, 4, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];

const monsters = [
  {
    type: 'goblin',
    position: [17, 11]
  },
  {
    type: 'goblin',
    position: [16, 8]
  },
  {
    type: 'goblin',
    position: [6, 3]
  },
  {
    type: 'goblin',
    position: [5, 12]
  }
];

const stairs = {
  down: '1_2',
  up: '1_4'
};

const message = {
  title: 'As you inspect the walls, you notice a faint purple glow. Something definitely seemed off about those rats...',
  body: 'Up ahead, you notice a group of small humanoid creatures...'
};

export default {
  tiles,
  monsters,
  stairs,
  message
};
