import Swordsman from '../Swordsman';

describe('Swordsman class:', () => {
  test('should return object', () => {
    const hero = new Swordsman('Swordsman');

    const trueHero = {
      name: 'Swordsman',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(hero).toEqual(trueHero);
  });
});
