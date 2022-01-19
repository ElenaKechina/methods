import Zombie from '../Zombie';

describe('Zombie class:', () => {
  test('should return object', () => {
    const hero = new Zombie('Zombie');

    const trueHero = {
      name: 'Zombie',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(hero).toEqual(trueHero);
  });
});
