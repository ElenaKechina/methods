import Bowman from '../Bowman';

describe('Bowman class:', () => {
  test('should return object', () => {
    const hero = new Bowman('Bowman');

    const trueHero = {
      name: 'Bowman',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(hero).toEqual(trueHero);
  });
});
